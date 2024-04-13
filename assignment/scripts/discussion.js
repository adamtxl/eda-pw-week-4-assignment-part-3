function deadlift(){
	const increment = [10,20,50,90];
	const maxWeight = 495;
    let currentWeight= 45;
if currentWeight >= maxWeight {


	for (let i = 0; i<increment.length; i++){
		currentWeight += increment[i]
	}
	}	console.log('The next set should be: ${currentWeight}')
}
deadlift();
