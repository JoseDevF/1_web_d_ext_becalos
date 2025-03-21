/* Tres estados de una promesa: pending, fullfilled y rejected */

const obtenerDestino = (destino) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(destino){
                resolve(`Destino confirmado: ${destino}`);
            }else{
                reject("Error: No se esepecifico un destino")
            }
        }, 3000);
    });
}

function notificarUsuario(destino){
    console.log(destino);
}

function manejarError(error){
    console.log(error);
}


// Llamar a la promesa
obtenerDestino("Cairo")
.then(notificarUsuario)
.catch(manejarError)
.finally(()=>{
    console.log("Siempre me ejecuto");
});

//peticionMaps("Destino(Coordenadas)")
// .then(widget=>{/* Inyectar el widget en la UI */})
// .catch(error=>{"Mapa no disponible por el momento"});

function paraElForEach(elemento){
    console.log(elemento)
}

const frutas = ["Manzana", "Platano", "Sandía", "Pera"];

frutas.forEach(paraElForEach);

