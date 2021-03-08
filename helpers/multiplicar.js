const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 2, listar = false, hasta = 20) => {

    try{
        
        
        let salida= '';
        let consola= '';
            let i = 0;
            
            while(i<=hasta){
                let multi = base*i;
                salida += `${base} x ${i} = ${multi}\n`;
                consola += `${base} ${'x'.red} ${i} ${'='.red} ${multi}\n`;
                i++;
            }

            if(listar){
                
                console.log(colors.red("==================================="));
                console.log('Tabla de multiplicar del ', colors.green(base));
                console.log(colors.red("==================================="));
                console.log(consola);
                } 

        /*  fs.writeFile(`Tabla-${num}.txt`, salida, (err)=>{
                if(err) trown(err);

                console.log(`Fichero Tabla-${num}.txt creado`);
            }) */

            fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
            return `Tabla-${base}.txt`;    
         
    }catch(err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}

