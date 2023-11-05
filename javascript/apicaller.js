console.log("apicaller.js loaded");
// fetch data at localhost:3000
let result = "";
async function data() {
	await fetch("https://d9tgfokrrl.execute-api.eu-north-1.amazonaws.com/prod/user")
	// await fetch("http://127.0.0.1:3000/")
		.then((response) => response.json())
		.then((data) =>
			data?.map((item) => {
				result = ` <p>${item["lastname"]}</p> <p>${item["firstname"]}</p> `;
			})
		);

	console.log(result);
	// inject result to html
	document.getElementById("result").innerHTML = result;
}
data();
