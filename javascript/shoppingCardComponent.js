class cartItem {
	constructor(product) {
		this.product = product;
	}
	#Render() {
		return `<div class="Cart-Items pad">
		<div class="image-box">
			<img src=${this.product?.["image"]} height="120px" alt="photo of item" />
		</div>
		<div class="about">
			<h1 class="title">${this.product?.["title"].split(" ").slice(0, 2).join(" ")}</h1>
			<h3 class="subtitle" style="margin-top:20px">${this.product?.["content"].split(" ").slice(0, 5).join(" ")}</h3>

		</div>
		<div class="counter">
			<div class="btn">+</div>
			<div class="count">${this.product?.["count"] || 0}</div>
			<div class="btn">-</div>
		</div>
		<div class="prices">
			<div class="amount">${this.product?.["price"] || "1500₮"}</div>
			<div class="save"><u>Save for later</u></div>
			<div class="remove"><u>Remove</u></div>
		</div>
	</div>`;
	}
	get Render() {
		return this.#Render();
	}
}

if (window.location.href.includes("cart.html")) {
	document.getElementById("all-items-remove").addEventListener("click", () => {
		const myCart = document.querySelector("cart-component");
		myCart.RemoveAll();
	});
}

class shoppingCart extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.products = [];
		// get items from local storage
		const products = JSON.parse(localStorage.getItem("products"));
		this.#Render();
		// if (this.getAttribute("color") != null) this.#Render(this.getAttribute("color"));
		// else this.#Render();
	}

	// remove all items from cart
	RemoveAll() {
		this.products = [];
		this.#Render();
		// refresh page
		window.location.href = "./cart.html";
	}

	#Render() {
		this.innerHTML = `<div style="display:flex;">
		<img
		class="cart-img"
		onclick="(function(){
			window.location.href = './cart.html';
			return false;
		})();return false"

		style="margin-left:100px"
		src="./assets/cart.svg"
		height="40"
		width="40"
		alt="cart"
	/>
	<div
		style="background-color:red;border-radius:69px;height:20px;width:20px;display:flex;justify-content:center;align-items:center;margin-left:-15px;margin-top:25px"
	>
		<p style="color:white">${this.products.length}</p>
	</div></div>`;
	}

	AddToCart(myProduct) {
		// if item already exists in products increase the count
		const index = this.products.findIndex((product) => product.title == myProduct.title);
		if (index != -1) {
			// string to int
			this.products[index].count = parseInt(this.products[index].count) + 1;
		} else {
			this.products.push(myProduct);
		}

		console.log(this.products);
		// save all items to local storage
		this.#Render();
	}
	connectedCallback() {
		// get items from local storage
		console.log("connectedCallback");
		const products = JSON.parse(localStorage.getItem("products"));
		console.log(products);
		// if cart.html then add items to dom
		if (window.location.href.includes("cart.html")) {
			// add items to dom
			const cartItems = document.querySelector(".cart-items");
			if (products.length > 0) {
				products.forEach((product) => {
					const item = new cartItem(product);
					cartItems.innerHTML += item.Render;
				});
			} else {
				cartItems.innerHTML = `<div style=" text-align:center;"><img src="https://media.istockphoto.com/id/1139666909/vector/shopping-cart-shop-trolley-or-basket-in-the-supermarket.jpg?s=612x612&w=0&k=20&c=_HajO7ifYKxuwzKFf-Fx9lsLKBa_1Rq9vuzGiPq8Q5Q="  alt="empty cart" /><h2>your cart is empty</h2></div>`;
			}
		}
		if (products != null) {
			this.products = products;
			this.#Render();
		}

		// add event listener before unload
		window.addEventListener("beforeunload", () => {
			// add products to local storage
			console.log("beforeunload");
			// set items to local storage only if count is greater than 0
			const products = this.products.filter((product) => product.count > 0);
			localStorage.setItem("products", JSON.stringify(products));
		});
	}
	disconnectedCallback() {
		// add products to local storage
		// remove eventlistener
		window.removeEventListener("beforeunload", () => {
			// add products to local storage
			console.log("beforeunload");
			localStorage.setItem("products", JSON.stringify(this.products));
		});
	}

	get productCount() {
		return this.products.length;
	}

	static get observedAttributes() {
		return ["color"];
	}
}

window.customElements.define("cart-component", shoppingCart);
