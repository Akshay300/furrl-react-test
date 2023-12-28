const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;

app.get("/api/employeesdata", (req, res) => {
  const employees = [
    {
      name: "Adam Miller",
      email: "adam@example.com",
      designation: "CEO",
      reporting_manager: null,
    },
    {
      name: "John Doe",
      email: "john@example.com",
      designation: "Manager",
      reporting_manager: "adam@example.com",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      designation: "Manager",
      reporting_manager: "adam@example.com",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      designation: "Engineer",
      reporting_manager: "john@example.com",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      designation: "Engineer",
      reporting_manager: "john@example.com",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      designation: "Engineer",
      reporting_manager: "john@example.com",
    },
    {
      name: "Eva Green",
      email: "eva@example.com",
      designation: "Manager",
      reporting_manager: "jane@example.com",
    },
    {
      name: "David White",
      email: "david@example.com",
      designation: "Engineer",
      reporting_manager: "eva@example.com",
    },
    {
      name: "Frank Black",
      email: "frank@example.com",
      designation: "Engineer",
      reporting_manager: "eva@example.com",
    },
    {
      name: "Grace Taylor",
      email: "grace@example.com",
      designation: "Engineer",
      reporting_manager: "eva@example.com",
    },
  ];

  // Build the organization tree
  const organizationTree = buildTree(employees);

  // console.log("organizationTree----------------->>>>>>>>>>>>>",organizationTree);

  res.json(organizationTree);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function buildTree(employees) {
  const employeeMap = new Map();

  // Create a map to efficiently look up employees by their email
  employees.forEach((employee) => {
    employee.subordinates = [];
    employeeMap.set(employee.email, employee);
  });

  // Build the tree structure
  const rootEmployees = [];
  employees.forEach((employee) => {
    if (employee.reporting_manager) {
      const manager = employeeMap.get(employee.reporting_manager);
      if (manager) {
        manager.subordinates.push(employee);
      }
    } else {
      rootEmployees.push(employee);
    }
  });

  return rootEmployees;
}

// Example data for 10 employees

// Output the organization tree
//console.log(JSON.stringify(organizationTree, null, 2));
