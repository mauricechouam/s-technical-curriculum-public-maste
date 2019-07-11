// create a constructor function called Employee that takes in the following four parameters: firstName, jobTitle, salary, isActive
var Employee = function (firstName, jobTitle, salary, isActive) {
    // assign all of the parameters inside the constructor to the values being passed when a new instance is created
    this.firstName = firstName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.isActive = isActive;
};

// export the employee constructor so that we can require it in our Company constructor
module.exports = Employee;
