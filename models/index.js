// import
const User = require('./User');
const Post = require("./Post");


// -- Foreign Key associations more info: https://sequelize.org/v3/docs/associations/

// create associations

User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
foreignKey: 'user_id',
});

  // export
module.exports = { User, Post };