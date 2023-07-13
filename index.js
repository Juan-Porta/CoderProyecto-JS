
const name_empresa = "SUGAR PLANET"
const SALIR = 4
const precio = "120";

const saludo = alert("Bienvenidos al carrito de compras de " + name_empresa)
//seccion gomitas acidas
const gomitasAcidas = () => {
    let opcion = parseInt(prompt("Ingrese el tipo de gomita, \n 1-Ositos Acidos \n 2-Cintitas Acidas \n 3-Bananitas Acidas  \n 4-Volver Atras "))
    while(opcion != SALIR){
        switch(opcion){
            case 1:
                ositosAcidos = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + ositosAcidos + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (ositosAcidos*precio) + " " + "pesos")
                break;
            case 2:
                cintitasAcidas = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + cintitasAcidas + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (cintitasAcidas*precio) + " " + "pesos")
                break;

            case 3:
                bananitasAcidas = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + bananitasAcidas + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (bananitasAcidas*precio) + " " + "pesos")
                break;

            default:
                alert("opcion invalida, vuleva a intentarlo")
                break;
        }
        opcion = parseInt(prompt("Ingrese el tipo de gomita, \n 1-Ositos Acidos \n 2-Cintitas Acidas \n 3-Bananitas Acidas  \n 4-Volver Atras "))
    }
}


//seccion gomitas azucaradas
const gomitasAzucaradas = () => {
    let opcion = parseInt(prompt("Cual te gustaria llevar?, \n 1- Ositos Azucarados \n 2- Regaliz de Frutilla \n 3-Bananitas Azucaradas  \n 4- Volver Atras "))
    while(opcion != SALIR){
        switch(opcion){
            case 1:
                ositosAzucarados = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + ositosAzucarados + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (ositosAzucarados*precio) + " " + "pesos")
                break;

            case 2:
                regalizDeFrutilla = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + regalizDeFrutilla + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (regalizDeFrutilla*precio) + " " + "pesos")
                break;

            case 3:
                bananitasAzucaradas = (prompt("ingrese la cantidad deseada..."));
                alert("solicitaste" + " " + bananitasAzucaradas + " " + "unidades")
                alert("el total de tu compra es de"+ " " + (bananitasAzucaradas*precio) + " " + "pesos")
                break;

            default:
                alert("opcion invalida, vuleva a intentarlo")
                break;
        }
        opcion = parseInt(prompt("Cual te gustaria llevar?, \n 1- Ositos Azucarados \n 2- Regaliz de Frutilla \n 3-Bananitas Azucaradas  \n 4- Volver Atras "))
    }
}


//PROMP ENTRADA PRINCIPAL
let opcion = parseInt(prompt("Ingrese la opcion que desea comprar, \n 1-Gomitas Acidas \n 2-Gomitas Azucaradas \n 3- proximamente \n 4- SALIR" ))
while (opcion != SALIR){
    switch(opcion){
        case 1:
            gomitasAcidas();
            break;

        case 2:
            gomitasAzucaradas();
            break;

        case 3:
            masProductos();
            break;

            default:
                alert("opcion inválida, reintenta nuevamente")
    }
    opcion = parseInt(prompt("Ingrese la opcion que desea comprar, \n 1-Gomitas Acidas \n 2-Ositos Azucarados \n 3- Más Productos \n 4- SALIR" ))
}

alert("Gracias por elegirnos, te deseamos un dulce dia.")