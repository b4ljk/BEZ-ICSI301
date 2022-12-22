import { get, Data } from "./jsonbin.js";
function ChangeUndsenUngu() {
	const myStyle = getComputedStyle(document.body);
	const unguUndsen = myStyle.getPropertyValue("--ungu-undsen");

	document.body.style.setProperty("--ungu-undsen", "#0F0");
}

class MyArticle {
	constructor({ title, content, image }) {
		this.title = title;
		this.content = content;
		this.image = image;
	}

	render() {
		return `<a href="categoryItem.html">
		<div class="card" style="width: 18rem">
			<img style="height: 25vh; width: 80%" src="${this.image}" class="card-img-top" alt="..." />
			<div class="card-body">
				<h2 class="card-title" style="color: #620c2b">${this.title}</h2>
				<p class="card-text">${this.content}</p>
				<div onclick="window.location='http://google.com';return false" class="card-div-button">
					<div>
						<p style="color: white">Add to cart</p>
					</div>
				</div>
			</div>
		</div>
	</a>`;
	}
}

function App(data, targetElement) {
	let retVal = "";

	for (const article of data) {
		let articleObj = new MyArticle(article);
		retVal += articleObj.render();
	}

	document.getElementById(targetElement).insertAdjacentHTML("beforeend", retVal);
}

window.onload = () => {
	console.log("window.onload");
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const type = urlParams.get("type");
	console.log(type);
	if (type == "cake") {
		get("https://api.jsonbin.io/v3/b/63a051ee15ab31599e201a20").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else if (type == "bakery") {
		get("https://api.jsonbin.io/v3/b/63a05ab5dfc68e59d56c1ba9").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else if (type == "drinks") {
		get("https://api.jsonbin.io/v3/b/63a059f0dfc68e59d56c1b13").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else {
		App(Data, "cardBodyId");
	}
};
