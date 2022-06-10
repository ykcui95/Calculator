const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function(req, res) {
  // res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.number1);
  var num2 = Number(req.body.number2);

  var result = num1 + num2;

  console.log(req.body);
  res.send("The result is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / Math.pow(height, 2);
  // console.log(Math.pow(height, 2));
  res.send("Your BMI is " + result);
});


app.listen(port, function() {
  console.log("Server listening to " + port)
})
