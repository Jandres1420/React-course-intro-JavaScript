
// Variables y Constantes
// ahora solo se usa const y let

const nombre = "Andrés";
// si jamas voy a cambiar el valor de una variable poner const
const apellido = "Pico";

let valorDado = 5;
valorDado = 4;
console.log("hola mundo!!")
console.log(nombre,apellido,valorDado)

if(true){
    //valor de scope , solo va a existir por la condición
    const nombre = "Pibe"
    let valorDado = 9;
    console.log(valorDado)
}
console.log(valorDado)