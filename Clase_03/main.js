const viajes = [];

class Viaje {
    constructor(nombre, origen, destino, duracion, pais) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = Number(duracion);
        this.pais = pais;
        this.tareas = [];
    }

    agregarTarea(tarea) {
        if (this.tareas.includes(tarea)) {
            console.log("La tarea ya esta en la lista");
            return;
        }
        this.tareas.push(tarea);
        console.log("Tarea añadida")
    }

    eliminarTarea(tarea) {
        const index = this.tareas.indexOf(tarea);
        if (index !== -1) { /* Si existe el elemento */
            this.tareas.splice(index, 1);
            console.log("Tarea eliminada")
        } else {
            console.log("Tarea no encontrada")
        }
    }

    mostrarResumen() {
        const { nombre, origen, destino, duracion, pais, tareas } = this;
        console.log(`Viaje "${nombre}" desde ${origen} hacia ${destino}, ${pais} por ${duracion} dias`);
        if (tareas.length === 0) {
            console.log("No hay tareas")
        } else {
            console.log("Tareas:")
            tareas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`))
        }
    }
}

/* const objViaje = new Viaje("Viaje de la familia Hernández", "CDMX", "Guadalajara", "15.4", "México");

objViaje.agregarTarea("Llamar a reservar al hotel Holiday Inn");
objViaje.agregarTarea("Reservar Automóvil");
objViaje.eliminarTarea("Llamar a reservar al hotel Holiday Inn")
objViaje.mostrarResumen(); */

const cargarViajes = () => {
    const dataObj = JSON.parse(localStorage.getItem('viajes')) || [];
    return data.map(viaje => Object.assign(new Viaje(), viaje))
}

const guardarViajes = () => localStorage.setItem('viajes', JSON.stringify(viajes));

/* Simula guardar el viaje en la nube */
const guardarViaje = viaje => new Promise((resolve, reject) => {

    setTimeout(() => {
        viajes.push(viaje);
        guardarViajes();
        resolve(); //
    }, 1000)


})


// Crea un nuevo viaje con los datos del formulario
const crearViaje = async () => {
    const campos = ['nombre', 'origen', 'destino', 'duracion', 'pais'];
    const valores = campos.map(id => document.getElementById(id).value.trim());

    // Verificamos que no haya campos vacíos
    if (valores.some(v => !v)) {
        mostrarModal("Por favor llena todos los campos.");
        return;
    }

    const [nombre, origen, destino, duracion, pais] = valores;
    const nuevoViaje = new Viaje(nombre, origen, destino, duracion, pais);

    //await guardarViaje(nuevoViaje); // Lo guardamos en la "base de datos"

    guardarViaje(nuevoViaje);

    setTimeout(() => {
    }, 5000)



    renderizarViajes();             // Actualizamos la lista visual
    limpiarInputs();                // Limpiamos los inputs
};


