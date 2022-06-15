const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "scranton_db",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected" + connection.threadId);
  console.log("Welcome to the Scranton Employee Database!");
  initiateRun();
});
function initiateRun() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a table to view.",
        name: "choice",
        choices: [
          "View All Scranton Employees?",
          "View All Scranton Employees By Roles?",
          "View All Scranton Employees By Deparments",
          "Update Scranton Employee?",
          "Add Employee to Scranton?",
          "Add Role to Scranton?",
          "Add Department to Scranton?",
        ],
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View All Scranton Employees?":
          viewScranEmp();
          break;

        case "View All Scranton Employees By Roles?":
          viewScranRoles();
          break;
        case "View All Scranton Employees By Deparments":
          viewScranDep();
          break;

        case "Update Scranton Employee?":
          updateScranEmp();
          break;

        case "Add Employee to Scranton?":
          addScranEmp();
          break;

        case "Add Role to Scranton?":
          addScranRole();
          break;

        case "Add Department to Scranton?":
          addScranDep();
          break;
      }
    });
}
function viewScranEmp() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.log("Scranton Employee List");
      console.table(res);
      initiateRun();
    }
  );
}
function viewScranRoles() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.log("Scranton Employee Roles");
      console.table(res);
      initiateRun();
    }
  );
}
function viewScranDep() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    function (err, res) {
      if (err) throw err;
      console.log("Scranton Departments");
      console.table(res);
      startPrompt();
    }
  );
}
