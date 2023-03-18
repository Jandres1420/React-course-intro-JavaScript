//Como importar? 
// owners es destructurando porque no es por defecto, por lo que toca ponerlo entre llaves {owners}
import heroes,{ owners } from "../data/heroes";

// short cut imp para inportar instant en vscode 
console.log(heroes);
export const getHeroeById = (id)=> heroes.find((hero) => hero.id === id);


console.log(getHeroeById(4));
// SE usa filter ya que no solo se necesita un valor si no que se necesitan a todos los heroes que sean de Marvel 
export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroesByOwner("Marvel"));