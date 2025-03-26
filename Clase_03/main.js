
class Viaje {
    constructor(nombre, origen, destino, duracion, pais) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = Number(duracion);
        this.pais = pais;
        this.tareas = [];
    }
}