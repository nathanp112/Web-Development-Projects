//alert('message from wk11.js');

// Data types

/*
There are 8 basic data types in JavaScript

Seven primitive attributes data types:
Number for numbers of any kin: integer, floating-point
bigint for integer number of arbitrary length.
string for strings. A string may have zero or more characters
Note: there's no single-character data type like in C or Java single character data type is "char"
Boolean is a true or false
Null for unkown values: a standalone type that has a single value null
undefined for unassigned values - a standalone that has a single value undefined
symbol for unqiue identifiers
And one non-primitive data types:
object for more complex data structures

typeof operator allows us to see which type of data is stored in the variable.
*/

let message='Hello'
message=123456789;

//number type represents both integer and floating points numbers.

let n=123
n=12.345

//besides regular numbers, there are so called "special numbers" which also belong to this data type:
// Infinity represents the mathematical infinity. It is a special value greater than any number.


//alert(1 / 0); //infinity

//NaN represents a computational error. It is a result of an incorrect or undefined math operation.
//alert('not a number' / 2 ); NaN, such a division is erroneous.


//alert(NaN + 1) //NaN
//alert(3 * NaN); //NaN

// embed a variable

let str= "hello"
let str2= "Single quotes are ok too";
let phrase= `can embed another string ${str}`;
//document.write(phrase);

let isGreater= 1 > 5;
//alert(isGreater)

birthday= undefined;
//alert(birthday);

const PI= 3.14;
document.write('Value of pi is: ;'+ ' PI')

PI=9.8;
document.write('Value of pi is: ' + PI);