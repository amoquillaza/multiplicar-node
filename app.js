const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log('Listar');
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo ${archivo} creado`))
        .catch(e => console.log(e));        
        break;
    default:
        console.log('Comando no reconocido');
}

