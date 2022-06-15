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
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Head Accountant", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("HR Rep", 90000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Receptionist", 60000, 5);
INSERT INTO role (title, salary, department_id)
VALUE ("CS Rep", 60000, 6);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 60000, 1);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Michael", "Scott", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Dwight", "Schrute", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kevin","Malone",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jim", "Halpert", 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Andy", "Bernard", null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Angela", "Martin", 3, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Toby", "Flenderson", null, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Pam", "Beesly", null, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kelly", "Kapoor", null, 9);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Stanley", "Hudson", null, 10);