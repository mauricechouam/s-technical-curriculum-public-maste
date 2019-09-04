// In this challenge, you need to refactor the code in several ways: 
// - Where appropriate, refactor functions to arrow functions
// - Refactor all instances of `var` to either `const` or `let
// - All string concatenations should use th `${variable}` syntax


/*******************/
/***** Task #1 *****/
/*******************/
const sendSMS = (message, recipient) => `${message}, ${recipient}`;

const makePhoneCall = recipient => `Dialing....${recipient}`;


/*******************/
/***** Task #2 *****/
/*******************/

const student = {
    name: "Hussain",
    studyForExam: function () {
        console.log(`Be quiet! ${this.name} is studying for the examination!`);
        setTimeout(() => console.log(`Almost time for ${this.name} to sit the examination.`), 1000);
    }
}

student.studyForExam();


/*******************/
/***** Task #3 *****/
/*******************/

const teacher = {
    name: "Alec",
    gradeHomework: function () {
        console.log(`... ${this.name} is thinking...*why do all my students get A grades?*`);
    }

}

/*******************/
/***** Task #4 *****/
/*******************/
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // after refactoring the for loop, this should still print 10

/*******************/
/***** Task #5 *****/
/*******************/

let score;

const sword = function (size) {
    this.element = document.createElement("div");
    this.element.className = `sword ${size}`;
    this.hitPoints = 3;

    this.element.addEventListener(
        "click",
        () => {
            score += this.hitPoints;
            attackOpponent();
        },
        false
    );
};