//simple function, have to have a name
//function square(x){
   // return x * x;
//};
//console.log(square(7));

//arrow function, these are anonymous no need of ftn name just a variable declaration

/* const squareArrow = (a, b) => {
    return (a + b)*a;
};     */

//console.log(squareArrow(3,3));

// Intereting thing is arrow function expression syntax
// This below without body and above commented one are both same

//const squareArrow = (a, b) => (a + b)*(a+b);
//Ofcourse we can not use this in every case, when we have to make other function calls and etc
//console.log(squareArrow(3,3));

const fullName = 'Israr Qureshi';
const getfirstName = (fn) => {
   return fn.split(' ')[0];
};

console.log(getfirstName(fullName));


// New version using short syntax of arrow fucntion

const getfirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getfirstName2('Cristiano Ronaldo'));
