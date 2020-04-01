const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite=10) => {
    let data = '';
    data += `===========Tabla de ${base}==========\n`.bgGreen;
    for(let i = 1;i<=limite;i++){
        data += `${base} * ${i} = ${base*i}\n`.bgRed;
    }
    data += `===========Tabla de ${base}==========\n`.bgGreen;
    return data;
}

let crearArchivo=(base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';

        for(let i = 1;i<=limite;i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tablas/tabla-${base}.txt`.bgGreen);
        });
        
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
