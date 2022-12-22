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

	#Render() {
		this.innerHTML = `<div style="display:flex;"><img
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
		this.products.push(myProduct);
		console.log(this.products);
		// save all items to local storage
		this.#Render();
	}
	connectedCallback() {
		// get items from local storage
		console.log("connectedCallback");
		const products = JSON.parse(localStorage.getItem("products"));
		console.log(products);
		if (products != null) {
			this.products = products;
			this.#Render();
		}

		// add event listener before unload
		window.addEventListener("beforeunload", () => {
			// add products to local storage
			console.log("beforeunload");
			localStorage.setItem("products", JSON.stringify(this.products));
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

	attributeChangedCallback(attrName, oldVal, newVal) {
		switch (attrName) {
			case "color":
				this.#Render(this.getAttribute("color"));
				break;

			default:
				break;
		}
	}
}

window.customElements.define("cart-component", shoppingCart);
