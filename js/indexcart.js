const dondeEsAnadidoElProducto = document.querySelector(".whereProductAdded");
dondeEsAnadidoElProducto.classList.add("disabled");
dondeEsAnadidoElProducto.classList.remove("disabled");
const productosAnadidosCarritoIndex = JSON.parse(localStorage.getItem("prodEnCartIndex"));

if (productosAnadidosCarritoIndex) {
    dondeEsAnadidoElProducto.innerHTML = ``
    productosAnadidosCarritoIndex.forEach(el => {
        const div = document.createElement("div");
        div.classList.add("mx-2")
        div.innerHTML = `<div class="row d-flex flex-row justify-content-between px-2"><div
        class="rounded-4 d-flex align-items-center justify-content-between border-4 border-success mt-2 p-1">
        <img src=${el.img} class="img-fluid col-2">
        <h3 class="text-uppercase fs-6 mt-1 text-light col-6 text-center">${el.nombre}
        </h3>
        <div class="bg-light border text-dark border-black cantidad text-center col-2">${el.cantidad}</div>   
        <h4 class="fs-6 precio text-light col-2 text-end">$${el.precio * el.cantidad}</h4>
        </div></div>`
        dondeEsAnadidoElProducto.append(div);
    })
}