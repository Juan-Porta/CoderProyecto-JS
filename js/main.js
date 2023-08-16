// mis productos

const productos = [
    // gomitas
    {
        id: "gomita-01",
        titulo: "Huevitos",
        Imagen: "./img/gomitas/huevitos.jpg",
        categoria: {
            nombre: "Gomitas",
            id: "gomitas"
        },
        precio: 550
    },
    {
        id: "gomita-02",
        titulo: "Moritas",
        Imagen: "./img/gomitas/moritas.jpg",
        categoria: {
            nombre: "Gomitas",
            id: "gomitas",
        },
        precio: 520
    },
    {
        id: "gomita-03",
        titulo: "Ositos",
        Imagen: "./img/gomitas/ositos.jpg",
        categoria: {
            nombre: "Gomitas",
            id: "gomitas",
        },
        precio: 550
    },
    {
        id: "gomita-04",
        titulo: "Ositos Acidos",
        Imagen: "./img/gomitas/ositosAcidos.jpg",
        categoria: {
            nombre: "Gomitas",
            id: "gomitas",
        },
        precio: 550
    },

    //chocolates
    {
        id: "chocolates-01",
        titulo: "Caja Arcor Surtidos",
        Imagen: "./img/chocolates/cajaArcor.jpg",
        categoria: {
            nombre: "Chocolates",
            id: "chocolates"
        },
        precio: 1500
    },
    {
        id: "chocolates-02",
        titulo: "Blockazo 1 Kilo",
        Imagen: "./img/chocolates/Chocolate-Cofler-Blockazo-1kg.jpg",
        categoria: {
            nombre: "Chocolates",
            id: "chocolates",
        },
        precio: 5550
    },
    {
        id: "chocolates-03",
        titulo: "Ferrero",
        Imagen: "./img/chocolates/ferrero.jpg",
        categoria: {
            nombre: "Chocolates",
            id: "chocolates"
        },
        precio: 350
    },
    {
        id: "chocolates-04",
        titulo: "Vizzio Menta",
        Imagen: "./img/chocolates/VIZZIO-menta.jpg",
        categoria: {
            nombre: "Chocolates",
            id: "chocolates"
        },
        precio: 350
    },

    //caramelos
    {
        id: "caramelos-01",
        titulo: "Butter Toffes de chocolate",
        Imagen: "./img/caramelos/butter-toffees-chocolate.jpg",
        categoria: {
            nombre: "Caramelos",
            id: "caramelos"
        },
        precio: 450
    },
    {
        id: "caramelos-02",
        titulo: "Pico dulce duro",
        Imagen: "./img/caramelos/caramelo-pico-dulce-duro.jpg",
        categoria: {
            nombre: "Caramelos",
            id: "caramelos",
        },
        precio: 450
    },
    {
        id: "caramelos-03",
        titulo: "Bull Dog Masticable",
        Imagen: "./img/caramelos/caramelos-bulldog.jpg",
        categoria: {
            nombre: "Caramelos",
            id: "caramelos"
        },
        precio: 350
    },
    {
        id: "caramelos-04",
        titulo: "Caramelo-Sugus-Confitados",
        Imagen: "./img/caramelos/Caramelos-Sugus-Confitados.jpg",
        categoria: {
            nombre: "Caramelos",
            id: "caramelos"
        },
        precio: 450
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.Imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}