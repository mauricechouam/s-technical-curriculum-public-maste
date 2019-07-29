// import our Company constructor 
var Company = require("./Company.js");

// create a new instance of Company
var microsoft = new Company('Microsoft', 30000000, true);

// add a 3 new employees to the instance of this company by calling the addEmployee method on your new company object
microsoft.addEmployee('Mary', 'Engineer', 110000, true);
microsoft.addEmployee('John', 'Marketing Specialist', 55000, true);
microsoft.addEmployee('Sarah', 'CTO', 180000, false);

// console.log your new object
console.log(microsoft);

// console.log the number of employees working your new company
console.log(microsoft.numOfEmployees());
