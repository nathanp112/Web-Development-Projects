/*
    The if statement executes the block of code if the condition is satisfied
    The following is the general syntax of the if statement

    if (condition)
        statement(s);




let age= 18

if (age < 18) { // condition is false
    document.write("Sorry you can not sign up" + "<br>")// output is not displayed
}

let age= 18

if (age >= 18) { // condition is true
    document.write("Of course, you can sign up" + "<br>")// output is  displayed
}


// Nested if condition (generally avoid it)

let mino_age= 16;
let state = 'CA'

if(state == 'CA'); {//condition is true
    if (mino_age >= 16) { //condition is true
        document.write("You can drive");
    }
}



let mino_age= 16;
let state = 'CA'

if(state == 'CA' && mino_age ==16) {
    document.write("You can drive")
}



// Functions
// to declare a function, you use the function keyword followed by the function name,
//a list of parameters and the function body as follows:

// general syntax:
// function body
// ...

//A function can accept zero, one or multiple parameters.
// In the case of multiple parameters, you need to use comma to separate them

// Example of function that accepts NO parameters

let result;
function say(){
    //code any required information
}

function square(a){
    result = a * a;
}

square("8")
document.write('Square of 8' + result + '<br>');

let result;

function add(a, b) {
    result = a + b;
}

add(15, 16);
document.write('Addition of 15 and 16' + result + '<br>');

let result;
function compare(x, y) {
    if (x > y) {    // if x > y then return -1
        return -1;
    } else if (x < y){ //if x < y then return 1
        return 1;
    }
    return 0;
}

result = compare( 10, 4);
document.write('x is greater than y' + result + "<br>")

result = compare( 1, 9);
document.write('x is less than y' + result + "<br>")

result = compare( 15, 15);
document.write('x is equal than y' + result + "<br>")

//Arrays
// The easiest way to create arrays is by using an array literal []

//empty array
const empty_array = [];

//string array
const string_array1 = ['eat', 'work', 'sleep'];

//number array
const num_array = [5, 2, 9, 15, 22]

//mixed array of different data types
const mixed_array = ['hi', 33, true] //string, number, boolean

const myArray = ['H', 'e', 'l', 'l', 'o'];
//let's output the first element from myArray
document.write('The first element from myArray is:' + myArray[0] + "<br>") //first element
document.write('The second element from myArray is:' + myArray[1] + "<br>") //second element
document.write('referencing undefined element from myArray is:' + myArray[4] + "<br>") //undefined element
document.write('referencing out of range element from myArray is:' + myArray[5] + "<br>") //undefined element
document.write('referencing out of range elementv from myArray is:' + myArray[-1] + "<br>") //undefined element

let my_array_length = myArray.length
document.write('length of myArray : ' + my_array_length + "<br>") // # of elements

 // Loops for & while

//general syntax 'for' loop
//for (initialization, condition; update statement) {
// block of code to execute

const n = 5;
for (let i =1; i < n; i++) {
    document.write('I love JavaScript' + "<br>");
}



const n = 5;
let i = 1;
for (i = 1; i < n; i++) {
    document.write('Value of i is: ' + i + 'I love JavaScript' + "<br>");
}
document.write('Out of loop value i is ' + i);



//while loop has one expression:
//condition - defines the loop stop condition
// while (condition) {
//      block of code to be executed

const grades = [79, 84, 92, 49, 33]
let i =0

while (i < grades.length){ //condition is true
    document.write(grades[i] + "<br>");
    i++;
}



//set population limit of aquarium to 10
const popLimit = 10

//start off with 0 fish
let fish = 0

//initiate the while loop to run until fish reaches popLimit

while (fish < popLimit){
    //add one fish for each iteration
    fish++;
    document.write("There is room for " + (popLimit-fish) + 'more fish' + "<br>");
}
*/

let myName = 'James Bond 007';

document.write("<div style='color: red; font-size: 10pt; position: fixed; top: 10px; right: 10px;' > ")
document.write('<strong><em>My name is </em></strong>' + myName);

















