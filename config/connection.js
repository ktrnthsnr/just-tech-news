// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// dotenv 
require('dotenv').config();

// -- create connection to our mysql db
    // const sequelize = process.env.JAWSDB_URL
    //   ? new Sequelize(process.env.JAWSDB_URL)
    //       //  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    //     : new Sequelize('just_tech_news_db', 'root', '..removed', 
    //     {
    //       host: 'localhost',
    //       dialect: 'mysql',
    //       port: 3306,
    //       // port: 3001, //added
    //       dialectOptions: {
    //         decimalNumbers: true,
    //       }
    //     });



// // -- create connection to our database,  pass in your MySQL information for username and password
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
const sequelize = new Sequelize('just_tech_news_db', 'root', env.password, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3002
});

module.exports = sequelize;