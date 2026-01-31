	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions, organicPref) {
	let filtered = [];

	for (let i = 0; i < prods.length; i++) {
		let ok = true;

		if (restrictions.includes("Vegetarian") && !prods[i].vegetarian) ok = false;
		if (restrictions.includes("GlutenFree") && !prods[i].glutenFree) ok = false;

		if (organicPref === "Organic" && !prods[i].organic) ok = false;
		if (organicPref === "Non-Organic" && prods[i].organic) ok = false;

		if (ok) filtered.push(prods[i]);
	}
	return filtered;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
