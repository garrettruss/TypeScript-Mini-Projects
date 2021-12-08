/**
 * Generic Functions
We can also use generics to create collections of typed functions. Generic functions like these are probably easiest to understand via an example. And for once, the example is actually useful! Imagine we wanted to create a function that returns arrays filled with a certain value. Let’s just write the JavaScript for now:

function getFilledArray(value, n) {
  return Array(n).fill(value);
}
Here, getFilledArray('cheese', 3) evaluates to ['cheese', 'cheese', 'cheese']. No problem, right? Well, we run into a problem when we try to specify the function’s return type. We know it should be an array of whatever value‘s type is—do we have to write a separate type annotation for every type of value? Nope. Here, we are rescued by generic functions!

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
The above code tells TypeScript to make sure that value and the returned array have the same type T. When the function is invoked, we will provide T‘s value. For example, we can invoke the function using getFilledArray<string>('cheese', 3), which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese'], but the function is now correctly typed and less prone to errors. The function getFilledArray<string> is precisely the same as if we had written (value: string, n: number): string[] in its type annotation.

In general, writing generic functions with function functionName<T> allows us to use T within the type annotation as a type placeholder. Later, when the function is invoked, T is replaced with the provided type.
 */

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>('hi', 6); 
numberArray = getFilledArray<number>(9, 6); 
personArray = getFilledArray<{name: string, age: number}>(
  {name: 'J. Dean', age: 24}, 6
);
coordinateArray = getFilledArray<[number, number]>([3,4], 6); 

