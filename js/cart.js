const carritoVacioP = document.querySelector(".carritoVacio")
const containerProd = document.querySelector(".containerProd")
const precioFinal = document.querySelector(".pFinal")

let cart = []

let cartO = (localStorage.getItem("carritoConProdsAnadidos"))

cartO ? cart = JSON.parse(cartO) : cart = []

function cartJs() {
    if (cart.length > 0 && cart) {
        containerProd.innerHTML = ``
        cart.forEach((el) => {
            carritoVacioP.classList.add("disabled")
            const li = document.createElement("li")
            li.className = "prodCart"
            li.innerHTML = `<div class="row d-flex flex-row w-100"><div
            class="rounded-4 d-flex flex-row align-items-center justify-content-around card border-4 border-success mt-5 p-3">
            <img src=${el.img} class="img-fluid col-3">
            <h3 class="text-uppercase fs-4 mt-1 text-center col-2">${el.nombre}
            </h3>
            <h4 class="fs-4 col-2 text-center">Precio: $${el.precio}</h4>
            <h4 class="col-2 fs-4 text-center">Cantidad: ${el.cantidad}</h4><h4 class="col-2 fs-4">Total: ${el.precio * el.cantidad}</h4><i class="fa-sharp fa-solid fa-trash botonesEliminar col-1 text-success" id="${el.id}"></i>
            </div></div>`
            containerProd.append(li)
            precioFinal.innerHTML = `Precio final: $${cart.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0)}`
        })
    } else {
        carritoVacioP.classList.remove("disabled")
    }
    localStorage.setItem("carritoConProdsAnadidos", JSON.stringify(cart))
    borrarProductos()

    function borrarProductos() {
        localStorage.getItem("carritoConProdsAnadidos")
        console.log(cart.length)
        const botonesEliminar = document.querySelectorAll(".botonesEliminar")
        botonesEliminar.forEach(el => el.addEventListener("click", (e) => {
            containerProd.innerHTML = ``
            const eliminar = cart.findIndex(el => JSON.stringify(el.id) === e.currentTarget.id)
            cart.splice(eliminar, 1)
            precioFinal.innerHTML = `Precio final: $${cart.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0)}`
            cartJs()
        }))
    }
}
cartJs()

const emptyCart = document.querySelector(".delete")

emptyCart.addEventListener("click", () => {
    localStorage.clear()
    containerProd.innerHTML = ``
    precioFinal.innerHTML = `Precio final: $0`
    carritoVacioP.classList.remove("disabled")
    cart.length = 0
})

const buyButton = document.querySelector(".buyButton")
buyButton.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger me-3'
        },
        buttonsStyling: false
    })
    if (precioFinal.innerHTML != `Precio final: $0`) {
        swalWithBootstrapButtons.fire({
            title: 'Estas por finalizar tu compra',
            text: "Estas seguro de los productos a adquirir?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si!',
            cancelButtonText: 'No, volver atras',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                        `Felicitaciones, adquiriste los productos por una cantidad de $${cart.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0)} pesos!`,
                        'Gracias por su compra.',
                        'success'
                    )
                    .then((result) => {
                        if (result.isConfirmed) {
                            localStorage.clear()
                            containerProd.innerHTML = ``
                            precioFinal.innerHTML = `Precio final: $0`
                            carritoVacioP.classList.remove("disabled")
                            cart.length = 0
                        }
                    })
            }
        })
    } else {
        swalWithBootstrapButtons.fire({
            title: 'Carrito Vacio',
            text: "Añade productos al carrito!",
            icon: 'error',
            confirmButtonText: 'OK',
            reverseButtons: true
        })
    }
})