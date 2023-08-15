const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Hello Word")
})

app.listen(PORT, () => {
  console.log("Escutando na porta 3000")
})