const personajes = ["Andres","Juliana","Johan"]
// const [] para desestructuracion de arreglos, si queremos ignorar una posicion ponemos una coma para pasar una posicion hacia adelante
const [,,p2] = personajes;
console.log(p2);

const retornaArreglo = ()=>(
     ["ABC",123]
)

const arregloCompleto = retornaArreglo();
console.log(arregloCompleto);
const [letras,numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

//tarea
// retorna un arreglo con una funcion 
const userState = (valor) =>(
  [valor,()=>{console.log("hola mundo")}]
)

const arr = userState("Andy")
console.log(arr);

// para llamar especificamente la funcion 
arr[1]();

//esta seria la mejor desestructuracion de arreglo 
const [nombre,setNombre] = arr
console.log(nombre);
setNombre()