/* 

If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value.

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
We can also explicitly state return types for arrow functions (which were defined in the ES6/ES2015 version of JavaScript). We’ll see the same kinds of error messages for both function types.

const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }
 
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
*/