const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias:'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias:'hasta',
                type: 'number',
                default: 10,
                describe: 'Hasta que numero crea la tabla de multiplicar de la base. Por defecto 10. Con un numero mayor a 20 se imprime hasta 20'
            })
            
            .check( (argv, options) =>{
                if(argv.h>20){
                    argv.h = 20;
                }
                if( isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }

                return true;
            })
            
            .argv;

module.exports = argv;