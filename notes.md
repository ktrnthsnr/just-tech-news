NOTES

containing mysql copy from a prev assignment..

## Usage
- Within the VSCode terminal, start MySQL
-   $ `mysql -u root -p`
- Enter your MySQL password when prompted

- Create the database, tables and seed the tables
-   mysql> `source ./db/schema.sql`
-   mysql> `source ./db/seeds.sql`
- Run the application within the terminal
-   $ `npm start`
- ![invokeapp](./img/<insert>.jpg "Start application")
- To see how to invoke the command-line application on the terminal, and then afterwards how to view the tables via MySQL command-line, here is a quick walkthrough:
<insert walkthrough link>

## Schema
- To view the database scheme from the terminal, initiate the MySQL command line, 
by typing:     `mysql -u root -p`    in your command line, then add your MySQL password when prompted.

- Check the database and tables were created by running in the MySQL command line,
* mysql> `USE <insert>; show tables; describe Category; describe Product; describe Tag;describe ProductTag;`
- You should see this result
- ![showtables](./img/<insert>.jpg "Show tables")

- Check the tables after seeding by running in the mysql command line,
* mysql> `select * from department; select * from role; select * from employee;`
- You should see this result
- ![selecttables](./img/<insert>.jpg "Select tables")