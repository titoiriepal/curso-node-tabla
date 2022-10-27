
const fs = require('fs');
const colors = require('colors');

const crearArchivo =  async ( base  = 5, listar = false, hasta=10) => {

    try{
        
        let salida = '';
        let archivo = '';
       

            for (let i = 1; i <= hasta; i++) {
                salida += ( `${base} ${colors.green('X')} ${i} ${colors.red('=')} ${base*i}\n` );
                archivo += ( `${base} X ${i} = ${base*i}\n` );
            
            }   
            
        

        if (listar){
            console.log(colors.brightGreen.italic('======================='));
            console.log(colors.red(`======Tabla del ${base}======`));
            console.log(colors.brightGreen.italic('======================='));

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, archivo);

        return `tabla-${base}.txt`

    }catch (error){
        return (error);
    }

    // console.log(`tabla de ${base} creada`)

}

module.exports = {
    crearArchivo
}