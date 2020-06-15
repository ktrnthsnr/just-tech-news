﻿# just-tech-news
Just Tech News is a blog where users can post, upvote, and comment on links to news articles.

## GitHub URL
https://github.com/ktrnthsnr/just-tech-news

## Table of Contents
* [Description](#description)
* [Installations](#installations)
* [Usage](#usage)
* [Technology](#technology)
* [Contribution](#contribution)

## Description
- This repo contains the Just Tech News blog application, within a Node.js JavaScript platform. For this exercise the work involved focused entirely on the backend setup of an e-commerce website and the connective pieces to communicate with the frontend API. 
- To start, given a built Express.js API, the work for this project contains JavaScript configuration, MySQL2 commands, and Sequelize model scripts that query the backend database tables.
- Sequelize is a JavaScript library and a Promise based Node.js object relational mapping (ORM) package that acts as a dialect to various SQL server software like MySQL. The Sequalize ORM is used to interact between the Expres.js web server and the MySQL database. The Sequelize model script provides the query language to view, add, update or delete content from the database. Finally, the Express.js API route scripts will call the database using the Sequelize models or database queries. 
- For this application, the Sequelize ORM interacts with the Heroku JawsDB add-on which provides the MySQL database and holds the tables' content. The API endpoints for each query type can be viewed and tested via the debugging tool Insomnia, which can render GET, POST, PULL, and DELETE routes through its browser.

## Installations
- Prereq: install VSCode, Node.js, and MySQL http://dev.mysql.com/downloads/
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install npm
- $ `npm init -y` or $ `npm install`
- Manaully update the package.json to  `"main": "server.js",` instead of index.js
- Create a .gitignore file in the root and add `node_modules` to this file
- If you need to re-add the dependencies, run $ `npm install`
- Install Express, Sequelize and mysql2
- $ `npm install express sequelize mysql2`
- Install NPM package dotenv to manage sensitive data, info https://www.npmjs.com/package/dotenv
- $ `npm install dotenv`
- To install the database for this project, you'll need a Heroku account and the JawsDB add-on.
- For more info, https://elements.heroku.com/addons/jawsdb
- To install mysql manually (if not already installed per above)
- $ `npm install -g mysql`
- $ `npm install mysql2 --save`
- Install console.table to print MySQL in console
- $ `npm install console.table --save`

## Usage
- Within the VSCode terminal, start MySQL
-   $ `mysql -u root -p`
- Enter your MySQL password when prompted
- To create the database and run the schema script, enter in the MySQL2 command line,
- mysql> `source db/schema.sql`
- Start the server in terminal bash
- $ `npm start`

## Technology
Heroku JawsDB as the MySQL db, MySQL2, Express.js, Sequelize, Node.js, JavaScript, npm, HTML, CSS, dotenv package

## Contribution
ktrnthsnr

### ©️2020 ktrnthsnr
