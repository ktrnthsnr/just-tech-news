// -- sets up the server to test the new Express.js routes
// -- this file collects all the API routes and packages them together in one index file

const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;