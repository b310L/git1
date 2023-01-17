const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());
 
//create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'my_db'
// });

// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });

app.get('/',(req, res) => {
    res.send("shi")
})
//add new user
app.post('/submit',(req, res) => {
  let data = {name: req.body.name};
  console.log(data);
});

app.listen(5000, () => {
  console.log("Server running successfully on 5000");
});