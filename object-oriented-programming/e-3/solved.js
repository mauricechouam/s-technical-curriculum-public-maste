// 1. Create a new class construction called Vacation using ES6 `Class` syntax
class Vacation {

    // 2. Call constructor() and pass in the following parameters: location, travelType, cost, hotelIncluded
    constructor(location, travelType, cost, hotelIncluded) {

        // 3. Assign those parameters within the constructor
        this.location = location;
        this.travelType = travelType;
        this.cost = cost;
        this.hotelIncluded = hotelIncluded
    }

    // 4. Create setters and getters for each of the constructor parameters using the 'get' and 'set' keywords
    // GOOGLE the 'get' and 'set' keywords if you're unsure what these are
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

// 5. Create a new instance of Vacation
const summer = new Vacation('Bahamas', 'flight', 1200, false);

// 6. Console log each of this new instance's property values
// location
// travel type
// cost
// whether the hotel is included
console.log(summer.getLocation);
console.log(summer.getTravelType);
console.log(summer.getCost);
console.log(summer.getHotelIncluded);
