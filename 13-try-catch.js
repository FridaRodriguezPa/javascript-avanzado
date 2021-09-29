//Try nos permite ejecutar código propenso a fallar de una manera segura


const gravedad = 9.8;
console.log(gravedad);


// Intenta ejecutar el código, si hay un error ejecuta el catch
try{
    gravedad = 10.1;
    // El catch se ejecuta si hay un error , recibe como primer parametro el error
} catch(e){
    console.log(e);
}finally{
    //Siempre se ejecuta
    console.log('Holis');
}


console.log(gravedad);