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
            <img
                style="height: 23vh; width: auto"
                src="${this.image}"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h2 class="card-title" style="color: #620c2b">${this.title}</h2>
                <p class="card-text">${this.content}</p>
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

const Data = [
	{
		title: "Cloud cake",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoCloudCake.png",
	},
	{
		title: "Orange cake",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2022/06/Web_PDP_OrangeCreamCake.png",
	},
	{
		title: "Amogus cake",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2022/03/AmongUsImpostor.jpg",
	},
	{
		title: "Mango",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2021/06/Mango3.jpg",
	},
	{
		title: "Green honey melon",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2022/06/Web_PDP_HoneydewMelonSoft.png",
	},
	{
		title: "Chip scone",
		content: "Monbakery is a bakery that sells the best cakes and pastries in town.",
		image: "https://www.tljus.com/wp-content/uploads/2022/07/Web_PDP_ChocoChip.png",
	},
];
window.onload = () => App(Data, "cardBodyId");
