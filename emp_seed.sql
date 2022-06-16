INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Accounting");
INSERT INTO department (name)
VALUE ("Management");
INSERT INTO department (name)
VALUE ("Human Resources");
INSERT INTO department (name)
VALUE ("Reception");
INSERT INTO department (name)
VALUE ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUE ("Branch Manager", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 90000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Branch Co-Manager", 110000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Head Accountant", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("HR Rep", 90000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Receptionist", 60000, 5);
INSERT INTO role (title, salary, department_id)
VALUE ("CS Rep", 60000, 6);



INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Michael", "Scott", null, 1);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Dwight", "Schrute", 4, 2);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Kevin","Malone", 6, 3);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Jim", "Halpert", 1, 4);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Andy", "Bernard", 4, 2);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Angela", "Martin", 1, 5);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Toby", "Flenderson", null, 6);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Pam", "Beesly", 1, 7);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Kelly", "Kapoor", 1, 8);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Stanley", "Hudson", 4, 2);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees;