// In this challenge, you need to refactor the code in several ways. The comments will help guide you through the tasks.


/*******************/
/***** Task #1 *****/
/*******************/
// Refactor `var` to either `let` or `const`
// Change the function to an arrow function
// Consider whether you still need parens around the parameters
// Update the string concatenation

var sendSMS = function (message, recipient) {
    return message + ", " + recipient;
}

var makePhoneCall = function (recipient) {
    return "Dialing.... " + recipient;
}



/*******************/
/***** Task #2 *****/
/*******************/
// Update the string concatenation
// Change the functions to arrow function where applicable (Hint: One will change, and one will not.)

var student = {
    name: "Hussain",
    studyForExam: function () {
        console.log("Be quiet! " + this.name + " is studying for the examination!");
        setTimeout(function () {
            console.log("Almost time for " + this.name + " to sit the examination.");
        }, 1000);
    }
}

student.studyForExam();


/*******************/
/***** Task #3 *****/
/*******************/
// Update the string concatenation
// Change the functions to arrow function if applicable 

var teacher = {
    name: "Alec",
    gradeHomework: function () {
        console.log("..." + this.name + " is thinking...*why do all my students get A grades?*");
    }

}

/*******************/
/***** Task #4 *****/
/*******************/
// Consider whether we can change this for-loop. If so, update it. If not, write a comment on why you wouldn't change anything

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // after refactoring the for loop, this should still print 10

/*******************/
/***** Task #5 *****/
/*******************/
// Refactor `var` to either `let` or `const`
// Update the functions to arrow functions where applicable
// Consider what `.bind(this)` is doing in this code and alter as necessary


var score;

var sword = function (size) {
    this.element = document.createElement("div");
    this.element.className = "sword " + size;
    this.hitPoints = 3;

    this.element.addEventListener(
        "click",
        function () {
            score += this.hitPoints;
            attackOpponent();
        }.bind(this),
        false
    );
};