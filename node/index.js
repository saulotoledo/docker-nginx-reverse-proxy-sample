const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'sample-db'
};

app.get('/', (req,res) => {
  const connection = mysql.createConnection(config);

  const newName = req.query.name || 'John Doe';
  connection.query(`INSERT INTO people(name) values('${newName}')`);

  connection.query(`SELECT * FROM people ORDER BY id DESC`, (err, queryResult) => {
    connection.end();

    if (err) {
      throw err;
    }

    const result = '<h1>Full Cycle Rocks!</h1><ul>' +
      queryResult.map(entry => `<li>${entry.name}</li>`).join('') +
      '</ul>';

    res.send(result);
  });
});

app.listen(port, ()=> {
  console.log('Running on port ' + port);
});