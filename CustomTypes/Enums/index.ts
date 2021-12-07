let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

/** We use enums when we’d like to enumerate all the possible values that a variable could have.  */

enum Pet {
  Hamster, 
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2], 
  [Pet.Chinchilla, 1], 
  [Pet.Hamster, 2], 
  [Pet.Chinchilla, 50]
];

