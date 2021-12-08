/**
 * Function Types
One of the neat things about JavaScript is that functions can be assigned to variables.

let myFavoriteFunction = console.log; // Note the lack of parentheses.
myFavoriteFunction('Hello World'); // Prints: Hello World
One of the neat things about TypeScript is that we can precisely control the kinds of functions assignable to a variable. We do this using function types, which specify the argument types and return type of a function. Here’s an example of a function type that is only compatible with functions that take in two string arguments and return a number.

type StringsToNumberFunction = (arg0: string, arg1: string) => number;
This syntax is just like arrow notation for functions, except instead of the return value we put the return type. In this case, the return type is number. Because this is just a type, we did not write the function body at all. A variable of type StringsToNumberFunction can be assigned any compatible function:

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.
As we can see above, it doesn’t matter what we name the function parameters, so long as they have the correct types (string and string). Therefore, it doesn’t matter what we name the parameters in the type annotation (above, we chose arg0 and arg1).

There’s something important to remember here. We must never be tempted to omit the parameter names or the parentheses around the parameters in a function type annotation, even if there is only one parameter. This code will not run!

type StringToNumberFunction = (string)=>number; // NO
type StringToNumberFunction = arg: string=>number; // NO NO NO NO
Function types are most useful when applied to callback functions. With how common callback functions are, it’s useful to know how to type them appropriately. Let’s get some practice using function types with callback functions!
 */

// Math Operations
function add(a, b){ return a+b }
function subtract(a, b){ return a-b }
function multiply(a, b){ return a*b}
function divide(a, b){ return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (a: number, b: number)=>number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  console.log('Now fill out this worksheet.')
}

// Call your functions below:
mathTutor(multiply);
//mathTutor(wrongAdd);