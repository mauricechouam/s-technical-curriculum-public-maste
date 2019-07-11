// first require the Employee constructor from employee.js
var Employee = require("./employee.js");

// create a constructor function called Company that takes in the following three parameters: companyName, revenue, isPublic
var Company = function (companyName, revenue, isPublic
) {
    // assign all of the parameters inside the constructor to the values being passed when a new instance is created
    this.companyName = companyName;
    this.revenue = revenue;
    this.isPublic = isPublic

    // create an empty array called 'employees'  where we will store new employees that work at the company
    this.employees = [];

    // create a method called 'addEmployee' that requires all the parameters of the Employee constructor, creates a new employee by calling the Employee constructor, and pushes that new object instance to the this.employees array
    this.addEmployee = function (firstName, jobTitle, salary, isActive) {
        this.employees.push(new Employee(firstName, jobTitle, salary, isActive));
    };


    // create a method that returns the number of employees currently working at the company
    this.numOfEmployees = function () {
        return this.employees.length;
    };
};

// export the Company constructor so we can require it in index.js
module.exports = Company;
