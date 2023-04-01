const producto = [{
    id: 1,
    nombre: "Nike Shirt",
    img: "./images/nike1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 2500
}, {
    id: 2,
    nombre: "Adidas Shirt",
    img: "./images/remeraadidas.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 3000
}, {
    id: 3,
    nombre: "Puma Shirt",
    img: "./images/pumaw1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 3500
}, {
    id: 4,
    nombre: "Jordan Shirt",
    img: "./images/jordan1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 4000
}, {
    id: 5,
    nombre: "Nike Pants",
    img: "./images/pantnike.webp",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 3200
}, {
    id: 6,
    nombre: "Adidas Pants",
    img: "./images/pantadidas.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 3600
}, {
    id: 7,
    nombre: "Puma Pants",
    img: "./images/pantpuma.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 4400
}, {
    id: 8,
    nombre: "Jordan Pants",
    img: "./images/pantsjordan.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 5900
}, {
    id: 9,
    nombre: "Nike Hoodie",
    img: "./images/camperanike.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 6000
}, {
    id: 10,
    nombre: "Adidas Hoodie",
    img: "./images/camperaadidas.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 6500
}, {
    id: 11,
    nombre: "Puma Hoodie",
    img: "./images/camperapuma.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 8200
}, {
    id: 12,
    nombre: "Jordan Hoodie",
    img: "./images/buzojordan.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 9300
}, {
    id: 13,
    nombre: "Nike Shoes",
    img: "./images/nikeshoes2.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 6300
}, {
    id: 14,
    nombre: "Adidas Shoes",
    img: "./images/adidasshoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 8000
}, {
    id: 15,
    nombre: "Puma Shoes",
    img: "./images/pumashoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 5430
}, {
    id: 16,
    nombre: "Jordan Shoes",
    img: "./images/jordanshoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 12300
}];

const contenedorDeProductos = document.querySelector("#products")
let productoAnadido = document.querySelectorAll(".add")

function cargarProductos(array) {
    contenedorDeProductos.innerHTML = ``
    array.forEach(el => {
        const li = document.createElement("li");
        li.classList.add("d-flex");
        li.classList.add("justify-content-center");
        li.innerHTML = `<div class="row d-flex flex-row justify-content-between"><div
            class="rounded-4 d-flex align-items-center justify-content-center card border-4 border-success mt-5 p-2">
            <img src=${el.img} class="img-fluid">
            <h3 class="text-uppercase fs-5 mt-1">${el.nombre}
            </h3>
            <h4 class="fs-5">$${el.precio}</h4>
            <p class="px-3 mb-1 border-2 border border-dark fs-6 rounded-2 add" id="${el.id}">Add to cart</p>
            </div></div>`
        contenedorDeProductos.append(li)
    })
    cargarProductosP();
}
cargarProductos(producto);

const categoriaDeProductos = document.querySelectorAll(".catProd");

categoriaDeProductos.forEach(button => {

    button.addEventListener("click", e => {
        if (e.currentTarget.id != "all") {
            const filtroDeProductos = producto.filter(el => el.categoria.id === e.currentTarget.id);
            cargarProductos(filtroDeProductos);
        } else {
            cargarProductos(producto);
        }
    })
})

function cargarProductosP() {
    productoAnadido = document.querySelectorAll(".add");
    const emptyCart = document.querySelector(".carText")
    productoAnadido.forEach(el => {
        el.addEventListener("click", anadirProductoAlCarrito);
        el.addEventListener("click", bringCartIndex)
        el.addEventListener("click", disableEmptyCart)
    })

    function bringCartIndex() {
        const bringPage = document.querySelector("#bringPage");
        bringPage.innerHTML = `<iframe src="./indexcart.html" frameborder="0" class="w-100" id="bringedPage"></iframe>`
    }

    function disableEmptyCart() {
        emptyCart.classList.add("disabled")
    }
}

const carrito = [];


let precioo = document.querySelector(".precio");

const dondeEsAnadidoElProducto = document.querySelector(".whereProductAdded");

function anadirProductoAlCarrito(e) {
    productoAnadido = producto.find(el => JSON.stringify(el.id) === e.currentTarget.id);
    if (carrito.some(producto => JSON.stringify(producto.id) === e.currentTarget.id)) {
        const index = carrito.findIndex(producto => JSON.stringify(producto.id) === e.currentTarget.id)
        carrito[index].cantidad++;
    } else {
        productoAnadido.cantidad = 1;
        carrito.push(productoAnadido);
    }
    localStorage.setItem("prodEnCartIndex", JSON.stringify(carrito))
}

const cartI = document.querySelector(".mainCart")
const cartDisplay = document.querySelector(".cartDisp")
cartI.addEventListener("click", active);

function active() {
    cartDisplay.classList.remove("disabled");
    cartI.classList.add("disabled");
}



const deshabilitarCarrito = document.querySelector(".disableCart");
deshabilitarCarrito.addEventListener("click", deshabilitar);

function deshabilitar() {
    cartDisplay.classList.add("disabled");
    cartI.classList.remove("disabled");
}