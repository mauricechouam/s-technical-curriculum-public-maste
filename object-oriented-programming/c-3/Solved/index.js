// create a new class construction called Vacation
class Vacation {
    // call constructor() and pass in the following parameters: location, travelType, cost, hotelIncluded
    constructor(location, travelType, cost, hotelIncluded) {

        // assign those parameters within the constructor
        this.location = location;
        this.travelType = travelType;
        this.cost = cost;
        this.hotelIncluded = hotelIncluded
    }

    // create setters and getters for each of the objects values using the 'get' and 'set' keywords
    set setLocation(location) {
        this.location = location;
    }
    get getLocation() {
        return `The location is set to ${this.location}.`
    }

    set setTravelType(travelType) {
        this.travelType = travelType;
    }
    get getTravelType() {
        return `You are travelling by ${this.travelType}.`
    }

    set setCost(cost) {
        this.cost = cost;
    }
    get getCost() {
        return `The cost of this vacation is $${this.cost}.`
    }

    set setHotelIncluded(hotelIncluded) {
        this.hotelIncluded = hotelIncluded;
    }
    get getHotelIncluded() {
        return `Includes hotel: ${this.hotelIncluded}`
    }

}

// create a new instance of Vacation
const summer = new Vacation('Bahamas', 'flight', 1200, false);

// console log each of this new instance's property values
console.log(summer.getLocation);
console.log(summer.getTravelType);
console.log(summer.getCost);
console.log(summer.getHotelIncluded);
