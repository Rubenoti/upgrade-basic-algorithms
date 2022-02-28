const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
avengers[0] = "IRONMAN";
console.log(avengers[0]);
console.log(avengers.length);
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
const lastItem = rickAndMortyCharacters.length - 1;
console.log(rickAndMortyCharacters[lastItem]);

rickAndMortyCharacters.push("Lapiz Lopez");
console.log(rickAndMortyCharacters)
//-- siguiente parte --//
rickAndMortyCharacters.pop();
let firstElement = rickAndMortyCharacters[0];
let lastElement = rickAndMortyCharacters.length - 1;
console.log("El primer elemento es " + firstElement, "y el ultimo elemento es " + rickAndMortyCharacters[lastElement]);

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);




