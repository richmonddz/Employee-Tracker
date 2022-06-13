DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR (30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR (30),
  salary DECIMAL,
  departmentID INT
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR (30),
  lastName VARCHAR (30),
  roleID INT,
  managerID INT
);