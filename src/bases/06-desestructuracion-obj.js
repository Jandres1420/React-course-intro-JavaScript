//Desestructuración

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "ironman",
};
// es lo mismo que poner persona.nombre, pero asignandolo a una constante llamada nombre, si se quiere otro nombre de la variable poner nombreDelparametro:elnombreDelaVariable
const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);
// de esta manera se puede tomar lo que a mi me interesa sin tener que ocupar mucho espacio, si el objeto no tiene la propiedad podemos crearla y va a tomarla por default pero si tiene va a tomar la que tenga el objeto
const retornaPerson = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre, edad, rango);
};

retornaPerson(persona);

persona.rango = "Esta tomando el que pongamos no el default";

retornaPerson(persona);

const userContext = ({ nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: nombre,
    anios: edad,
    latlng: {
      lat: 13.42,
      lng: -12.42,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng }} = userContext(persona);
console.log(nombreClave, anios, lat, lng);

// console.log(persona.edad);
// console.log(persona.clave);
