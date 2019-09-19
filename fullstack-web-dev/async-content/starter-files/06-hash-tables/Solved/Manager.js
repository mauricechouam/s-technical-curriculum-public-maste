// Import the Barista class
const Barista = require('./Barista');

// Create a new class called Manager that will inherit properties and methods from the Barista class
class Manager extends Barista {
    // Create a constructor that takes the original four  paramaters, but adds 'adminLevel' and 'role' for our Admin class
    constructor(firstName, lastName, age, coffeeSkillLevel, adminLevel, role) {
        // Don't forget to call super for the inherited properties
        super(firstName, lastName, age, coffeeSkillLevel);

        // set the new 'adminLevel' and 'role' properties
        this.adminLevel = adminLevel;
        this.role = role;
    }

    // Create a new method called authorizeAccess on the Admin class that returns a string stating the admin's adminLevel.
    authorizeAccess() {
        console.log(`${this.firstName} has access level ${this.adminLevel}`);
    }
}

// Create a new instance of the Admin class, pass in all the necessary properties
let john = new Manager('John', 'Smith', 25, 10, 3, 'Shift Manager');

// Call the authorizeAccess method on the Admin class
john.authorizeAccess();

// Call the getCoffeeSkillLevel method on the Admin class that is inherited from the Barista class, this should work even though you didn't define getCoffeeSkillLevel in the Admin class

// assign it to a variable called skillLevel, and then console log it
const skillLevel = john.getCoffeeSkillLevel();
console.log(skillLevel);

// run your program to check it all works and that you get two outputs
