const { crearArchivo } = require('./helpers/multiplicar.js');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


console.log( argv);
console.log('base: yargs', argv.base);

/* const [,,arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');
console.log(base); */

/* let num = 2; */

/* const tablaMultiplicar = (num) =>{*/
    
    
    crearArchivo(argv.b, argv.l, argv.h)
        .then( msg => {
            console.log('Bien');
            console.log(colors.rainbow(msg), 'creado');
        })
        .catch( err => {
            console.log('Mal');
            console.log(err);
        })

/* } */

/* tablaMultiplicar(base); */