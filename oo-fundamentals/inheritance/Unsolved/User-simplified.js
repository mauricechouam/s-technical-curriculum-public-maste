// In this challenge you will be creating two classes, one original parent class and one that inherits its methods and properties

// Create a class constructor named User
class User {

    // Create a constructor that takes the properties 'firstName', 'lastName', 'age', and 'emotion' and set them
    constructor(firstName) {
        this.firstName = firstName;
        // complete the rest of the parameters
    }

    // create a getEmotion function getter that returns a string saying how the user is feeling
    getEmotion() {
        // complete the appropriate console.log
    }

    // create a setEmotion function setter that sets the value passed in as the new emotion for the object

}

// Create an instance of the User class, give it the four original properties
let abdul = new User('Abdul', 'Salis', 31, 'happy');

// Call the getEmotion method

// Set a new emotion on the new user

// Call the getEmotion method ... did your new emotion get console logged?


// Create a new class called Admin that will inherit properties and methods from the User class
class Admin extends User {

    // Create a constructor that takes the original four  paramaters, but adds 'adminLevel' and 'role' for our Admin class
    constructor() {

        // Don't forget to call super for the inherited properties
        super(firstName, lastName, age, emotion);

        // set the new 'adminLevel' and 'role' properties
        this.adminLevel = adminLevel;
        this.role = role;
    }

    // Create a new method called authorizeAccess on the Admin class that returns a string stating the admin's adminLevel.
    authorizeAccess() {
        // write the appropriate  console.log
    }
}


// Create a new isntance of the Admin class, pass in all the necessary properties

// Call the authorizeAccess method on the Admin class

// Call the getEmotion method on the Admin class that is inherited from the User class, this should work even though you didn't define getEmotion in the Admin class