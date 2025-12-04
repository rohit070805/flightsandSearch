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