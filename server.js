const express = require("express");
var bodyParser = require('body-parser');
const app = express();

const cors = require("cors");

const fetch = require('node-fetch');

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());


app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));









app.use(express.json());
//app.use(express.bodyParser({limit: '50mb'}));



// get driver connection
const dbo = require("./db/conn");





app.use(require('./routes/records'));



let EthereumBalance;
let AssetAmount;

const options_Event = {
  method: 'GET',
  headers: {Accept: 'application/json', 'X-API-KEY': '2d3ddf54946e4569b7cd1df8daca6e4a'}
};













 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});








