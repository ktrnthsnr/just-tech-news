// -- sets up the server to test the new Express.js routes
// -- this file collects all the API routes and packages them together in one index file

// import
const router = require('express').Router();
const userRoutes = require('./user-routes');

// define URL under /users endpoint
router.use('/users', userRoutes);

// export
module.exports = router;