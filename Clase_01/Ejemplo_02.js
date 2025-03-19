/* function suma(a,b){
    return a+b;
} */

//const suma = (a,b) => a+b;

//const suma = (a,b) => {clave:25};// No esta permitido
//const suma = (a,b) => ({clave:25});// No esta permitido
/* const suma = (a,b) => {
    return {clave:25}
};*/


const suma = (a,b) => {
    return a+b
};

/* const nombre = "Juan Pérez";
nombre = "José Hernández"; */

const nombre = (nombre="Juan Pérez") => nombre;
const nombre_alt=nombre("José Hernández")

const array = [2,3,5,8];

array.push(10)

console.log(suma(4,15));
console.log(nombre_alt);
console.log(array);

