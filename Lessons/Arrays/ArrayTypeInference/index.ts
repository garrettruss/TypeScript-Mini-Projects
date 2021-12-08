/**
 * Array Type Inference
TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with arrays. For example:

let examAnswers= [true, false, false];
What is the type of examAnswers? It seems it could equally well be boolean[] or [boolean, boolean, boolean]. In reality, it is always the first of these, since this is the less restrictive type. This enables us to expand the array:

examAnswers[3] = true; // No type error.
Since tuples have fixed lengths, we wouldn’t be able add additional boolean elements to a tuple:

let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
We also get the same kind of type inference when we use the .concat() method:

let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].
In the code above, TypeScript infers the variable concatResult as an array of numbers, not a tuple.

The takeaway here is that type inference returns arrays. When we want tuples, we need to use explicit type annotations.
 */

// Don't change this part:
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

// Your code goes here:
let myArr = dogTup.concat("word");
myArr[50] = 'not a dog'

