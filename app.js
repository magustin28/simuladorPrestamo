alert('Hola Banker!!\nBienvenido al Banco Bank!\n(Aceptar para continuar)');

let servicio;

do{
    servicio = parseInt(prompt('Por cual servicio quiere consultar\n1-Cuentas (Próximamente)\n2-Tarjetas de Crédito (Próximamente)\n3-Préstamos\n0-Para salir'));
    if(servicio == 1){
        alert('Usted indico "Cuentas", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Princial)');
    }else if(servicio == 2){
        alert('Usted indico "Tarjetas de Crédito", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Princial)');
    }else if((servicio != 3) && (servicio != 0)){
        alert('Seleccionar uno de los servicios detallados'); 
    }
}while((servicio != 3) && (servicio != 0));


let edad = 0;
let nivelIngresos = 0;
let montoPrestamo = 0;
let cantidadCuotas = 0;
let valorCuota = 0;
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const fechaFormateada = `${dia}/${mes}/${anio}`;

if(servicio == 0){
    alert('Gracias por visitarnos.\nEsperamos que vuelta pronto!');
}else{
    alert('Usted a seleccionado "Préstamos"\n\nPara simular su préstamo vamos a necesitar que nos indique los siguientes datos:\n* Edad\n* Nivel de Ingresos\n* Monto del préstamo a solicitar\n* Cantidad de cuotas\n(Aceptar para continuar)');
    
    do{
        edad = parseInt(prompt('Edad\nDebe tener como mímimo 18 años de edad.'));
        if((isNaN(edad) || edad < 18)){
            alert('Ingrese una edad valida'); 
        }
    }while((isNaN(edad) || edad < 18));

    do{
        nivelIngresos = parseFloat(prompt('Nivel de Ingresos'));
        if(isNaN(nivelIngresos) || (nivelIngresos < 0)){
            alert('Ingrese un importe mayor a 0 (cero)'); 
        }
    }while(isNaN(nivelIngresos) || (nivelIngresos < 0));

    do{
        montoPrestamo = parseFloat(prompt('Monto del préstamo a solicitar'));
        if(isNaN(montoPrestamo) || (montoPrestamo < 0)){
            alert('Ingrese un importe mayor a 0 (cero)'); 
        }
    }while(isNaN(montoPrestamo) || (montoPrestamo < 0));

    do{
        cantidadCuotas = parseFloat(prompt('Cantidad de cuotas a solicitar\n(Hasta 12 cuotas)'));
        if(isNaN(cantidadCuotas) || (cantidadCuotas < 0)){
            alert('Ingrese un importe mayor a 0 (cero)'); 
        }
    }while(isNaN(cantidadCuotas) || (cantidadCuotas < 0));

    alert('Información ingresada:\n* Edad: ' + edad + ' años.\n* Nivel de Ingresos: $' + nivelIngresos + '\n* Monto del préstamo a solicitar: $' + montoPrestamo + '\n* Cantidad de cuotas a solicitar: ' + cantidadCuotas + ' cuotas\n Aceptar para simular el préstamo');
    
    let valorCuota = (montoPrestamo / cantidadCuotas).toFixed(2)
    
    alert('Fecha: ' + fechaFormateada +'\n* Edad: ' + edad + ' años.\n* Monto del préstamo a solicitar: $' + montoPrestamo + '\nTiene que ingresar ' + cantidadCuotas + ' cuotas de $' + valorCuota);
}