alert('Hola Banker!!\nBienvenido al Banco Bank!\n(Aceptar para continuar)');

let servicio;
let mensajeSaludo = 'Gracias por visitarnos.\nEsperamos que vuelta pronto!';

do{
    servicio = parseInt(prompt('Por cual servicio quiere consultar\n1-Cuentas (Próximamente)\n2-Tarjetas de Crédito (Próximamente)\n3-Préstamos\n0-Para salir'));
    if(servicio == 1){
        alert('Usted indico "Cuentas", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Principal)');
    }else if(servicio == 2){
        alert('Usted indico "Tarjetas de Crédito", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Principal)');
    }else if((servicio != 3) && (servicio != 0)){
        alert('Seleccionar uno de los servicios detallados'); 
    }
}while((servicio != 3) && (servicio != 0));


let edad = 0;
let nivelIngresos = 0;
let montoPrestamo = 0;
let cantidadCuotas = 0;
let valorCuota = 0;

if(servicio == 3){

    alert('Usted a seleccionado "Préstamos"\n\nPara simular su préstamo vamos a necesitar que nos indique los siguientes datos:\n* Edad\n* Nivel de Ingresos\n* Monto del préstamo a solicitar\n* Cantidad de cuotas\n(Aceptar para continuar)');
    
    do{
        edad = parseInt(prompt('Edad\nDebe tener como mímimo 18 años de edad. Si su edad es inferior a 18, presione 0 (cero) para salir'));
        if(edad !== 0 && (isNaN(edad) || edad < 18 || edad >= 100)){
            alert('Ingrese una edad valida'); 
        }
    }while(edad !== 0 && (isNaN(edad) || edad < 18 || edad >= 100));

    if(edad >= 18){

        do{
            nivelIngresos = parseFloat(prompt('Nivel de Ingresos'));
            if(isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001)){
                alert('Ingrese un importe valido: mayor a $0 (cero) y menor a $1.000.000.'); 
            }
        }while(isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001));

        do{
            montoPrestamo = parseFloat(prompt('Monto del préstamo a solicitar\nMonto máximo a solicitar: $1.000.000'));
            if(isNaN(montoPrestamo) || (montoPrestamo <= 0) || (montoPrestamo >= 1000001)){
                alert('Ingrese un importe valido: mayor a $0 (cero) y menor a $1.000.000.'); 
            }
        }while(isNaN(montoPrestamo) || (montoPrestamo <= 0) || (montoPrestamo >= 1000001));

        do{
            cantidadCuotas = parseInt(prompt('Cantidad de cuotas a solicitar.\nCantidad máxima de cuotas a solicitar: 12.'));
            if(isNaN(cantidadCuotas) || (cantidadCuotas <= 0) || (cantidadCuotas >= 13)){
                alert('Ingrese una cantidad de cuotas validas: mayor a 0 (cero) y hasta 12.'); 
            }
        }while(isNaN(cantidadCuotas) || (cantidadCuotas <= 0) || (cantidadCuotas >= 13));

        let nivelIngresosF = nivelIngresos.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
        let montoPrestamoF = montoPrestamo.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

        alert('Información ingresada:\n* Edad: ' + edad + ' años\n* Nivel de Ingresos: ' + nivelIngresosF + '\n* Monto del préstamo a solicitar: ' + montoPrestamoF + '\n* Cantidad de cuotas a solicitar: ' + cantidadCuotas + ' cuotas\n Aceptar para simular el préstamo');

        let valorCuota = montoPrestamo / cantidadCuotas;
        let valorCuotaF = valorCuota.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
                
        alert('Le detallamos la simulación de su préstamo:\n* Edad: ' + edad + ' años\n* Monto del préstamo a solicitar: ' + montoPrestamoF + '\n* Tiene que ingresar ' + cantidadCuotas + ' cuotas de ' + valorCuotaF);
    }
}

alert(mensajeSaludo);


/*
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const fechaFormateada = `${dia}/${mes}/${anio}`;

alert('Fecha: ' + fechaFormateada +'\n* Edad: ' + edad + ' años.\n* Monto del préstamo a solicitar: $' + montoPrestamo + '\nTiene que ingresar ' + cantidadCuotas + ' cuotas de $' + valorCuota);
*/