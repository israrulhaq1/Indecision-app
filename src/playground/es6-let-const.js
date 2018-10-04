var nameVar = 'Israr';
var nameVar = "Rayan";
console.log('namevar', nameVar);

let nameLet = 'Jeney';
nameLet = 'Sophora';            // It lets you redefine but nor re declaration
console.log('baby: ',nameLet);

const nameConst = 'Frank';
//nameConst = 'Underwood';   It does not even let you redefine left alone the re declaration
console.log('nameConst: ', nameConst);

// Some other scope differences
function getpetName(){
    var petName = 'Ha';
    return petName;
}

const petName = getpetName();
console.log('Pet Name is: ', petName);    //We can not directly access a var, let, const outside a function

// But const & let are "Block scoped"
// meaning a consts defined inside a if block will be accessed only inside it, see below

var fullName = 'Israr Qureshi';
let lastName;
if(fullName){
    lastName = fullName.split(' ')[1];  // .split(' ')[0] gives first
    // But if we use const in above line for lastName
    // It will be acceseed only inside this block by below console.loh
    // Not by outside the block console
    console.log(lastName);
}

console.log(lastName);




