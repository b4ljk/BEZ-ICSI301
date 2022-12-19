//fetch get
const get = async (url) => {
	const response = await fetch(url);
	return await response.json();
};
const post = async (url, data) => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return await response.json();
};
const put = async (url, data) => {
	const response = await fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return await response.json();
};
const del = async (url) => {
	const response = await fetch(url, {
		method: "DELETE",
	});
	return await response.json();
};

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
// export
export { get, post, put, del, Data };
