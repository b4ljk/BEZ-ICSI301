import { get, Data } from "./jsonbin.js";
import "./singleCardComponent.js";
function ChangeUndsenUngu() {
	const myStyle = getComputedStyle(document.body);
}

class MyArticle {
	constructor({ title, content, image }) {
		this.title = title;
		this.content = content;
		this.image = image;
	}

	render() {
		return `<single-product image="${this.image}" content="${this.content}" title="${this.title}"></single-product>`;
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
	} else if (type == "bread") {
		get("https://api.jsonbin.io/v3/b/63aa763601a72b59f23a07c8").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else if (type == "catering") {
		get("https://api.jsonbin.io/v3/b/63aa771801a72b59f23a0835").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else if (type == "desert") {
		get("https://api.jsonbin.io/v3/b/63aa77e3dfc68e59d571bd42").then((data) => {
			if (data) {
				App(data?.record?.[type], "cardBodyId");
			}
		});
	} else {
		App(Data, "cardBodyId");
	}
};
