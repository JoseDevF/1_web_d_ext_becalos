class Viaje {
    saludo="Bienvenido al Planificador de Viajes"
    constructor(destino, origen, duracion){
        this.destino = destino;
        this.origen = origen;
        this.duracion=duracion;
    }

    getInfo() {
        console.log(`
            Origen: ${this.origen}\n
            Destino: ${this.destino}\n
            Duración: ${this.duracion} min
            `)
    }

    getCost(){
        console.log(`El costo del viaje $${this.duracion*35} MXN`)
    }

    static mensajeBienvenida(){
        console.log(this.saludo);
    }
}

const viaje1=new Viaje("Guadalajara", "CDMX", "60")
const viaje2=new Viaje("CDMX", "Guadalajara", "65")

/* console.log({viaje1});
console.log({viaje2}); */

viaje1.getInfo()
viaje1.getCost()

Viaje.mensajeBienvenida()