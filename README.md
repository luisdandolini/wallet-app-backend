# Wallet App API (Back-end)

## Intro
This is an API created using Node.js, Express and PG.

## Requirements
- Node.js
- Docker

## Steps to run the project

1. Clone the project

```
https://github.com/luisdandolini/wallet-app-backend.git
```   

2. Navigate to project folder and Install Dependecies

```
cd wallet-app-backend
npm install
``` 

3. Create an PG instance no docker
```
Example:
docker run --name postgres-finances -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
```

4. Create a .env file following the example:
```
DB_USER=docker
DB_PASSWORD=docker
DB_NAME=finances
DB_HOST=localhost
DB_PORT=5432
```

5. Run config script to create database and tables:
```
npm start config:init
Obs: if don't stop press CTRL + C
```

6. Run the project in dev version:
```
npm start
```

## Documentation
Use insomina to import the file bellow: 
https://github.com/luisdandolini/wallet-app-backend/blob/main/insomnia.json