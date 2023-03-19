import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         //tarea 
//         // importar el getHeroeById
//        console.log("2 segundos despues") 
//        const heroe = getHeroeById(1);
//        resolve(heroe);
//        reject("No se pudo encontrar el heroe")
//     }, 2000);
// });

// //el then solo pasa con el resolve, y si ponemos parametros en el resolve tambien los ponemos en el then 
// promesa.then((heroe) => {
//   console.log("heroe", heroe);
// }).catch(err => console.warn((err)))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            //tarea 
            // importar el getHeroeById
            console.log("2 segundos despues") 
            const heroe = getHeroeById(id);
            if(heroe === undefined) reject("No se pudo encontrar el heroe");
            resolve(heroe);
            
        }, 2000);
    });
};
//si solo se pone el console log en un then o un warn el por defencto va a tomar como parametro lo que retorna
getHeroeByIdAsync(3).then(console.log)
.catch(console.warn);