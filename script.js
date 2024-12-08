/* This is for the questions */
// This is for my comments
// -- pseudocode


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
console.log(problem("plant"));
console.log(problem(11));
// I struggled with this one a lot but eventually learned about the operator typeof
// which helps determine what type of input x is.


/* 7. Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 */
function litres(time) {
    return Math.floor(time * 0.5);
}
console.log(litres(0));
console.log(litres(2));
// This took me a longer than it should have because I it had to be Math.floor or Math.round, I tried Math.round, 
// which gave me an error because the prompt wanted the smallest value returned whcih would be Math.floot to find that out.
//


/* 8. You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not.
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // -- step 1: multiply the mpg of the car by the fuel left per gallon
    // -- step 2: compare that result to the distanceToPump variable
    // -- step 3: return t if you'll make it or f if you won't make it
    let carDistance = mpg * fuelLeft;
    if (carDistance >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};
console.log(zeroFuel(100, 50, 2));
console.log(zeroFuel(100, 25, 3));
// This was the only challenge I wrote steps for because after reading the prompt 
// I tought the challenge was going to require a little more logic compared to the other challenges.
// but it ended being simpler than I made it out to be.
