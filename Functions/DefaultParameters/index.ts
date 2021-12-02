/* 
Default Parameters
If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type. (This is similar to how TypeScript infers the type of an initialized variable to be the same as the type of its initial value.)

The following code snippet logs a string to greet a user’s name, and defaults to the name 'Anonymous' if no name is provided.

function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}
The function greet() can receive a string or undefined as its name parameter—if any other type is provided as an argument, TypeScript will consider that a type error.

This is a cleaner way of getting the same functionality we had in the previous exercise. There, we used ? to mark the name parameter as optional. But parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters.
*/