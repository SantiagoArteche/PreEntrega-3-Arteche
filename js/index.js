const producto = productos
const contenedorDeProductos = document.querySelector("#products")
let productoAnadido = document.querySelectorAll(".add")

// CARGANDO PRODUCTOS A LA PAGINA
function cargarProductos(array) {
    contenedorDeProductos.innerHTML = ``
    array.forEach(el => {
        const li = document.createElement("li");
        li.className = "d-flex justify-content-center"
        li.innerHTML = `<div class="row d-flex flex-row justify-content-between align-items-center"><div
        class="rounded-4 d-flex align-items-center justify-content-center card border-4 border-success mt-5 p-3">
        <img src=${el.img} class="img-fluid">
        <h3 class="text-uppercase fs-6 mt-1 text-center">${el.nombre}
        </h3>
        <h4 class="fs-6">$${el.precio}</h4>
        <p class="px-3 mb-1 border-2 border border-dark fs-6 rounded-2 add" id="${el.id}">Añadir al Carrito</p>
        </div></div>`
        contenedorDeProductos.append(li)
    })
    cargarProductosP();
}
cargarProductos(producto);
// FIN CARGANDO PRODUCTOS A LA PAGINA
// CARGANDO PRODUCTOS SEGUN FILTRO MEDIANTE EL MENU IZQUIERDO DEL HEADER
const categoriaDeProductos = document.querySelectorAll(".catProd")
categoriaDeProductos.forEach(button => {

    button.addEventListener("click", e => {
        if (e.currentTarget.id != "all") {
            const filtroDeProductos = producto.filter(el => el.categoria.id === e.currentTarget.id)
            cargarProductos(filtroDeProductos)
        } else {
            cargarProductos(producto)
        }
    })
})
// FIN PRODUCTOS SEGUN FILTRO MEDIANTE EL MENU IZQUIERDO DEL HEADER
// CARGANDO PRODUCTOS CON EL BUSCADOR SUPERIOR DEL HEADER
const barraBuscadora = document.querySelector("#search")
barraBuscadora.addEventListener("submit", buscarProducto)

function buscarProducto(e) {
    e.preventDefault();

    switch (barraBuscadora[0].value.toUpperCase()) {
        case "REMERAS":
        case "REMERA":
            const filtrosRemera = producto.filter(el => el.nombre.includes("Remera"))
            cargarProductos(filtrosRemera)
            break
        case "ZAPAS":
        case "ZAPA":
        case "ZAPATILLA":
        case "ZAPATILLAS":
            const filtrosZapatilla = producto.filter(el => el.nombre.includes("Zapatillas"))
            cargarProductos(filtrosZapatilla)
            break
        case "BUZOS":
        case "BUZO":
            const filtrosBuzos = producto.filter(el => el.nombre.includes("Buzo"))
            cargarProductos(filtrosBuzos)
            break
        case "PANTALON":
        case "PANTALONES":
            const filtrosPantalon = producto.filter(el => el.nombre.includes("Pantalon"))
            cargarProductos(filtrosPantalon)
            break
        case "NIKE":
            const filtrosNike = producto.filter(el => el.nombre.includes("Nike"))
            cargarProductos(filtrosNike)
            break
        case "ADIDAS":
            const filtrosAdidas = producto.filter(el => el.nombre.includes("Adidas"))
            cargarProductos(filtrosAdidas)
            break
        case "PUMA":
            const filtrosPuma = producto.filter(el => el.nombre.includes("Puma"))
            cargarProductos(filtrosPuma)
            break
        case "JORDAN":
            const filtrosJordan = producto.filter(el => el.nombre.includes("Jordan"))
            cargarProductos(filtrosJordan)
            break
        case "REMERA NIKE":
            const filtroRemeraNike = producto.filter(el => el.nombre.includes("Remera Nike"))
            cargarProductos(filtroRemeraNike)
            break
        case "REMERA ADIDAS":
            const filtroRemeraAdidas = producto.filter(el => el.nombre.includes("Remera Adidas"))
            cargarProductos(filtroRemeraAdidas)
            break
        case "REMERA PUMA":
            const filtroRemeraPuma = producto.filter(el => el.nombre.includes("Remera Puma"))
            cargarProductos(filtroRemeraPuma)
            break
        case "REMERA JORDAN":
            const filtroRemeraJordan = producto.filter(el => el.nombre.includes("Remera Jordan"))
            cargarProductos(filtroRemeraJordan)
            break;
        case "PANTALON NIKE":
            const filtroPantalonNike = producto.filter(el => el.nombre.includes("Pantalon Nike"))
            cargarProductos(filtroPantalonNike)
            break
        case "PANTALON ADIDAS":
            const filtroPantalonAdidas = producto.filter(el => el.nombre.includes("Pantalon Adidas"))
            cargarProductos(filtroPantalonAdidas)
            break
        case "PANTALON PUMA":
            const filtroPantalonPuma = producto.filter(el => el.nombre.includes("Pantalon Puma"))
            cargarProductos(filtroPantalonPuma)
            break
        case "PANTALON JORDAN":
            const filtroPantalonJordan = producto.filter(el => el.nombre.includes("Pantalon Jordan"))
            cargarProductos(filtroPantalonJordan)
            break
        case "BUZO NIKE":
            const filtroBuzoNike = producto.filter(el => el.nombre.includes("Buzo Nike"))
            cargarProductos(filtroBuzoNike)
            break
        case "BUZO ADIDAS":
            const filtroBuzoAdidas = producto.filter(el => el.nombre.includes("Buzo Adidas"))
            cargarProductos(filtroBuzoAdidas)
            break
        case "BUZO PUMA":
            const filtroBuzoPuma = producto.filter(el => el.nombre.includes("Buzo Puma"))
            cargarProductos(filtroBuzoPuma)
            break
        case "BUZO JORDAN":
            const filtroBuzoJordan = producto.filter(el => el.nombre.includes("Buzo Jordan"))
            cargarProductos(filtroBuzoJordan)
            break
        case "ZAPATILLAS JORDAN":
            const filtrosZapatillasJordan = producto.filter(el => el.nombre.includes("Zapatillas Jordan"))
            cargarProductos(filtrosZapatillasJordan)
            break
        case "ZAPATILLAS ADIDAS":
            const filtrosZapatillasAdidas = producto.filter(el => el.nombre.includes("Zapatillas Adidas"))
            cargarProductos(filtrosZapatillasAdidas)
            break
        case "ZAPATILLAS NIKE":
            const filtrosZapatillasNike = producto.filter(el => el.nombre.includes("Zapatillas Nike"))
            cargarProductos(filtrosZapatillasNike)
            break
        case "ZAPATILLAS PUMA":
            const filtrosZapatillasPuma = producto.filter(el => el.nombre.includes("Zapatillas Puma"))
            cargarProductos(filtrosZapatillasPuma)
            break
        default:
            alert("Producto/s no encontrado/s")
            break
    }
}
// FIN CARGANDO PRODUCTOS CON EL BUSCADOR SUPERIOR DEL HEADER
// CARGANDO EL BOTON ANADIR AL CARRITO PARA QUE SE ACTUALICE SU VALOR AL CAMBIAR POR FILTROS Y EMPIEZA LA ADICION DE PRODUCTOS AL CARRITO
function cargarProductosP() {
    productoAnadido = document.querySelectorAll(".add")

    productoAnadido.forEach(el => {
        el.addEventListener("click", (e) => {
            Toastify({

                text: "Producto añadido al carrito!",

                duration: 2000,
                style: {
                    background: "black"
                }

            }).showToast();
            productoAnadido = producto.find(el => JSON.stringify(el.id) === e.currentTarget.id);
            if (carrito.some(producto => JSON.stringify(producto.id) === e.currentTarget.id)) {
                const index = carrito.findIndex(producto => JSON.stringify(producto.id) === e.currentTarget.id)
                carrito[index].cantidad++
            } else {
                productoAnadido.cantidad = 1
                carrito.push(productoAnadido)
            }
            productosAnadidos()

        });
    })
}

let carrito = []
let carritoLocalStorage = localStorage.getItem("carritoConProdsAnadidos")
if (carritoLocalStorage) {
    carrito = JSON.parse(carritoLocalStorage)
} else {
    carrito = []
}
const dondeEsAnadidoElProducto = document.querySelector(".whereProductAdded")
const cart = document.querySelector(".cartDisp");

function productosAnadidos() {
    if (carrito.length > 0 && carrito) {
        dondeEsAnadidoElProducto.innerHTML = ``
        carrito.forEach(el => {
            const div = document.createElement("div");
            div.classList.add("mx-2");
            div.innerHTML = `<div class="row d-flex flex-row justify-content-between px-2 "><div
            class="rounded-4 d-flex align-items-center justify-content-between border-4 border-success mt-2 p-1">
            <img src=${el.img} class="img-fluid col-2">
            <h3 class="text-uppercase fs-6 mt-1 text-light col-5 text-center">${el.nombre}
            </h3>
            <div class="bg-light border text-dark border-black cantidad text-center col-2">${el.cantidad}</div>   
            <h4 class="fs-6 precio text-light col-1 text-end mt-1 ms-3">$${el.precio * el.cantidad}</h4><i class="fa-sharp fa-solid fa-trash botonesEliminar col-1 text-center" id="${el.id}"></i>
            </div></div>`
            dondeEsAnadidoElProducto.append(div);
            dondeEsAnadidoElProducto.classList.remove("disabled");
            carritoVacio.classList.add("disabled");
            total.innerText = `Pasar A Finalizar Compra $${carrito.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0)}`
        })
    } else {
        dondeEsAnadidoElProducto.classList.add("disabled")
        total.innerText = `Añadir Productos Al Carrito`
        carritoVacio.classList.remove("disabled")
    }
    localStorage.setItem("carritoConProdsAnadidos", JSON.stringify(carrito))
    borrarBotonesIndividuales()
    // FUNCION PARA ELIMINAR PRODUCTOS DESDE EL CARRITO DE MANERA INDIVIDUAL
    function borrarBotonesIndividuales() {
        localStorage.getItem("carritoConProdsAnadidos")
        const botones = document.querySelectorAll(".botonesEliminar")
        botones.forEach(el => {
            el.addEventListener("click", (e) => {
                const eliminar = carrito.findIndex(el => JSON.stringify(el.id) === e.currentTarget.id)
                carrito.splice(eliminar, 1)
                productosAnadidos()
            })
        })
    }
    // FIN ELIMINAR PRODUCTOS DESDE EL CARRITO DE MANERA INDIVIDUAL
}
// FIN DE ANADIR PRODUCTOS AL CARRITO Y FUNCIONES
// VACIAR CARRITO 
const vaciarCarrito = document.querySelector(".emptyCart")
vaciarCarrito.addEventListener("click", () => {
    total.innerText = `Añadir Productos Al Carrito`
    dondeEsAnadidoElProducto.innerHTML = ``
    carritoVacio.classList.remove("disabled")
    carrito.length = 0
    localStorage.setItem("carritoConProdsAnadidos", JSON.stringify(carrito))
})



const carritoVacio = document.querySelector(".carText")

function disableEmptyCart() {
    carritoVacio.classList.add("disabled")
}
// FIN VACIAR CARRITO


// ACTIVAR Y DESACTIVAR CARRITO
const cartI = document.querySelector(".mainCart")
const cartDisplay = document.querySelector(".cartDisp")
cartI.addEventListener("click", () => {
    cartDisplay.classList.remove("disabled")
    cartI.classList.add("disabled")
    dondeEsAnadidoElProducto.classList.remove("disabled")
    productosAnadidos()
});


const deshabilitarCarrito = document.querySelector(".disableCart")
deshabilitarCarrito.addEventListener("click", () => {
    cartDisplay.classList.add("disabled")
    cartI.classList.remove("disabled")
});

// FIN ACTIVAR Y DESACTIVAR CARRITO
// ACTUALIZAR PRECIO TOTAL DEL CARRITO
const total = document.querySelector(".totalPrice")
// FIN DE ACTUALIZA RPRECIO TOTAL DEL CARRITO