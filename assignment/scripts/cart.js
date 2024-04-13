console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

empty(); //started with an empty basket
function addItem(item) {
	if (basket.length < maxItems) {
		//added conditional to make sure that we're under max items
		basket.push(item);
		return true;
	} else return false;
}
console.log('Testing adding a new item to the basket: ', addItem('soap'));
listItems(basket);

listItems(basket);
//function declaration --gets "hoisted"
function listItems(array) {
	// console.log(`Cart Items (max items: ${maxItems}): `);
	const totalInCart = array.length;
	const cartMessage = () => `Cart Items Updated (max items: ${maxItems}). You currently have ${totalInCart} item(s) `;
	console.log(cartMessage());
	let i = 0;
	while (i < array.length) {
		console.log(`\t-Item ${i}: ${array[i]}`);
		i++;
	}
}

// function expression -- does not get hoisted
// const listItems = (array) => {
// 	console.log(`Cart Items (max items: ${maxItems}): `);
// 	for (i = 0; i < array.length; i++) {
// 	  console.log(`\tItem ${i}: ${array[i]}`);
// 	}
//   }

function empty() {
	basket.splice(0, basket.length); //this takes the basket array and removes every element starting at 0
}

function isFull() {
	return basket.length >= maxItems; //if the basket is equal to or greater than max items it returns true
}

function removeItem(item) {
	let itemToRemove = basket.indexOf(item);

	if (itemToRemove !== -1) {
		// Remove the item using splice
		let removedItem = basket.splice(itemToRemove, 1);
		console.log('Item', removedItem[0], 'has been removed from the cart.');
	} else {
		console.log('Undefined', item, 'is not in the cart.');
	}
}

addItem('soap');
addItem('detergent');
addItem('gloves');
console.log('Testing isFull function:', isFull()); //added items and testing if cat is full
// addItem('kitty litter');
// addItem('puppy pads');
addItem('spatula');
console.log('Testing isFull function2:', isFull()); //added more items to confirm that ifFull will return false.
console.log('1Testing listItems function: ', listItems(basket)); //confirming items in basket
listItems(basket);
removeItem('spatula');
listItems(basket);
console.log('2Testing listItems after removing the spatula', listItems(basket));
empty(); //emptying the basket
console.log('Testing listItems after removing all items', listItems(basket));

// DO NOT MODIFY
// Used for automated testing
try {
	module.exports = {
		basket: typeof basket !== 'undefined' ? basket : undefined,
		addItem: typeof addItem !== 'undefined' ? addItem : undefined,
		listItems: typeof listItems !== 'undefined' ? listItems : undefined,
		maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
		empty: typeof empty !== 'undefined' ? empty : undefined,
		isFull: typeof isFull !== 'undefined' ? isFull : undefined,
		removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
	};
} catch (e) {
	// Do nothing
}
