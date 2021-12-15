/**
 * Inferred Union Return Types
One of the awesome things about TypeScript is that it’s able to infer types in many cases so that we don’t have to manually write them. A great example is a function’s return type. TypeScript will look at the contents of a function and infer which types the function can return. If there are multiple possible return types, TypeScript will infer the return type as a union.

For instance, take this example, where we call a function named getBookFromServer(), which might fail:

function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}
If the call is successful, the function will return a Book type describing a book. If the call fails, the function will return a string. getBook() can return a Book or string type, TypeScript infers the return type as the union Book | string. Since TypeScript can infer the function’s return type, there’s no need for us to manually define it.
 */

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

const userData: string | User = createUser();