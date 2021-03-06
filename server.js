const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync establishes or turns on connection to the database and server
    // Sequelize is taking the models and connecting them to associated database tables

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {       // set to 'true' to recreate all tables.
    app.listen(PORT, () => console.log('Now listening'));
  });

//         // if set force: true, all tables will be recreated with npm start
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });