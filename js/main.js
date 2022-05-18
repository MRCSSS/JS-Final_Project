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

class Buyer {
	constructor(name, email, phone, whislist) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.whislist = whislist;
	}
}

/* --> Constantes y variables <-- */
var products = [];
let cart = [];
let favList = [];

/* -> Declaración de funciones <- */
function notifAlert (prodName, action) {
	let notifContainer = document.getElementById("notificationContainer");
	let notifClass = '';
	let notifIcon = '';
	let notifMessage = '';
	if (action == 'add') {
		notifClass = 'addNotif';
		notifIcon = 'task_alt';
		notifMessage = 'Producto en shopping cart!';
	} else if (action == 'delete') {
		notifClass = 'delNotif';
		notifIcon = 'delete_forever';
		notifMessage = 'Producto eliminado del shopping cart!';
	}

	let newNotif = document.createElement("div");

	newNotif.innerHTML = `
	<div class="${notifClass} notif d-flex flex-column justify-self-end ">
		<div class="notifInner">
			<span class="material-symbols-outlined">${notifIcon}</span>
			<p>Producto en shopping cart!</p>
			<p> ${prodName} </p>
		</div>
		<div class="close">
			<a>Cerrar</a>
		</div>
	</div>
	`;

	notifContainer.appendChild(newNotif);

	setTimeout(()=>{newNotif.remove()}, 5000);
}

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

	notifAlert(`${products[idProduct].title}`,'add')

	// localStorage.setItem("cartInStorage", JSON.stringify(cart));
	// printTable(cart);
}

// function deleteFromCart(id) {
// 	let product = cart.find((product) => product.id === id);

// 	let index = cart.findIndex((element) => element.id === product.id);

// 	if (product.quantity > 1) {
// 		cart[index].oneLess();
// 		cart[index].refreshTotalPrice();
// 	} else {
// 		cart.splice(index, 1);
// 	}

// 	swal.fire({
// 		position: 'top-end',
// 		icon: 'error',
// 		title: 'Producto eliminado del shopping cart!',
// 		text: '',
// 		showConfirmButton: false,
//   		timer: 1500
// 	});

// 	localStorage.setItem("cartInStorage", JSON.stringify(cart));
// 	printTable(cart);
// }

// function deleteCart() {
// 	cart = [];
// 	localStorage.removeItem("cartInStorage");

// 	document.getElementById("cart").innerHTML = "";
// 	document.getElementById("actions__cart").innerHTML = "";

// 	swal.fire({
// 		icon: 'warning',
// 		title: 'Shopping cart vacío!',
// 		text: '',
// 		showConfirmButton: false,
//   		timer: 1500
// 	});

// }

function loadProducts(JSONproducts) {
	const http = new XMLHttpRequest();

	http.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200) {
			let jData = JSON.parse(this.responseText);
			for(const item of jData) {
				JSONproducts.push(item);
			}

			let container = document.getElementById("containerProducts");
			container.innerHTML = "";
		
			for (const product of JSONproducts) {
				let card = document.createElement("div");

				card.innerHTML = `
				<div class="productCard container">
					<div class="productOffer">
						<span>-${product.offer}%</span>
					</div>
					<a href="#" class="productSlider">
						<div class="slider">
							<ul class="slideList">
								<li class="slide slide1"><img src="${product.img1}"></li>
								<li class="slide slide2"><img src="${product.img2}" alt=""></li>
							</ul>
						</div>
					</a>
					<button class="productLikeHeart" role="button">
						<span class="material-symbols-outlined">favorite</i>
					</button>
					<div class="productDescription">
						<a class="productTitle" href="#">
							<h3>${product.title}</h3>
						</a>
						<div class="productPrice">
							<span class="productPrice--sale">$${product.salePrice}.00</span>
							<p class="productPrice--regular">$${product.regularPrice}.00</p>
						</div>
					</div>
					<div class="productAddToCart">
						<h4 class="productAddToCart--text">Agrega al Carrito</h4>
						<button id="addBtn${product.id}" class="productAddToCart--button button">
							<span class="material-symbols-outlined">shopping_cart</span>
						</button>
					</div>
				</div>
				`;

				container.appendChild(card);

				let cartButton = document.getElementById(`addBtn${product.id}`);
				cartButton.addEventListener("click", () => addToCart(product.id));
			}
		}
	}

	http.open('GET', '../data/products.json', true);
	http.send();


    // }
}

// function printTable(array) {
// 	let container = document.getElementById("cart");
// 	let totalPrc = getTotalPrice(array);
// 	let table = document.createElement("div");

// 	container.innerHTML = "";
// 	table.innerHTML = `
//         <table id="cartTable" class="cartTable">
//             <thead>
//                 <tr>
//                     <th>Item</th>
//                     <th>Cantidad</th>
//                     <th>Precio</th>
//                     <th>Accion</th>
//                 </tr>
//             </thead>
//             <tbody id="tableContent">
//             </tbody>
//         </table>
//     `;

// 	container.appendChild(table);

// 	let tableContent = document.getElementById("tableContent");

// 	for (let product of array) {
// 		let productData = document.createElement("tr");
// 		productData.innerHTML = `
//                 <td>${product.title}</td>
//                 <td>${product.quantity}</td>
//                 <td>${product.totalPrice}</td>
//                 <td><button id="eliminar${product.id}" class="button btn-dark">Eliminar</button></td>
//       `;

// 		tableContent.appendChild(productData);

// 		let deleteBtn = document.getElementById(`eliminar${product.id}`);
// 		deleteBtn.addEventListener("click", () => deleteFromCart(product.id));
// 	}

// 	let accionesCarrito = document.getElementById("actions__cart");
// 	accionesCarrito.innerHTML = `
// 		<h5>PrecioTotal: $${totalPrc}</h5></br>
// 		<button id="vaciarCarrito" onclick="deleteCart()" class="button btn-dark">Vaciar Carrito</button>
// 	`;
// }

// function cartInStorage() {
// 	let inStorage = JSON.parse(localStorage.getItem("cartInStorage"));

// 	if (inStorage) {
// 		for (const item of inStorage) {
// 			let product = new Product(item, item.quantity);
// 			product.refreshTotalPrice();
// 			cart.push(product);
// 		}

// 		printTable(cart);
// 	}
// }

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
loadProducts(products);
// cartInStorage(); // Consulta al Storage para saber si hay información almacenada. Si hay datos, se imprimen en el HTML al refrescar la página





// <span data-toggle="tooltip" data-placement="bottom" title="0" id="contador" class="mostrar">2</span>
// <div class="cartListInner listInner">

// </div>
