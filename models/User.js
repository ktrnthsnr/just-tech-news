// imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
// class User extends Model {}

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }


// // define table columns and configuration
User.init(
    {
      id: {
        // Sequelize DataTypes object 
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // there cannot be any duplicate email values in this table
        unique: true,
        // w/ allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
          isEmail: true
        }
      },
      // define a password column
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // this means the password must be at least four characters long
          len: [4]
        }
      }
    },
    {
        // hash the password before saved to the db using async/await pair
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            }
          },
        // hooks: {
        //     // set up beforeCreate lifecycle "hook" functionality
        //     beforeCreate(userData) {
        //       return bcrypt.hash(userData.password, 10).then(newUserData => {
        //         return newUserData
        //       });
        //     }
        //   }
        
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );

// // define table columns and configuration -- more info
// User.init(
//   {
//     // TABLE COLUMN DEFINITIONS GO HERE
//   },
//   {
//     // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

//     // pass in our imported sequelize connection (the direct connection to our database)
//     sequelize,
//     // don't automatically create createdAt/updatedAt timestamp fields
//     timestamps: false,
//     // don't pluralize name of database table
//     freezeTableName: true,
//     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
//     underscored: true,
//     // make it so our model name stays lowercase in the database
//     modelName: 'user'
//   }
// );

// export
module.exports = User;