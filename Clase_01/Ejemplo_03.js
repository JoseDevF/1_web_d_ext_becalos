const getName=(nombre)=> "Daniel";
const getLastName=(apellido)=> "Hernández";


const nombre = getName();
const apellido= getLastName();

// console.log("¡Hola! " + nombre + " " + apellido + " es un placer conocerte")

//let puesto = "Directivo"
let puesto = "Operador"


console.log(`¡Hola! ${
    puesto==="Directivo" ? 
    "Dir. " + getName() : 
    "Sr. " + getName()
} ${apellido} es un placer conocerte`)
//console.log(`https://api/${recurso}/${endppoint}/${id}`)

const body = `
    <p>Hola ${nombre}</p>
    <h1>Lorem ipsum dolor sit amet. ${apellido}</h1>
    <button>Presiona</button>
`