alert('Hola Banker!!\nBienvenido al Banco Bank!\n(Aceptar para continuar)');

let servicio;

do{
    servicio = parseInt(prompt('Por cual servicio quiere consultar\n1-Cuentas (Próximamente)\n2-Tarjetas de Crédito (Próximamente)\n3-Préstamos\n0-Para salir'));
    if(servicio == 1){
        alert('Usted indico "Cuentas", próximamente habilitaremos este servicio');
    } else if (servicio == 2){
        alert('Usted indico "Tarjetas de Crédito", próximamente habilitaremos este servicio');
    } else if ((servicio != Number) && (servicio != 3) && (servicio != 0)) {
        alert('Seleccionar uno de los servicios detallados'); 
    }
} while ((servicio !== 3) && (servicio !== 0))

if (servicio == 0){
    alert('Gracias por visitarnos.\nEsperamos que vuelta pronto!');
} else{
   alert('Usted a seleccionado "Préstamos"\n(Aceptar para continuar)'); 
}




