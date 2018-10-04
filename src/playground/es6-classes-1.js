/// -----  Taking Notes:  ES6 Classes Part 1 -------
// Q. What do we need classes for?
// A. The goal of the classes is to re-use code
// We will create class and several instances of it
// For example you want to build a website for selling cars
// We might have a Car class,  we create many instances of that class for each
// of the car we are selling.
// Now each car has some data specific to it: that is make, model, vin, getDescription
// So getDescription would be the method used for all cars, this will be the reusable code
// IMPORTANT:  Constructor function is the ftn that gets called when we create a new instance
// of a class and it gets callled with all the arguments we passed in.
// IMPORTANT: So methods defined inside our class are available on individual instances of our class
// e.g a method greetinns inside a Person class is available for the instance named  'me'
//  of person class by calling it  me.greetings()
console.log('App is running');

class Person {

    constructor(name='Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    // creating a function
    getGreetings() {
        //return 'Hi ' + this.name + ' How may i help you';
        return `Hello i am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old `;
    }
}  

// creating subclass named Student of parent Person class

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    // Overiding parent function
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description = description + `Thier major is ${this.major}`;
        }
        return description;
    }
}

//Challenge
// 1- Create new subclass named Traveller
// Override the Greetings method
// i- Hi! i am is Israr Qureshi and my home location is Islamabad
// ii- Hi! i am Anonymous

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getGreetings() {
        let greeting = super.getGreetings();
        if(this.hasLocation()) {
            greeting += ` and location is ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveller('Israr Qureshi', 24, 'Islamabad');
console.log(me.getGreetings());

const other = new Traveller(undefined, undefined, 'nowhere');
console.log(other.getGreetings());