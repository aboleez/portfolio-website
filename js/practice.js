// console.log('hi');

let x = 3
let y = 5
let z = x + y
console.log ('answer: ' + z)


// Variables

// 'var' or 'let' in Javascript acts like a verb in English. It givesa intruction of what is to be done, action to be taken.
// 'const' is a type of a variable which you use when you never ever in the lifetime has to change the value assigned. 
// Each variable needs a name, a declaration in order to assign it a value, in above example 'let' is a variable and x/y/z are the declaration.

// let x = 3 is a declaration
// x = 3 is just a value assigned to a variable



// CF 2.2

let text1 = "He said: \"Yes!\", that's for sure";
let text2 = "She said: \"Yes!\", that's for sure";

console.log(text1,text2)


// Null & Unidentified

let emptyVariable = null
let notNullButAString = "null" 

console.log(emptyVariable) //output is null
console.log(notNullButAString) //output is a string "null"


// Objects

var name = "John";
var age = "40";
var personParent = {
    name: "name",
    age: "age",
    child {
        name:"Sara"

    }
}

personParent.name = "Arin";
personParent.child.age = "15";

console.log (personParent["name"])
var weWantThisField = "age"
console.log (personParent[weWantThisField]);