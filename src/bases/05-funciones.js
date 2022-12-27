// funciones en JS
//funciones normales
const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}

// funcion lambda
const saludar2 =  (nombre) => {
  return `Hola, ${nombre}`;
};

// funcion lambda simplificada para un solo llamado sin return
const saludar3 = (nombre) => `Hola, ${nombre}`;

// funcion lambda sin parametro
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Juliana'))
console.log(saludar)
console.log(saludar2('Vegeta'))
console.log(saludar3('Goku'))
console.log(saludar4())

// como en la funcion saludar 3 se simplifico y se quiere devolver un objeto la manera correcta de hacer el parse es entre parentesis para retornar todo el objeto
const getUser = () =>( {
        uid: 'ABC123',
        username: 'Jandres1420'
    })


const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) =>({
    uid: 'ABC123',
    username: nombre
})

const usuarioActivo = getUsuarioActivo("Pedro");
console.log(usuarioActivo)

   
    
      
    
