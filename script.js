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


// ----------- III. Arrays & Control flow----------------------


/* A. Talk about it:
*  1. What are the things in an array called? 
    -- Answer: they are elements.

*  2. Do Arrays guarantee those things will be in order?
*   -- Answer: Yes, all elements have an order, it's called index of element.

*  3. What real-life thing could you model with an array?
*   -- Answer: A box of pencils, or pack of Pringle's chips in round box.
*/


// -------------B. Easy Does It----

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["Calm", "Peaceful", "Powerful"];

// -------------C. Accessing elements---

// Given the following array 
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array.
console.log(randomThings);


// ---------------D. Change values-------------

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass.at(2));

// Change the value of "Github" to "Octocat"
let i = ourClass.indexOf("Github");
ourClass[i] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// ---------------E. Mix It Up------
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20];
console.log(myArray);

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Targaryen");
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). 
myArray.reverse();
console.log(myArray);

/* Did you mutate the array? What does mutate mean? 
*  Answer: I mutated array. It means what original array was change with method .reverse() and no more exist in it original form, before reverse it
*  let newArray = myArray.toReversed();
*  this will not mutate original array and will store reverse array in newArray

*  Did the .reverse() method return anything?
*  Answer: It is return the array after it has been reversed 
*/

//----------- F. Biggie Smalls-------
// Create a variable that contains an integer.
let int = 50;

/* Write an if ... else statement that:
*  console.log()s "little number" if the number is entered is less than 100
*  console.log()s big number if the number is greater than or equal to 100
*/
if (int<100) {
       console.log("little number");
} else console.log("big number");


// ------------ G. Monkey in the Middle---------
/* Write an if ... else if ... else statement:
*  console.log() little numberif the number entered is less than 5.
*  If the number entered is more than 10, log big number.
*  Otherwise, log "monkey".
*/

int = 6;
if (int<5) {
    console.log("little number");
} 
else 
{
    if (int>10) {
        console.log("big number");
    }
    else console.log("monkey");
};

// ---------------H. What's in Your Closet?-----
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [  // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],
    [ // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],
    [ // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];  

// What's Kristyn wearing today? 
// Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
i = kristynsCloset.indexOf("yellow knit hat");
kristynsCloset.splice(i+1, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[i] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! 
// Using bracket notation, access the first element in Thom's shirt's array.
console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fancy in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

for (let pants of thomsCloset[1]) {
    console.log(thomsCloset[1].indexOf(pants));
	if (pants === "PJs") {
	    i = thomsCloset[1].indexOf(pants);
        thomsCloset[1][i] = "Footie Pajamas";
        break;
    };
}
console.log(thomsCloset[1]);


// -----------------IV. Functions-------------


// -------------A. printGreeting-------
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. 
// Feel free to skip this problem, because you've already done it. 
// If you've done the problem twice, read entire problems carefully before doing them from now on.

function printGreeting(name) {
    console.log(`Hello there, ${name}!`);
}
printGreeting("Mary");

// --------------B. printCool----------
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
    console.log(`${name} is cool!`);
}
printCool("Tonny Stark");

// --------------C. calculateCube------
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number) {
    let v=number*number*number;
    console.log(`Volume of a cube with side ${number} is ${v}`);
}
calculateCube(5);

// --------------D. isVowel-----
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 

function isVowel (character) {
    switch (character.toLowerCase()) {
        case "a":   
            return true;
            break;
        case "e":
            return true;
            break;
        case "i":
            return true;
            break;
        case "o":
            return true;
            break;
        case "u":
            return true;
            break;
        case "y":
            return true;
            break;
        default: return false;
        
    }    

};
console.log("This is a vowel, " + isVowel("A"));
console.log("This is a vowel, " + isVowel("n"));

// ---------------E. getTwoLengths-----
// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths (string1, string2) {
    let numArray = [string1.length, string2.length];
    return numArray;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// ----------------F. getMultipleLengths------
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths (arrayOfStrings) {
    let numArray = [];
    for (let i=0; i<arrayOfStrings.length; i++) {
        numArray[i]=arrayOfStrings[i].length;
    }
    return numArray;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// ------------------G. maxOfThree----
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations.

function maxOfThree (num1, num2, num3) {
    let largestNumber =0;
    if (num1 >= num2 && num1 >= num3) {
        largestNumber = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largestNumber = num2;
    } else largestNumber = num3;    
    return largestNumber;
}
console.log(maxOfThree(500, 50000, 1000));

// ------------------H. printLongestWord--------
// Write a function printLongestWord that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord (arrayOfStrings) {
    let numArray = [];
    let largestNumber =0;
    let returnWord = "";
    for (let i=0; i<arrayOfStrings.length; i++) {
        numArray[i]=arrayOfStrings[i].length;        
        if (numArray[i] == numArray[i-1]) {
            largestNumber=numArray[i];
            returnWord=arrayOfStrings[i-1];            
        } else {
            if (numArray[i] > largestNumber) {
                largestNumber=numArray[i];
                returnWord=arrayOfStrings[i];
            }
        }
    }
    return returnWord; 
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// -------------------Objects-----------

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. 
// The object data structure is a good way to organize the data from our user.

// ---------------A. Make a user object---------
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. 
// Set the other values to whatever you would like.

let user = {
    name: "John Doe",  
    email: "johndoe@gmail.com",
    age: 33,
    purchased: []
}

// ----------------B. Update the user----
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "newEmail@gmail.com";
console.log(user);

// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;
console.log(user);

// ---------------C. Adding keys and values---

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Buffalo, NY";
console.log(user);

// ---------------D. Shopaholic!----------

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("Carbohydrates");

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("Peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// ----------------E. Object-within-object----

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Mary Lou",
    age: 30,
    location: "Rochester, NY",
    purchased: []
}

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age =55;

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);



// ---------------F. Loops---

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i=0; i<user.purchased.length; i++)
    console.log(`${i+1}. ${user.purchased[i]}`);

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i=0; i<user.friend.purchased.length; i++)
    console.log(`${i+1}. ${user.friend.purchased[i]}`);

// ---------------G. Functions can operate on objects----
// Write a single function updateUser that takes no parameters. When the function is run, it should:
//  - it should increment the user's age by 1
//  - make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

function updateUser() {
    user.age++;
    user.name=user.name.toUpperCase();
}
updateUser();


// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {
    person.age++;
    person.name=person.name.toUpperCase();
    console.log(person);
}
oldAndLoud(user);
