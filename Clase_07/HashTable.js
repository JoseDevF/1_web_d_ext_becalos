/* Ejemplo de función hash*/
function simpleHash(key, tableSize) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        // Sumar el código ASCII de cada carácter
        hash += key.charCodeAt(i);
    }
    return hash % tableSize; // Asegurar que no se pase del tamaño de la tabla
}

export class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    // Método para guardar una clave-valor
    set(key, value) {
        const index = simpleHash(key, this.table.length);

        // Manejamos colisiones con listas (encadenamiento)
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Buscar si ya existe la clave, y si sí, actualizarla
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Si no existe, agregamos el nuevo par
        this.table[index].push([key, value]);
    }

    // Método para obtener el valor por clave
    get(key) {
        const index = simpleHash(key, this.table.length);

        const bucket = this.table[index];
        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined; // No encontrado
    }
}


/* 
Índice  | Contenido
--------|----------------------------
0       | 
1       | 
2       | 
3       | 
4       | 
5       | [["nombre", "Carla"]]
6       | 
7       | [["edad", 30]]
8       | [["ciudad", "CDMX"]]
9       | 
*/
