const product = [{
    id: 1,
    nombre: "Nike Shirt",
    img: "./images/nike1.jpg",
    tipo: "shirt",
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
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 12300
}];

const productContainer = document.querySelector("#products")
let productAdded = document.querySelectorAll(".containerProduct")

function uploadProducts(array) {
    productContainer.innerHTML = ``
    array.forEach(el => {
        const div = document.createElement("div");
        div.classList.add("d-flex");
        div.classList.add("justify-content-center");
        div.innerHTML = `<div id="t-shirts" class="row d-flex flex-row justify-content-between"><div
            class="rounded-4 d-flex align-items-center justify-content-center card border-4 border-success mt-5 p-2">
            <img src=${el.img} class="img-fluid">
            <h3 class="text-uppercase fs-5 mt-1">${el.nombre}
            </h3>
            <h4 class="fs-5">$${el.precio}</h4>
            <p class="px-3 mb-1 border-2 border border-dark fs-6 rounded-2 containerProduct" id="${el.id}">Add to cart</p>
            </div>`
        productContainer.append(div)
    })
    uploadButtonsP();
    console.log(productAdded);
}
uploadProducts(product);

const productsCategory = document.querySelectorAll(".catProd");


productsCategory.forEach(button => {

    button.addEventListener("click", e => {

        if (e.currentTarget.id != "all") {
            const productFilter = product.filter(el => el.categoria.id === e.currentTarget.id)
            uploadProducts(productFilter);
        } else {
            uploadProducts(product);
        }
    })
})

function uploadButtonsP() {
    productAdded = document.querySelectorAll(".containerProduct");

    productAdded.forEach(el => {
        el.addEventListener("click", addProductToCart)
    })
}


const cart = []

function addProductToCart(e) {
    const addedProduct = product.find(el => JSON.stringify(el.id) === e.currentTarget.id);
    cart.push(addedProduct);
}
console.log(cart);