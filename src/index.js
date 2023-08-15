const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');

app.get('/', (req, res) => {
  res.send("Hello Word")
})

app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categories", (error, response) => {
    if(error) {
      return res.status(500).json(error);
    }

    return res.status(200).json(response.rows);

  });
});

app.listen(PORT, () => {
  db.connect()
    .then(() => {
      console.log("DB connected")
    })
    .catch(error => {
      throw new Error(error)
    });
  console.log("Escutando na porta 3000")
})