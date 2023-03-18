// si se pone de esta manera la importacion es muchisimo mejor ya que se puede usar cualquier tipo de nombre en la importacion y es más simple con export defaul 
const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];
// una manera de hacerlo 
// export const owners = ["DC","Marvel"];
// export default heroes;
const owners = ["DC", "Marvel"];
export {
  heroes as default,
  owners
}