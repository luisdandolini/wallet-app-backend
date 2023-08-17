const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');
const routesCategories = require('./routes/categories');
const routesUser = require('./routes/users');

app.use(express.json());

app.use('/categories', routesCategories);
app.use('/users', routesUser);

app.listen(PORT, () => {
  db.connect()
    .then(() => {
      console.log("DB connected")
    })
    .catch(error => {
      throw new Error(error)
    });
  console.log("Escutando na porta 3000")
});