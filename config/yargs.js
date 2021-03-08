const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base de una tabla'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'lista la tabla'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'limite maximo a multiplicar'
        })
        .check((argv, options) => {
            
            if( isNaN(argv.b)){
                throw ' la variable b tiene que ser un número'
            }else if(isNaN(argv.h)){
                throw ' la variable h tiene que ser un número'
            }
            
            return true;
        })
        .argv;

module.exports = argv;