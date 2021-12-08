/**With numeric enums, the numbers could be assigned automatically, but with string enums we must write the string explicitly, as shown above. Technically, any string will do: North = 'JabberWocky' is a valid value definition. However, it is much better to use the convention shown here (North = 'NORTH'), where the string value of the enum variable is just the capitalized form of the variable name. This way, error messages and logs will be much more informative.
 * 
 * We recommend to always use string enums because numeric enums allow for some behaviors that can let bugs sneak into our code. For example, numbers can be assigned directly to numeric enum variables:

let whichWayToAntarctica: DirectionNumber;
whichWayToAntarctica = 1; // Valid TypeScript code.
whichWayToAntarctica = DirectionNumber.South; // Valid, equivalent to the above line.
Strangely, even assigning arbitrary numbers, as in whichWayToAntarctica = 943205, will not lead to type errors.

String enums are much more strict. With string enums, variables cannot be assigned to strings at all!

let whichWayToAntarctica: DirectionString;
whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.

 */

let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:

enum Pet {Hamster = 'HAMSTER', Rat = 'RAT', Chinchilla = 'CHINCHILLA', Tarantula = 'TARANTULA'};

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2], 
  [Pet.Chinchilla, 1], 
  [Pet.Hamster, 2], 
  [Pet.Chinchilla, 50]
];

//ordersArrayTS.push(['HAMSTER', 1]);