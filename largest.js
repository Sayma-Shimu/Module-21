const numbers = [ 51, 45, 25, 36, 63, 96, 98, 78, 49, 57, 85];

function getLargeNumber(array){
    let largeNumber = numbers[0];
    for (const element of array) {

        if(element > largeNumber){
            largeNumber = element;
        }
    }
    return largeNumber;
}

const result = getLargeNumber(numbers);
console.log(result);


// find min--------------

function getSmallNumber(array){
    let smallNumber = numbers[0];

    for (const number of array) {
        if(number < smallNumber){
            smallNumber = number;
        }        
    }
    return smallNumber;
}

const resultMin = getSmallNumber(numbers);
console.log(resultMin);
