const persona = {
    nombre:`Tony`,
    apellido:`Stark`,
    edad: 40,
    direccion :{
        ciudad: "New York",
        zip: 25125,
        lat: 124.4214,
        len: -241.24
    }
};

//console.table({persona})
console.log( persona );
// si se hace de esta manera esta apuntando al mismo espacio en memoria por lo que cambiar algun valor de esta nueva variable tambien cambiaria el otro objeto
// const persona2 = persona; asi NO

const persona2 = {...persona}
persona2.nombre = "Daniel"

console.log(persona2)
console.log(persona);