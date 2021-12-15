/**
 * Unions allow us to define multiple allowed type members by separating each type member with a vertical line character |.
 * 
 * With a union, we can re-type the program from the previous exercise like this:

let ID: string | number;
 
// number
ID = 1;
 
// or string
ID = '001';
 
console.log(`The ID is ${ID}.`);
In this example, string | number is a union that allows ID to be a string or a number. It’s more flexible than a single primitive type, but much more specific than the any type.

Unions can be written anywhere a type value is defined, including function parameters:

function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}
Using unions to type function parameters is especially convenient because functions often need to handle multiple types of input.
 */

function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');

printNumsAndStrings(10001);