// create a constructor called House that takes the following parameters: style, numOfRooms, squareFootage, hasCentralAir, color
var House = function (style, numOfRooms, squareFootage, hasCentralAir, color) {
    // assign each of the parameters a value
    this.style = style;
    this.numOfRooms = numOfRooms;
    this.squareFootage = squareFootage;
    this.hasCentralAir = hasCentralAir;
    this.color = color;

    // create a method called printBrochure that prints each value to the console
    this.printBrochure = function () {
        console.log(`------------------- \nStyle: ${this.style} \nNumber of Rooms: ${this.numOfRooms} \nSize: ${this.squareFootage} \nA/C: ${this.hasCentralAir ? 'yes' : 'no'} \nColor: ${this.color} \n-------------------`);
    }
}

// create an instance of House called 'blueHouse' that is a ranch home with 12 rooms, 1500sqft, does have central air and is blue in color
var blueHouse = new House('ranch', 12, 1500, true, 'blue');

// create an instance of House called 'redHouse' that is a craftsman style home with 15 rooms, 2500sqft, does have central air and is red in color

var redHouse = new House('craftsman', 15, 2500, true, 'red');

// create an instance of House called 'greenHouse' that is a duplex sty;e home with 6 rooms, 800sqft, does NOT have central air and is blue in color

var greenHouse = new House('duplex', 6, 800, false, 'green');

// call the printBrochure method for each home
blueHouse.printBrochure();
redHouse.printBrochure();
greenHouse.printBrochure();

// the green house gets an update! change the value of hasCentralAir from false to true
greenHouse.hasCentralAir = true;

// the blue house gets an extension added! add 4 rooms to it, and 900sft of space
blueHouse.numOfRooms += 4;
blueHouse.squareFootage += 900;

// reprint the brochures for the blue house and the green house
blueHouse.printBrochure();
greenHouse.printBrochure();