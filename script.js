/* This is for the questions */
// This is for my comments


/* 1. Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.
*/
function message(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}
console.log(message("Anthony", "Anthony"));
console.log(message("Tony", "Anthony"));
// It took me a couple minutes to write it out in code
// because I was over thinking what to put in my if condition


/* 2. Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?". 
*/
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}
console.log(greet("Anthony"));
// This was very easy I knew I could use a template literal


/* 3. Write a function which converts the input string to uppercase.
*/
function makeUpperCase(str) {
    return str.toUpperCase();
}
// This was easy becasue it was pretty self explanatory


/* 4. Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.
 */
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd"
    }
}
console.log(evenOrOdd(12));
console.log(evenOrOdd(37));
// I remember modulo from the FizzBuzz exercise so I decided to implement it here.


/* 5. You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. 
For example, the test input may be "1 year old" or "5 years old". 
The first character in the string is always a number.
 */
function getAge(inputString) {
    return parseInt(inputString.substring(0));
}
console.log(getAge("8 years old"));
// This one was easy it just took me some arranging of "parseInt(inputString.substring(0))"
// because I knew I had to convert the string to an int and pick the first char in the string.


/* 6. Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
 */
function problem(x) {
    if (typeof x === "string") {
        return "Error";
    } else {
        return total = x * 50 + 6;
    }
}
// I struggled with this one a lot but eventually learned about the operator typeof
// which helps determine what type of input x is.

