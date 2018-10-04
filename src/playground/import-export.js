//  ---  Expor import code to go back to -------
// **** Below is  app.js file
// import isSenior, {isAdult, canDrink} from './persons.js';

console.log(isAdult(21));
console.log(canDrink(22));
console.log(isSenior(64));

// **** Below is persons.js file  from where export is made to above file

console.log('persons.js is running');

export {isAdult, canDrink};

const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

export default (x) => x >= 65;
