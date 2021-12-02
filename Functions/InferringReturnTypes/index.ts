/* Inferring Return Types
TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const myGreeting = createGreeting('Aisle Nevertell');

Here’s how TypeScript can infer myGreeting above to be of type string:

createGreeting()’s return statement is followed by a string variable, so createGreeting() is inferred to return string.
createGreeting('Aisle Nevertell') therefore must result in a value of type string.
myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type string.
*/

function ouncesToCups(ounces: number) {
  return ounces / 16;
}
 
//const liquidAmount: number = ouncesToCups(3); this is explicit
// this is implied
const liquidAmount = ouncesToCups(3);

console.log(liquidAmount);