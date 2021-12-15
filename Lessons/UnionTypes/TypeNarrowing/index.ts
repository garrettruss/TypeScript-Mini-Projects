/**
 * Typing with unions gives us more flexibility with type specificity, but there’s also more to consider. For instance, look over this union:

function getMarginLeft(margin: string | number) {
  // ...
}
Since margin can be a string or a number, we may want to perform different logic in the getMarginLeft() function’s body that does one thing for strings and another for numbers. To do this, we could implement a type guard. A type guard is a conditional that checks if a variable is a certain type, like this:

function getMarginLeft(margin: string | number) {
  // margin may be a string or number here
 
  if (typeof margin === 'string') {
    // margin must be a string here
  }
}
In the example above, TypeScript is able to read the type guard and infer that the margin variable inside the type guard must be a string. Since TypeScript knows margin is a string, it will allow us to use string methods on margin, like this:

if (typeof margin === 'string') {
  return margin.toLowerCase();
}
If we tried to call margin.toLowerCase() outside of the string type guard, TypeScript would complain that the .toLowerCase() method does not exist on number types. This error would occur because margin is typed as a string | number union.

This concept is called type narrowing. Type narrowing is when TypeScript can figure out what type a variable can be at a given point in our code. In our examples, TypeScript has narrowed the type inside the type guard to only be a string. Type narrowing allows us to use unions, then perform type-specific logic without TypeScript getting in the way.
 */

function formatValue(value: string | number) {
  // Write your code here
  if(typeof value === 'string'){
    console.log(value.toLowerCase());
  } else if (typeof value === 'number'){
    console.log(value.toFixed(2));
  }

}

formatValue('Hiya');
formatValue(42);