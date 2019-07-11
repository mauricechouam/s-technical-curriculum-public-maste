// create a constructor called House that takes the following parameters: style, numOfRooms, squareFootage, hasCentralAir, color
var House = function (style) {
    // assign each of the parameters a value
    this.style = style;

    // create a method called printBrochure that prints each value to the console
    this.printBrochure = function () {
        // your code here to print to console
    }
}

// create an instance of House called 'blueHouse' that is a ranch home with 12 rooms, 1500sqft, does have central air and is blue in color
var blueHouse = new House('ranch', 12, 1500, true, 'blue');

// create an instance of House called 'redHouse' that is a craftsman style home with 15 rooms, 2500sqft, does have central air and is red in color

// create an instance of House called 'greenHouse' that is a duplex sty;e home with 6 rooms, 800sqft, does NOT have central air and is blue in color

// call the printBrochure method for each home

// the green house gets an update! change the value of hasCentralAir from false to true

// the blue house gets an extension added! add 4 rooms to it, and 900sft of space

// reprint the brochures for the blue house and the green house