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

class ViajeInternacional extends Viaje{
    constructor(origen, destino, duracion, pais){
        super(origen, destino, duracion); //Llamar al cosntructor del padre

        this.pais=pais;
    }

    mostraInfo(){
        console.log(`Destino: ${this.destino}\nPaís: ${this.pais}`);
    }
}



const viajeInt1=new ViajeInternacional("Cairo", "Destino", 900, "Egipto");
viajeInt1.getCost();
viajeInt1.getInfo();
viajeInt1.mostraInfo();

const viaje1=new Viaje("Guadalajara", "CDMX", "60")
const viaje2=new Viaje("CDMX", "Guadalajara", "65")

/* console.log({viaje1});
console.log({viaje2}); */

//viaje1.getInfo()
//viaje1.getCost()

//Viaje.mensajeBienvenida()
