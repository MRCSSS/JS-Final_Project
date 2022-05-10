/* ----------> Clases <---------- */
class Product {
	constructor(product, quantity) {
		this.id = product.id;
        this.title = product.title;
		this.salePrice = product.salePrice;
		this.regularPrice = product.regularPrice;
		this.offer = product.offer;
		this.img1 = product.img1;
        this.img2 = product.img2;
		this.quantity = quantity;
		this.totalPrice = product.totalPrice;
	}

	oneMore() {
		this.quantity++;
	}

	oneLess() {
		this.quantity--;
	}

	refreshTotalPrice() {
		this.totalPrice = this.salePrice * this.quantity;
	}
}

/* --> Constantes y variables <-- */
const products = [
	{
        id: 0,
        title: "7-button USB Gaming Mouse",
		salePrice: 180,
        regularPrice: 220,
		offer: 10,
		img1: "/img/mouse1.jpeg",
        img2: "/img/mouse2.jpeg"
	},
	{
        id: 1,
        title: "RGB Gaming MousePad Large Keyboard Desk Mat",
		salePrice: 650,
        regularPrice: 700,
		offer: 5,
		img1: "./img/mousepad1.png",
        img2: "./img/mousepad2.png"
	},
	{
        id: 2,
        title: "Gaming Desk 47.2 InchesHome Office Computer Table, Black Gamer Workstation",
		salePrice: 4000,
        regularPrice: 5000,
		offer: 20,
		img1: "./img/desk1.jpg",
        img2: "./img/desk2.jpg"
	},
	// {
    //     id: 3,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 4,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 5,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 6,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 7,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 8,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 9,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 10,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 11,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 12,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 13,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 14,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 15,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 16,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 17,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 18,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 19,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 20,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 21,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 22,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 23,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 24,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 25,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 26,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 27,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 28,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
	// {
    //     id: 29,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
    // {
    //     id: 30,
    //     title: "",
	// 	salePrice: ,
    //     regularPrice: ,
	// 	offer: ,
	// 	img1: "./img/.jpg",
    //     img2: "./img/.jpg"
	// },
];
let cart = [];
let favList = [];

/* -> Declaración de funciones <- */
function getTotalPrice(array) {
	return array.reduce((total, item) => total + item.totalPrice, 0);
}

function addToCart(idProduct) {
	let productInCart = cart.find((item) => item.id === idProduct);

	if (productInCart) {
		let index = cart.findIndex((item) => item.id === productInCart.id);

		cart[index].oneMore();
		cart[index].refreshTotalPrice();
	} else {
		cart.push(new Product(products[idProduct], 1));
	}

	swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Producto en shopping cart!',
		text: `${products[idProduct].title}`,
		showConfirmButton: false,
  		timer: 1500
	});

	localStorage.setItem("cartInStorage", JSON.stringify(cart));
	printTable(cart);
}

function deleteFromCart(id) {
	let product = cart.find((product) => product.id === id);

	let index = cart.findIndex((element) => element.id === product.id);

	if (product.quantity > 1) {
		cart[index].oneLess();
		cart[index].refreshTotalPrice();
	} else {
		cart.splice(index, 1);
	}

	swal.fire({
		position: 'top-end',
		icon: 'error',
		title: 'Producto eliminado del shopping cart!',
		text: '',
		showConfirmButton: false,
  		timer: 1500
	});

	localStorage.setItem("cartInStorage", JSON.stringify(cart));
	printTable(cart);
}

function deleteCart() {
	cart = [];
	localStorage.removeItem("cartInStorage");

	document.getElementById("cart").innerHTML = "";
	document.getElementById("actions__cart").innerHTML = "";

	swal.fire({
		icon: 'warning',
		title: 'Shopping cart vacío!',
		text: '',
		showConfirmButton: false,
  		timer: 1500
	});

}

function printProductsInHTML(array) {
    let container = document.getElementById("container__products"); // Obtener contenedor de tarjetas de producto
    container.innerHTML = "";

    for (const product of array) { // Impresion de tarjetas, una por producto en el array
        let card = document.createElement("div"); // Contenedor individual de cada producto

        // Agregar contenido de tarjeta de producto
        card.innerHTML = `
        <div class="product__card">
            <div class="product__offer">
                <span>-${product.offer}%</span>
            </div>
            <a href="#" class="product__slider">
                <div class="slider">
                    <ul class="slider__list">
                        <li class="slide slide1"><img src="${product.img1}"></li>
                        <li class="slide slide2"><img src="${product.img2}" alt=""></li>
                    </ul>
                </div>
            </a>
            <button class="product__likeHeart" role="button">
                <span class="material-symbols-outlined">favorite</i>
            </button>
            <div class="product__description">
                <a class="product__title" href="#">
                    <h3>${product.title}</h3>
                </a>
                <div class="product__price">
                    <span class="product__price--sale">$${product.salePrice}.00</span>
                    <p class="product__price--regular">$${product.regularPrice}.00</p>
                </div>
            </div>
            <div class="product__addToCart">
                <h4 class="product__addToCart--text">Agrega al Carrito</h4>
                <button id="addBtn${product.id}" class="product__addToCart--button button">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </button>
            </div>
        </div>
        `;

        container.appendChild(card);

        let cartButton = document.getElementById(`addBtn${product.id}`); // Agregar evento al boton
        cartButton.addEventListener("click", () => addToCart(product.id));
    }
}

function printTable(array) {
	let container = document.getElementById("cart");
	let totalPrc = getTotalPrice(array);
	let table = document.createElement("div");

	container.innerHTML = "";
	table.innerHTML = `
        <table id="cartTable" class="cartTable">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody id="tableContent">
            </tbody>
        </table>
    `;

	container.appendChild(table);

	let tableContent = document.getElementById("tableContent");

	for (let product of array) {
		let productData = document.createElement("tr");
		productData.innerHTML = `
                <td>${product.title}</td>
                <td>${product.quantity}</td>
                <td>${product.totalPrice}</td>
                <td><button id="eliminar${product.id}" class="button btn-dark">Eliminar</button></td>
      `;

		tableContent.appendChild(productData);

		let deleteBtn = document.getElementById(`eliminar${product.id}`);
		deleteBtn.addEventListener("click", () => deleteFromCart(product.id));
	}

	let accionesCarrito = document.getElementById("actions__cart");
	accionesCarrito.innerHTML = `
		<h5>PrecioTotal: $${totalPrc}</h5></br>
		<button id="vaciarCarrito" onclick="deleteCart()" class="button btn-dark">Vaciar Carrito</button>
	`;
}

function cartInStorage() {
	let inStorage = JSON.parse(localStorage.getItem("cartInStorage"));

	if (inStorage) {
		for (const item of inStorage) {
			let product = new Product(item, item.quantity);
			product.refreshTotalPrice();
			cart.push(product);
		}

		printTable(cart);
	}
}

function search(e) {
	e.preventDefault();

	let input = document.getElementById("searchForm").value.toLowerCase();
	let research = products.filter((item) => item.title.toLowerCase().includes(input));
	console.log(research);
	printProductsInHTML(research);
}

/* ---------> Eventos <---------- */
let searchbutton = document.getElementById("researchBtn");
searchbutton.addEventListener("click", search);

/* -----> Llamar funciones <----- */
printProductsInHTML(products);
cartInStorage(); // Consulta al Storage para saber si hay información almacenada. Si hay datos, se imprimen en el HTML al refrescar la página
