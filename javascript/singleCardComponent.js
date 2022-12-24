class cardItem extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.innerHTML = `<a href="categoryItem.html">
			<div class="card" style="width: 18rem">
				<img style="height: 25vh; width: 80%" src="${this.getAttribute("image")}" class="card-img-top" alt="card mono photo" />
				<div class="card-body">
					<h2 class="card-title" style="color: #620c2b">${this.getAttribute("title")}</h2>
					<p class="card-text">${this.getAttribute("content")}</p>
					<div onclick="(function(){
                        const myCart = document.querySelector('cart-component');
                        myCart.AddToCart({
                            title: '${this.getAttribute("title")}',
                            content: '${this.getAttribute("content")}',
                            image: '${this.getAttribute("image")}',
							
							count: 1
                        });

                        return false;
                    })();return false" class="card-div-button">
						<div>
							<p style="color: white">Add to cart</p>
						</div>
					</div>
				</div>
			</div>
		</a>`;
	}
	connectedCallback() {
		// this.querySelector("button").addEventListener("click", () => {
		// 	const myCart = document.querySelector("gobi-shoppingcart");
		// 	myCart.AddToCart(this);
		// 	myCart.color = "#0f0";
		// 	// MyApp.SetState("lastColor", "#0f0");
		// 	// MyApp.AddProductToShoppingCart(this);
		// 	// alert(MyApp.GetState("lastColor"));
		// });
	}
	disconnectedCallback() {}
	attributeChangedCallback(attrName, oldVal, newVal) {}
}

window.customElements.define("single-product", cardItem);
