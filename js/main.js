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
// function getTotalPrice(array) {
// 	return array.reduce((total, item) => total + item.totalPrice, 0);
// }

// function addToCart(idProduct) {
// 	let productInCart = cart.find((item) => item.id === idProduct);

// 	if (productInCart) {
// 		let index = cart.findIndex((item) => item.id === productInCart.id);

// 		cart[index].oneMore();
// 		cart[index].refreshTotalPrice();
// 	} else {
// 		cart.push(new Product(products[idProduct], 1));
// 	}

// 	swal.fire({
// 		position: 'top-end',
// 		icon: 'success',
// 		title: 'Producto en shopping cart!',
// 		text: `${products[idProduct].title}`,
// 		showConfirmButton: false,
//   		timer: 1500
// 	});

// 	localStorage.setItem("cartInStorage", JSON.stringify(cart));
// 	printTable(cart);
// }

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

			let container = document.getElementById("containerProducts"); // Obtener contenedor de tarjetas de producto
			container.innerHTML = "";
		
			for (const product of JSONproducts) {
				let card = document.createElement("div"); // Contenedor individual de cada producto
				// Agregar contenido de tarjeta de producto
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

				// let cartButton = document.getElementById(`addBtn${product.id}`); // Agregar evento al boton
				// cartButton.addEventListener("click", () => addToCart(product.id));


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

// function search(e) {
// 	e.preventDefault();

// 	let input = document.getElementById("searchForm").value.toLowerCase();
// 	let research = products.filter((item) => item.title.toLowerCase().includes(input));
// 	console.log(research);
// 	printProductsInHTML(research);
// }

/* ---------> Eventos <---------- */
// let searchbutton = document.getElementById("researchBtn");
// searchbutton.addEventListener("click", search);

/* -----> Llamar funciones <----- */
loadProducts(products);
// cartInStorage(); // Consulta al Storage para saber si hay información almacenada. Si hay datos, se imprimen en el HTML al refrescar la página





// <span data-toggle="tooltip" data-placement="bottom" title="0" id="contador" class="mostrar">2</span>
// <div class="cartListInner listInner">

// </div>


// $( () => {
//     $('section').append(grid_container)
//     $('.grid-container').append(aside)
//     $('.grid-container').append(cargandoAnimacion)
//     $('.grid-container').append(grid);
//     $('.carrito').append(carrito)
//                 // --------------------------------------//
//                 // -------------- AGREGAR ---------------//
//                 // ------------- PRODUCTOS --------------//
//                 // ------------ AL CARRITO --------------//
//                 // --------------------------------------//
//     $('.carritoInner').prepend(noHayProductos);
//     $('.grid-container').on('click', '.unProducto a.agregar', function(e){
//         e.stopPropagation();
//         $('.carritoInner p.noHayProductos').remove()
//         cero++;
//         let contador = $('#contador')
//         //PRECIO EN EL PRODUCTO
//         let precio = e.currentTarget.nextElementSibling.innerHTML
//         //NOMBRE EN EL PRODUCTO
//         let nombre = e.currentTarget.parentElement.parentElement.firstElementChild.innerHTML
//         let productoDiv = e.currentTarget.parentElement.parentElement
//         let productoId = $(productoDiv).attr('class').replaceAll('unProducto fadeIn ', '')
//         //CREAMOS LA NOTIFICACIÓN
//         crearToast(nombre, precio, 'agregado', 'agregado al')
//         //EVENTO PARA CERRAR LA NOTIFICACIÓN CON EL BOTON CERRAR EN LA MISMA
//         botonCerrarToast()
//         //MOSTRAMOS EL CONTADOR
//         $(contador).addClass('mostrar');
//         //LE CAMBIAMOS EL VALOR SEGÚN LAS VECES QUE HIZO CLICK 
//         contador.html(cero)
//         //GUARDAMOS LOS PRODUCTOS SELECCIONADOS EN EL LOCAL STORAGE
//         for (const iterator of productos_data) {
//             if (iterator.nombre === nombre) {
//                 sessionStorage.setItem('producto_' + cero, JSON.stringify({iterator}))
//             }
//         }
//         //sessionStorage.setItem('producto_' + cero, JSON.stringify({nombre: nombre, precio: precio,}))
//         //COMO EL NOMBRE DE LA FOTO ES IGUAL QUE EL NOMBRE DEL PRODUCTO PERO CON _ REMPLAZAMOS
//         //ESPACIO POR _
//         let productoImagen = nombre.replaceAll(' ', '_')
//         //CREAMOS EL PRODUCTO EN EL CARRITO
//         crearProductoEnCarrito(carrito, nombre, precio, productoImagen, productoId)
//         //MOSTRAR BOTÓN COMPRAR
//         $('a.comprar').removeClass('hidden')
//         //MOSTRAR TOTAL EN CARRITO
//         let totalString = $('span#precioTotal')[0].innerHTML
//         var total = parseInt(totalString)
//         let precioN = parseInt(precio)
//         var total = total + precioN
//         $('span#precioTotal')[0].textContent = total
//     });
//                 // ---------------------------------------//
//                 // -------------- QUITAR -----------------//
//                 // ------------- PRODUCTOS ---------------//
//                 // ------------ DEL CARRITO --------------//
//                 // ---------------------------------------//
//     $('.carritoInner').on('click', 'a.quitar', (e) => {
//         e.stopPropagation()
//         let nombre = e.currentTarget.previousElementSibling.firstElementChild.innerHTML
//         let precio = e.currentTarget.previousElementSibling.lastElementChild.innerHTML
//         //ANTES DE DISMINUIR CERO UTILIZAMOS SU VALOR PARA 
//         //REMOVER LOS PRODUCTOS EN SESSION STORAGE
//         sessionStorage.removeItem('producto_' + cero)
//         //AGARRAMOS EL CONTADOR
//         let contador = $('#contador')
//         //DISMINUIMOS CERO 
//         cero--
//         //PASAMOS 0 AL CONTADOR
//         contador.html(cero)
//         //REMOVEMOS EL PRODUCTO
//         e.target.parentElement.remove()
//         //CUANDO NO HAY PRODUCTOS EN EL CARRITO
//         if (cero === 0) {
//             $(contador).removeClass('mostrar');
//             $('.carritoInner').prepend(noHayProductos)
//             $('a.comprar').addClass('hidden');
//         }

//         crearToast(nombre, precio, 'removido', 'removido del')
//         botonCerrarToast()
//         let totalString = $('span#precioTotal')[0].innerHTML
//         var total = parseInt(totalString)
//         let precioN = parseInt(precio)
//         $('span#precioTotal')[0].textContent = total - precioN;
//     });
    

//                 // --------------------------------------//
//                 // ------------- MOSTRAR Y --------------//
//                 // ------------- OCULTAR ----------------//
//                 // ------------- EL CARRITO -------------//
//                 // --------------------------------------//

//     $('.carrito').on('click', 'svg', (e) => { 
//         $('.carritoInner').toggleClass('noMostrar');
//         $('#carrito').toggleClass('abierto')
//         e.stopPropagation();
//     });
//     //PREVIENE QUE EL CARRITO SE CIERRE CUANDO SE HACE CLIC EN
//     //DENTRO DEL CARRITO DESPLEGADO
//     $('.carritoInner').click((e) => {e.stopPropagation();})

//     //CIERRA EL CARRITO CUANDO SE HACE CLIC AFUERA DEL CARRITO
//     $('body').click((e) => {
//         let carrito = $('.carritoInner');
//         if (carrito.hasClass('noMostrar') ) {
//             //nada
//         } else {
//             $('.carritoInner').toggleClass('noMostrar');
//             $('#carrito').toggleClass('abierto')
//         }
//         e.stopPropagation();
//     })

//                 // --------------------------------------//
//                 // --------------- BOTÓN ----------------//
//                 // ---------------- PARA ----------------//
//                 // --------------- COMPRAR --------------//
//                 // --------------------------------------//
//     $('a.comprar').click((e)=> {
//         cero = 0
//         $('#contador').removeClass('mostrar')
//         $('.carrito').hide()
//         $('section').html('')
//         $('section').removeClass();
//         $('section').addClass('container');
//         $('.carritoInner').remove()
//         $('section').append(finalizarCompraPage)
//         let productosEnCarrito = e.target.parentNode.children;
//         for (const iterator of productosEnCarrito) {
//             cero++
//             if ($(iterator).hasClass('carrito-item')) {
//                 idEnCarrito = iterator.id
//                 for (const productos of productos_data) {
//                     if (idEnCarrito === productos.identificador) {
//                         productosComprados.push(productos)
//                         sessionStorage.setItem('productoComprado_' + cero, JSON.stringify({productos}))
//                     }
//                 }
//             }
//         }
//         cero = 0
//         precios = []
//         for (const iterator of productosComprados) {
//             cero++
//             let preciosAPushear = iterator.precio * parseInt(dolarOficial())
//             precios.push(preciosAPushear)
//             productosEnFinalizarCompra(iterator, $('.productos_finalizarCompra'))
//         }
//         let precioTotal = precios.reduce((a, b) => a + b, 0);
//         $('.total').append('<p>'+precioTotal+'</p>')
//         let optionsCuotas = [ 1, 3, 6, 12 ];
//         for (var i = 0; i < optionsCuotas.length; i++) {
//             funcionCuotas(precioTotal, i, optionsCuotas[i])
//         }
//         productosCompradosPrecioTotal.push(precioTotal)
//     });

//                 // ----------------------------------------//
//                 // ---------------- BOTÓN -----------------//
//                 // ----------------- PARA -----------------//
//                 // --------------- FINALIZAR --------------//
//                 // ---------------- COMPRA ----------------//
//                 // ----------------------------------------//

//     $('body').on('submit', '.finalizarCompraForm', function(e){

//         let nombre =  e.target[0].value;
//         let email =  e.target[1].value;
//         let tel =  e.target[2].value;
//         let cuotas =  e.target[3].value.replaceAll('_', ' Cuotas de: $');
//         let creditCardNumber =  e.target[4].value;
//         let creditCardName =  e.target[5].value;
//         let creditCardCVC =  e.target[6].value;
//         let creditCardDesde =  e.target[7].value;
//         let credictCardHasta =  e.target[8].value;
//         let url = "https://jsonplaceholder.typicode.com/posts";
//         new Cliente (nombre, email, tel, productosComprados)
        
//         // SIMULACIÓN DE AJAX POST
//         $.ajax({
//             url: url,
//             type: 'POST',
//             data: {
//                 nombre: nombre,
//                 email: email,
//                 tel: tel,
//                 cuotas: cuotas,
//                 creditCardNumber: creditCardNumber,
//                 creditCardName: creditCardName,
//                 creditCardCVC: creditCardCVC,
//                 creditCardDesde: creditCardDesde,
//                 credictCardHasta: credictCardHasta,
//                 dataProductosComprados: productosComprados,
//                 dataPrecioTotal: productosCompradosPrecioTotal[0],
//             },
//             beforeSend: function() {
//                 $('.finalizarCompra').html('')
//                 $('.finalizarCompra').addClass('compraFinalizada')
//                 $('.finalizarCompra.compraFinalizada').removeClass('finalizarCompra')
//                 $(cargandoAnimacion).removeClass('col-md-10');
//                 $(cargandoAnimacion).addClass('col-md-12');
//                 $('.compraFinalizada').append(cargandoAnimacion)
//                 $('#loader').removeClass('hidden')
//             },
//             success: function (data) {
//                 compraRealizadaConExito(data)
//             },
//             complete: function () { 
//                 $('#loader').addClass('hidden')
//             }
//         });
//     });
// });
