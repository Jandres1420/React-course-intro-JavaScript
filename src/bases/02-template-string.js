const nombre = "Andrés";
// si jamas voy a cambiar el valor de una variable poner const
const apellido = "Pico";

//const nombreCompleto = nombre + " " + apellido;
// a `` se le llama template string y deja insertar valores como kotlin 
const nombreCompleto = `${nombre}
${apellido}
${12+421}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre
}
console.log(`Esto es un texto ${getSaludo('perro')} `)
