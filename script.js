/*Section 1. JavaScript Total Recall
------I. Variables & Datatypes-----*/

// -----------A. Q + A------
// How do we assign a value to a variable?
let variable = "value";

// How do we change the value of a variable?
variable = "new value";

// How do we assign an existing variable to a new variable?
let newVariable = variable;

/* Remind me, what are declare, assign, and define?
*  ----Answer: 
*  To define a variable or a constant is a give them first - name and second - value.
*  To declare a constant or variable is to give it an uniq name. 
*  For declaration we use key-words "let", "const" and "var".
*  To assign a value to a variable we use sign "=" and is store this value in this variable. 
*  For variables we can declare it without value and assign it value letter in code.
*  Constants can be declare and assign in one row of code, immediatly give value to const, and it's value can't be reassdign. 
*  Value of variables can be reassign.
*  Programmers don't use "var" in now days, it's use only if you must to support old brousers.*/
var v1; //declare
let v2 = 10; //declaration and assign value
const PI=3.14;
v1=5; //assign

/* What is pseudocoding and why should you do it?
*  ----Answer:
*  A pseudocoding is kind of writing algoritm for solving task, but in pseudocode we use key word like "if" or "for"
*  It help to find logical way to solve problem before coding and it helpfull in teamwork. */

/* What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*   ----Answer: 
*  It  depends of problem. Generaly, I think, it can be 70% if thinking, drawing algorithm and 30% for actually writing a code.*/ 



// --------B. Strings----

// 1. Create a variable called firstVariable. 
let firstVariable;

// 2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// 3. Change the value of this variable to some number
firstVariable = 25;

// 4. Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;

// 5. Change the value of secondVariableto any string.
secondVariable = "string";

// What is the value of firstVariable?
// ---Answer: number. 

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName="Uliana Asadulina";
let newString = "Hello, my name is " + yourName;


// ----------C. Booleans-----

// Using the provided variable definitions, replace the blanks so that all log statements print "true" in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print "true" to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');