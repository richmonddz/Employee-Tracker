# Note_Taker

## Description

An employee tracker powered by Node, Inquirer and MySql with the options to view, add and update employees, departments and roles.

### Table of contents

- [Demo](#Video-Demo)
- [Description](#Description)
- [Installation](#Installation)

## Installation

1. First fork the github repo https://github.com/richmonddz/Employee-Tracker
2. Clone your newly forked repo to a directory on your computer through your terminal

```
git clone https://github.com/richmonddz/Employee-Tracker.git
```

3. Install the node dependencies to the application by entering in the terminal:

```
npm i
```

```
npm i inquirer
```

```
npm i mysql
```

```
npm i console.table
```

4. Create the database in your MySql Workbench with the `emp_schema.sql` and the `emp_seed.sql`

5. Include your MySql Workbench password in the `server.js` file in line (9) under the createConnection function.

6. To initiate the Employee Tracker, enter

```
node server.js
```

into your terminal.

## Video-Demo

---
