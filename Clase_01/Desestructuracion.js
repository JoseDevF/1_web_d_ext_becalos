const destinos = ["Roma", "Tokio", "París"];

const [primero, segundo] = destinos;

/* console.log(primero);
console.log(segundo); */

const [ , , tercer]=destinos

/* console.log(tercer);
 */
const viaje={
    destino: "Londres",
    duracion: 300,
    precio: 1200
}

const {destino} = viaje

console.log(destino);