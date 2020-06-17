Populating the tables via Insomnia & security 

Testing locally, store your private credentials securely
=========================================================
1. Install the NPM package dotenv to manage sensitive data, info https://www.npmjs.com/package/dotenv
- $ `npm install dotenv`
2. Create an .env file and store the following credentials there:

                DB_NAME='just_tech_news_db'
                DB_USER='root'
                DB_PW='enter your mysql password here'

3. Add the .env file in your .gitignore file list so it's not uploaded to GitHub

Creating the tables
========================
Prep: Server.js -  turn on the server with sequelize.sync({ force: true }) and confirm the database tables were recreated, switch back to using { force: false } and restart the server one more time and validate the tables were created.

After running `npm start` and the tables are re-created, start by getting sample user and post data into the database. 

Run in this order:

1. Create a new user using POST /api/users (see the route tables for sample data to add)

2. Create a new post using POST /api/posts (see the route tables for sample data to add)
or seed via the seed_notes.sql

3. Then create a new vote on a post by using PUT /api/posts/upvote and passing in the following data (see the route tables for sample data to add)

