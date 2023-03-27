class Products {
    constructor(id, title, img, category, price) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.category = category;
        this.price = price;
    }
}
const shirtsContainer = document.querySelector("#tShirts");
const tShirts = [];
tShirts.push(new Products(1, "Nike Shirt", "./images/nike1.jpg", "shirt", `$${2500}`));
tShirts.push(new Products(2, "Adidas Shirt", "./images/remeraadidas.jpg", "shirt", `$${3000}`));
tShirts.push(new Products(3, "Puma Shirt", "./images/pumaw1.jpg", "shirt", `$${3500}`));
tShirts.push(new Products(4, "Jordan Shirt", "./images/jordan1.jpg", "shirt", `$${4000}`));

const pantContainer = document.querySelector("#pants");
const pants = [];
pants.push(new Products(1, "Nike Pants", "./images/pantnike.webp", "pant", `$${3200}`));
pants.push(new Products(2, "Adidas Pants", "./images/pantadidas.png", "pant", `$${3600}`));
pants.push(new Products(3, "Puma Pants", "./images/pantpuma.png", "pant", `$${4400}`));
pants.push(new Products(4, "Jordan Pants", "./images/pantsjordan.png", "pant", `$${5900}`));

const hoodiesContainer = document.querySelector("#hoodies");
const hoodies = [];
hoodies.push(new Products(1, "Nike Hoodie", "./images/camperanike.jpg", "hoodie", `$${6000}`));
hoodies.push(new Products(2, "Adidas Hoodie", "./images/camperaadidas.jpg", "hoodie", `$${6500}`));
hoodies.push(new Products(3, "Puma Hoodie", "./images/camperapuma.jpg", "hoodie", `$${8200}`));
hoodies.push(new Products(4, "Jordan Hoodie", "./images/buzojordan.jpg", "hoodie", `$${9300}`));

const shoesContainer = document.querySelector("#shoes");
const shoes = [];
shoes.push(new Products(1, "Nike Shoes", "./images/nikeshoes2.png", "shoes", `$${6300}`));
shoes.push(new Products(2, "Adidas Shoes", "./images/adidasshoes.png", "shoes", `$${8000}`));
shoes.push(new Products(3, "Puma Shoes", "./images/pumashoes.png", "shoes", `$${5430}`));
shoes.push(new Products(4, "Jordan Shoes", "./images/jordanshoes.png", "shoes", `$${12300}`));

function uploadProducts(array, container) {
    array.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `<div id="t-shirts" class="row d-flex flex-row justify-content-between"><div
        class="rounded-4 d-flex align-items-center justify-content-center card border-4 border-success mt-5 p-2">
        <img src=${product.img} class="img-fluid">
        <h3 class="text-uppercase fs-5 mt-1">${product.title}
        </h3>
        <h4 class="fs-5">${product.price}</h4>
        <p class="px-3 mb-1 border-2 border border-dark fs-6 rounded-2">Add to cart</p>
    </div>`;

        container.append(div);
    })
}
uploadProducts(tShirts, shirtsContainer);
uploadProducts(pants, pantContainer);
uploadProducts(hoodies, hoodiesContainer);
uploadProducts(shoes, shoesContainer);