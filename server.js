const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "scranton_db",
});
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as ID" + connection.threadId);
    console.log("Welcome to the Scranton Employee Database!")
    initiateRun();
});
function initiateRun() {
    inquirer.prompt([
    {
    type: "list",
    message: "Please select a table to view.",
    name: "choice",
    choices: [
              "View All Scranton Employees?", 
              "View All Scranton Employees By Roles?",
              "View All Scranton Employees By Deparments", 
              "Update Scranton Employee",
              "Add Employee to Scranton?",
              "Add Role to Scranton?",
              "Add Department to Scranton?"
            ]
    }