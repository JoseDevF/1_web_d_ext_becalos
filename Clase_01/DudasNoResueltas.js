// En JS no se pueden sobrecargar metodos de las clases como en otros lenguajes, 
// pero si puede realizar algo similar utilizando parametros opcionales.
// es mucho mas potente incluso ya que puedes definir todos los parametros que quieras y no necesariamente usarlos todos siempre.

class Viaje {

    // Para la duda respecto a acceder a los atributos de clase desde un método estático, solo teniamos que agregar la palabra reservada
    // static para poder acceder mediante this, desde el método estático mensajeBienvenida (Vean el ejemplo en el método).
    static saludo="Bienvenido al Planificador de Viajes"
    
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

    // Ejemplo con parametros opcionales y además nombrados
    static mensajeBienvenida({ promocion=false, personalizado="", descuento=false, montoDescuento=-1 })
    {
        const mensajeDescuento = descuento===true && montoDescuento > 0 // Condición para "tomar" el camino del mensaje descuento 
        const mensajePromocion=promocion // Condición para "tomar" el camino del mensaje promoción
        const mensajePersonalizado = personalizado.length > 0 // Condición para "tomar" el camino del mensaje personalizado

        if (mensajeDescuento) {
            return `¡Aprovecha esta oferta especial! Obtén un descuento de $${montoDescuento}.`;
        } else if (mensajePromocion) {
            return "¡Bienvenido! Tenemos una promoción especial para ti acumulando 1 milla por cada viaje.";
        } else if (mensajePersonalizado) {
            return `${personalizado}`;
        } else {
            return this.saludo; // Atributo estático de la clase "Viaje"

            // NOTA: Los métodos estáticos solo pueden acceder a propiedades estáticas de la clase.
            // No pueden acceder a los atributos de instancia (objeto)
        }
    }
}

const Viaje1= new Viaje("CDMX", "Michoacan", 70);

Viaje1.getInfo()

//Viaje1.mensajeBienvenida()

//Viaje.getInfo()

const params = {promocion: true}

// Ejemplos de uso:
console.log(Viaje.mensajeBienvenida(params));
console.log(Viaje.mensajeBienvenida({personalizado: "Esperamos que te guste volar con nosotros"}));
console.log(Viaje.mensajeBienvenida({montoDescuento: 50, descuento: true}));
console.log(Viaje.mensajeBienvenida({}));


