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
    "SELECT employees.first_name, employees.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employees INNER JOIN role on role.id = employees.role_id INNER JOIN department on department.id = role.department_id left join employees e on employees.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.log("----Scranton Employee List----");
      console.table(res);
      initiateRun();
    }
  );
}
function viewScranRoles() {
  connection.query(
    "SELECT employees.first_name, employees.last_name, role.title AS Title FROM employees JOIN role ON employees.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.log("----Scranton Employee Roles----");
      console.table(res);
      initiateRun();
    }
  );
}
function viewScranDep() {
  connection.query(
    "SELECT employees.first_name, employees.last_name, department.name AS Department FROM employees JOIN role ON employees.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employees.id;",
    function (err, res) {
      if (err) throw err;
      console.log("----Scranton Departments----");
      console.table(res);
      initiateRun();
    }
  );
}
function updateScranEmp() {
  connection.query(
    "SELECT employees.last_name, role.title FROM employees JOIN role ON employees.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.log(res);
      inquirer
        .prompt([
          {
            name: "lastName",
            type: "rawlist",
            choices: function () {
              var lastName = [];
              for (var i = 0; i < res.length; i++) {
                lastName.push(res[i].last_name);
              }
              return lastName;
            },
            message: "Which Employee do you want to update? ",
          },
          {
            name: "role",
            type: "rawlist",
            message: "What is the Employees new title? ",
            choices: selectRole(),
          },
        ])
        .then(function (val) {
          var roleId = selectRole().indexOf(val.role) + 1;
          connection.query(
            "UPDATE employees SET WHERE ?",
            {
              last_name: val.lastName,
              role_id: roleId,
            },
            function (err) {
              if (err) throw err;
              console.table(val);
              initiateRun();
            }
          );
        });
    }
  );
}
var newRole = [];
function selectRole() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      newRole.push(res[i].title);
    }
  });
  return newRole;
}
var newManager = [];
function selectManager() {
  connection.query(
    "SELECT first_name, last_name FROM employees",
    function (err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        newManager.push(res[i].first_name);
      }
    }
  );
  return newManager;
}
var newDepartment = [];
function selectDepartment() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      newDepartment.push(res[i].name);
    }
  });
  return newDepartment;
}
function addScranEmp() {
  inquirer
    .prompt([
      {
        name: "firstname",
        type: "input",
        message: "Enter Employee first name ",
      },
      {
        name: "lastname",
        type: "input",
        message: "Enter Employee last name ",
      },
      {
        name: "role",
        type: "list",
        message: "What is the Employees role? ",
        choices: selectRole(),
      },
      {
        name: "Department",
        type: "rawlist",
        message: "Who is the Employees Manager?",
        choices: selectManager(),
      },
    ])
    .then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1;
      var managerId = selectManager().indexOf(val.choice) + 1;
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: val.firstName,
          last_name: val.lastName,
          manager_id: managerId,
          role_id: roleId,
        },
        function (err) {
          if (err) throw err;
          console.table(val);
          initiateRun();
        }
      );
    });
}
function addScranRole() {
  connection.query(
    "SELECT role.title AS Title, role.salary AS Salary FROM role LEFT JOIN department.name AS Department FROM department;",
    function (err, res) {
      inquirer
        .prompt([
          {
            name: "Title",
            type: "input",
            message: "What is the roles Title?",
          },
          {
            name: "Salary",
            type: "input",
            message: "What is the Salary?",
          },
          {
            name: "department",
            type: "rawlist",
            message: "Which Department will this role be included to?",
            choices: selectDepartment(),
          },
        ])
        .then(function (res) {
          var department = selectDepartment().indexOf(res.choice) + 1;
          connection.query(
            "INSERT INTO role SET ?",
            {
              title: res.Title,
              salary: res.Salary,
              department: department,
            },
            function (err) {
              if (err) throw err;
              console.table(res);
              initiateRun();
            }
          );
        });
    }
  );
}
function addScranDep() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What Department would you like to add?",
      },
    ])
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ? ",
        {
          name: res.name,
        },
        function (err) {
          if (err) throw err;
          console.table(res);
          initiateRun();
        }
      );
    });
}
