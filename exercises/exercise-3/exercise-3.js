let order = [
	{ itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
	{ itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
	{ itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
	{ itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
	{ itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
	{ itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(objectArr) {
	let total = [];
	console.log("QTY ITEM            TOTAL");
	for (let item of objectArr) {
		let { itemName, quantity, unitPrice } = item;
		console.log(
			`${quantity}   ${itemName}     ${(quantity * unitPrice).toFixed(2)}`
		);
		total.push(unitPrice * quantity);
	}
	console.log(
		"Total:" +
			" " +
			total.reduce((acc, curr, currInd) => {
				return acc + curr;
			})
	);
}

printReceipt(order);
