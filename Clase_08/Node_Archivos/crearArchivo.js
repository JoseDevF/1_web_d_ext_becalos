// Importar modulo
const fs = require('fs')

/* Esto ya no esta soportado por la librería chalk */
//const chalk=require('chalk')

// IMPORT DINÁMICO SOLO DE CHALK
const chalkPromise = import('chalk')

/* Chalk ya no soporta require() para importar, por lo que se debe usar o el import de modulos o un import dinámico */
/* Si no quieren usar import dinámico para que se pueda seguir utilizando require */

// Mensaje de ejemplo
const mensaje = `¡Hola desde node.js! Esta es una línea escrita desde JS`;

// Escribir el archivo
chalkPromise.then((chalk) => {
    fs.writeFile('../Bootstrap/saludo.txt', mensaje, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err)
        } else {
            console.log(chalk.default.green('Archivo creado exitosamente como saludo.txt'))
        }

        fs.readFile('../Bootstrap/saludo.txt', 'utf-8', (err, data) => {
            if (err) throw err
            console.log(chalk.default.bold(data))
        })
    })
})

/* ¿La recomendación? Nunca usar require y usar siempre import :) */
/* Cambien los require por:
import fs from 'fs'
import chalk from 'chalk'

Así es como se maneja y de hecho como lo he manejado siempre en mi experiencia :)

El require solo lo use cuando hice algunos backends con nodejs + express (APIs) pero ya hace unos varios años.
*/