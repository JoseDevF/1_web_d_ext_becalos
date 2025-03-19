
class Usuario {
    constructor(nombre, edad, correo, saldo = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.saldo = saldo; // Saldo en la cuenta del usuario
        this.viajesRealizados = []; // Lista de viajes del usuario
    }

    getInfo() {
        console.log(`
            Nombre: ${this.nombre}\n
            Edad: ${this.edad} años\n
            Correo: ${this.correo}\n
            Saldo actual: $${this.saldo} MXN\n
            Viajes realizados: ${this.viajesRealizados.length}
        `);
    }

    enviarInfoViajeCorreo(viaje) {
        console.log(`Enviando información del viaje a ${this.correo}...`);
        console.log(`
            Correo enviado a: ${this.correo}
            Origen: ${viaje.origen}
            Destino: ${viaje.destino}
            Duración: ${viaje.duracion} minutos
            Estado: Confirmado
        `);
    }

    checkIn(viaje) {
        console.log(`Check-in realizado para el viaje de ${viaje.origen} a ${viaje.destino}. ¡Buen viaje, ${this.nombre}!`);
    }

    esMayorDeEdad() {
        console.log(this.edad >= 18 ? `${this.nombre} es mayor de edad.` : `${this.nombre} es menor de edad.`);
    }
}


const usuario1 = new Usuario("José Hernández", 30, "jose@example.com");
usuario1.getInfo();
/* usuario1.checkIn(viaje1);
usuario1.enviarInfoViajeCorreo(viaje2); */