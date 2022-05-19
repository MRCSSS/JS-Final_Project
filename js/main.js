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

		this.refreshTotalPrice();
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
		notifMessage = 'Eliminado de shopping cart!';
	} else if (action == 'empty') {
		notifClass = 'delNotif';
		notifIcon = 'delete_sweep';
		notifMessage = 'Shopping cart';
	} 

	let newNotif = document.createElement("div");

	newNotif.innerHTML = `
	<div class="${notifClass} notif d-flex flex-column justify-self-end ">
		<div class="notifInner d-flex flex-column justify-content-center align-items-center">
			<span class="material-symbols-outlined">${notifIcon}</span>
			<p class="notifText">${notifMessage}</p>
			<p class="notifProduct"> ${prodName} </p>
		</div>
		<div class="notifTimeBarProgress"></div>
	</div>
	`;

	notifContainer.appendChild(newNotif);

	setTimeout(()=>{newNotif.remove()}, 6600);
}

function goToPay() {

}

function countCartItems(array){
	let counter = document.getElementById('counter');
	let count = array.reduce((total, item) => total + item.quantity, 0);

	counter.innerText = count;

	if (count > 0) {
		counter.className = "counter show";
	} else {
		counter.className = "counter";
	}

}

function getTotalPrice(array) {
	countCartItems(array);
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

	localStorage.setItem("cartInStorage", JSON.stringify(cart));
	addToCartTable(cart);
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

	// counter.className = "counter";

	notifAlert(`${products[id].title}`,'delete')

	localStorage.setItem("cartInStorage", JSON.stringify(cart));
	addToCartTable(cart);
}

function deleteCart() {
	notifAlert('VACÍO','empty');

	countCartItems([]);

	cart = [];
	localStorage.removeItem("cartInStorage");

	document.getElementById("cartInner").innerHTML = "";
	document.getElementById("actionCart").innerHTML = "";
}

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
					<div class="productDescription">
						<a class="productTitle" href="#">
							<p>${product.title}</p>
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

	http.open('GET', 'data/products.json', true);
	http.send();


    // }
}

function addToCartTable(array) {
	let container = document.getElementById("cartInner");
	let totalPrc = getTotalPrice(array);

	container.innerHTML = "";

	for (let product of array) {
		let productData = document.createElement("div");
		productData.className += "cartItem d-flex flex-row justify-content-between align-items-center";
		productData.innerHTML = `
			<p class="tableNameTitle">${product.title}</p>
			<p class="tablePriceTitle">$ ${product.salePrice}.00</p>
			<div class="tableCantTitle d-flex flex-row">
				<span id="delete${product.id}" class="cantBtn material-symbols-outlined">remove</span>
				<p>${product.quantity}</p>
				<span id="add${product.id}" class="cantBtn material-symbols-outlined">add</span>
			</div>
			<p class="tableSubTitle">$ ${product.totalPrice}.00</p>
      `;

		container.appendChild(productData);

		let deleteBtn = document.getElementById(`delete${product.id}`);
		deleteBtn.addEventListener("click", () => deleteFromCart(product.id));

		let addBtn = document.getElementById(`add${product.id}`);
		addBtn.addEventListener("click", () => addToCart(product.id));
	}

	let cartActions = document.createElement("div");
	cartActions.innerHTML = `
		<h5>PrecioTotal:  <span> $ ${totalPrc}.00</span></h5>
		<div class="cartButtons d-flex justify-content-between">
			<button id="deleteCart" onclick="deleteCart()" class="button">Borrar todo</button>
			<button id="toPay" onclick="goToPay()" class="button">Pagar</button>
		</div>
	`;
	container.appendChild(cartActions);
}

function cartInStorage() {
	let inStorage = JSON.parse(localStorage.getItem("cartInStorage"));

	if (inStorage) {
		for (const item of inStorage) {
			let product = new Product(item, item.quantity);
			product.refreshTotalPrice();
			cart.push(product);
		}

		addToCartTable(cart);
	}
}

/* -----> Llamar funciones <----- */
loadProducts(products);
cartInStorage(); 
