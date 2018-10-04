// arguments object no longer bound with the arrow function
// means you can not access arguments of a fucntion in a ftn using arguments object 

/* const producer = function(a,b) {
    console.log(arguments);
    return a + b;
};  */

//console.log(producer(55,1,1000,200));

// In arrow function argument object is no longer bound

/*const producer2 = (a,b) => {
        console.log(arguments);    // gives error arguments not defined
        return a + b;
};

console.log(producer2(1,2));  */

// More on this 
// This keyword no longer bound

// Let create an object named user and give it properties
// And add a function to its property


// Using mpa insted for forEach loop
// map lets us change the values of an array return a complete modified one array which we can store
// in a new variable as well
/* const user = {
    name: 'Israr',
    cities: ['Islamabad', 'lahore', 'Gilgit'],
    uservisitedPlaces() {
       
      return this.cities.map(               (city) => this.name + ' has lived in' + city
                            );

    }

};

console.log(user.uservisitedPlaces());  */


// Challenge area
// - Make a multiplier object with two properties
// 1- An array of numbers  2- a number any that will be multiplied with each no of array
// Than return a new array with numbers being multiplied

// Challenge accepted

const multiplier = {
    numbers: [1, 6, 10],
    singleNumber: 2,
    multiply() {
         return   this.numbers.map( (n) => n * this.singleNumber     );
    }
}

console.log(multiplier.multiply());

