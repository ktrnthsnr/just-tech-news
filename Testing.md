Populating the tables via Insomnia

Prep: Server.js -  turn on the server with sequelize.sync({ force: true }) and confirm the database tables were recreated, switch back to using { force: false } and restart the server one more time and validate the tables were created.

After running `npm start` and the tables are re-created, start by getting sample user and post data into the database. 

Run in this order:

1. Create a new user using POST /api/users (see the route tables for sample data to add)

2. Create a new post using POST /api/posts (see the route tables for sample data to add)
or seed via the seed_notes.sql

3. Then create a new vote on a post by using PUT /api/posts/upvote and passing in the following data (see the route tables for sample data to add)