const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }    
}
const argv = require('yargs')
            .command('listar','Imprime en consulta la tabla de multiplicar',opts)
            .command('crear','Graba en archivo la tabla de multiplicar',opts)
            .help()
            .argv;

module.exports = {
    argv
}