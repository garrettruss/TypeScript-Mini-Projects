/**
 * When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share. Take this code:

const batteryStatus: boolean | number = false;
 
batteryStatus.toString(); // No TypeScript error
batteryStatus.toFixed(2); // TypeScript error
Since batteryStatus can be a boolean or a number, TypeScript will only allow us to call methods that both number and boolean share. They both share .toString(), so we’re good there. But, since only number has a .toFixed() method, TypeScript will complain if we try to call it.

This rule also applies to type objects that we define. Take this code:

type Goose = { 
  isPettable: boolean; 
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
}
 
type Moose = {
  isPettable: boolean; 
  hasHoofs: boolean;
}
 
const pettingZooAnimal: Goose | Moose = { isPettable: true };
 
console.log(pettingZooAnimal.isPettable); // No TypeScript error
console.log(pettingZooAnimal.hasHoofs); // TypeScript error
Like before, since .isPettable is on both Goose and Moose types, TypeScript will allow us to call it. But since .hasHoofs is only a property on Moose, we cannot call that method on pettingZooAnimal. Any properties or methods that are not shared by all of the union’s members won’t be allowed and will produce a TypeScript error.
 */

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);