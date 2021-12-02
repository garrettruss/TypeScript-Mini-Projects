/*
TypeScript normally gives an error if we don’t provide a value for all arguments in a function. This isn’t always desirable; sometimes we’d like to skip providing values.

To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.


 */

function greet(name?: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}
 
greet("Garrett"); // Prints: Hello, Garrett!
greet(); // Prints: Hello, Anonymous!


function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');