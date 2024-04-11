console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
	basket.push(item)
	return basket;
}
console.log('Testing adding a new item to the basket: ' , addItem('soap'));

function isFull(){
    if (basket.length < maxItems){
        return false;
    }
    else return true;
}







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
