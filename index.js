
const name_empresa = "SUGAR PLANET"
const SALIR = 5
const productosCargados = [
    {
        id:1,
        nombre:"Ositos Acidos",
        precio:120,
        categoria: "Gomitas"
    },
    {
        id:2,
        nombre:"Cintitas de Frutilla",
        precio:100,
        categoria: "Gomitas"
    },
    {
        id:3,
        nombre:"Ferrero Rocher",
        precio:150,
        categoria:"Chocolates"
    },
    {
        id:4,
        nombre:"Milka Oreo relleno 300g.",
        precio:1765,
        categoria: "Chocolates"
    },
    {
        id:5,
        nombre:"Caramelos de Dulce de leche",
        precio:110,
        categoria:"Caramelos"
    },
    {
        id:6,
        nombre:"Caramelos de Chocolate",
        precio:110,
        categoria: "Caramelos"
    },
]
const carrito= [];
const verGomitas = () => {
    let mensaje = "Lista de Productos: \n";
    productosCargados.forEach(el =>{
        if(el.categoria === "Gomitas"){
        mensaje = mensaje + `${el.id}-${el.nombre} $${el.precio} \n`
        }
    })
const opcion = parseInt(prompt(mensaje));

const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
carrito.push(productoSeleccionado)
alert("Agregado al carrito correctamente")
}
const verChocolates = () => {
    let mensaje = "Lista de Productos: \n";
    productosCargados.forEach(el =>{
        if(el.categoria === "Chocolates"){
        mensaje = mensaje + `${el.id}-${el.nombre} $${el.precio} \n`
        }
    })
const opcion = parseInt(prompt(mensaje));

const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
carrito.push(productoSeleccionado)
alert("Agregado al carrito correctamente")
}
const verCaramelos = () => {
    let mensaje = "Lista de Productos: \n";
    productosCargados.forEach(el =>{
        if(el.categoria === "Caramelos"){
        mensaje = mensaje + `${el.id}-${el.nombre} $${el.precio} \n`
        }
    })
const opcion = parseInt(prompt(mensaje));

const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
carrito.push(productoSeleccionado)
alert("Agregado al carrito correctamente")
}
const saludo = alert("Bienvenidos al carrito de compras de " + name_empresa)

const verCarrito = () => {
    let mensaje = "Carrito: \n";
    const numeroCompra = Math.round(Math.random() * 10000000 + 100000)

    carrito.forEach(el =>{
                        mensaje = mensaje + `${el.id}-${el.nombre} $${el.precio} \n`
    })
    const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
    mensaje += `TOTAL: $${total} \n`
    mensaje += "Desea Finalizar la Compra ? (si/no)"
    const respuesta = prompt(mensaje);
    if(respuesta.toLowerCase() == "si"){
        alert("-Felicitaciones tu compra fue relizada con exito- :D \n Nro:" + numeroCompra + "\n guarda el numero para recibir el producto")
        carrito.splice();
    }
}
let opcion = parseInt(prompt("Ingrese la opcion deseada, \n 1-Ver Gomitas \n 2-Ver Chocolates \n 3-Ver Caramelos \n 4- Ver Carrito \n 5- SALIR" ))
while (opcion != SALIR){
    switch(opcion){
        case 1:
            verGomitas();
            break;

        case 2:
            verChocolates();
            break;

        case 3:
            verCaramelos();
            break;

        case 4:
            verCarrito();
            break;

            default:
                alert("opcion inválida, reintenta nuevamente")
    }
    opcion = parseInt(prompt("Ingrese la opcion deseada, \n 1-Ver Gomitas \n 2-Ver Chocolates \n 3-Ver Caramelos \n 4- Ver Carrito \n 5- SALIR" ))
}

alert("Gracias por elegirnos, te deseamos un dulce dia.")