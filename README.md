# Welcome
## Project Setup
- clone the project
- Execute 'npm install' on the same path as of your root directory of downloaded project 
- Create .env file in root directory and add following env variables
    - PORT=300
- Inside the src/config create new file named config.json and ad following code:
```
{
    "development": {
        "username": "YOUR_DB_LOGIN_NAME",
        "password": "YOUR_MYSQL_PASSWORD",
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
}  
```
- Once you have added your db config as listed. go to the src folder from your terminal and execute `npx sequelize db:create` and then execute 
`npx sequelize db:migrate`
```
## DB design
 - Airplane Table
 - Flight Table
 - Airpot
 - City

 - A Flight belongs to an airport but one airplane can be used in multiple flights
 - A city has many airports but one aiport belongs to a city
 - One Aiport can hahve many flights , but a flight belongs to one airport
```
## Tables
### City -> id,name,created_at,updated_at
### Airport -> id,name,address,city_id,created_at,updated_at
- Relationship -> City has many Airports and Airport belongs to a City(one to Many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```
## Seeders Pushing Code
### Create Seed file
```
npx sequelize seed:create --name "your-seed-name"
```
### actual seeding to database
```
npx sequelize db:seed:all
```
## Auth Service


