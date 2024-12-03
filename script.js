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

// -----------D. The farm----

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow")
    console.log("Mooooo!");
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
animal = "horse";
if (animal !== "cow")
    console.log("Hey! You're not a cow.");
// Commit

// -------------E. Driver's Ed---

// Make a variable that holds a person's age; be semantic
let personAge = 16;

/* Write code that will print out "Here are the keys!", if the age is 16 years or older, 
*  or, if the age is younger than 16, a message should print "Sorry, you're too young."*/
(personAge>=16) ? (console.log("Here are the keys!")) : (console.log("Sorry, you're too young."));


// ------------------II. Loops----------------------

// --------------A. The basics-----

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i=0; i<=10; i++)
    console.log(i);

console.log("-2-");

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10; i<=400; i++)
    console.log(i);

console.log("-3-");

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=12; i<=400; i+=3)
    console.log(i);


// ---------------B. Get even-------

// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i=1; i<=100; i++) {
    if (i%2===0) 
        console.log(i + " <-- is an even number");    
    else 
        console.log(i);
}

// --------------C. Give me Five----

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i=0; i<=100; i++) {
    if (i%5===0 && i!==0) 
        console.log(`I found a ${i}. High five!`);  
}  

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i=0; i<=100; i++) {
    if (i!==0) {
        if (i%3===0)
            console.log(`I found a ${i}. Three is a crowd`);
        if (i%5===0)        
            console.log(`I found a ${i}. High five!`);
    }  
} 
// For numbers divisible by both three and five, be sure your code prints both messages

// ---------------D. Savings account-------

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account=0;
for (let i=1; i<=10; i++) {
    bank_account+=i;    
}

// Check your work! Your bank_account should have $55 in it.
console.log(`Your bank_account have $${bank_account} in it`);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account=0;
for (let i=1; i<=100; i++) {
    bank_account = bank_account + i*2;    
}
// Check your work! Your bank_account should have $10,100 in it.
console.log(`Your bank_account have $${bank_account} in it`);