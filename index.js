const disha = 60;
const tushar = 95;

if(disha > tushar){
    console.log('Disha first hoise');
    
}
else{
    console.log('Tushar 1st hoise');
    
}


// inside function---------
function getMax(num1, num2){
if(num1 > num2){
    return num1;
}
else{
    return num2;
}
}

const maxNumber = getMax(85, 57);
console.log(maxNumber); 



const max = getMax(96, 79);
console.log('max of two is:' ,  max);


// jodi 3-tar moddhe tulona korte hoy--------
const jim = 89;
const kim = 56;
const tim = 98;

if(jim > kim && jim > tim){
    console.log('Jim is the boss');
    
}else if(kim > tim && kim > jim){
    console.log('Kim is the boss');
    
}else{
    console.log('Tim is the boss');
    
}


// same ta function diye korle---------
function maxOfThree(num1 , num2, num3){
    // console.log(num1 , num2, num3);
    if(num1 > num2 && num1 > num3){
        return 'num1 boro';
    }
    else if(num2 > num1 && num2 > num3){
        return 'num2 boro';
    }
    else{
        return 'num3 boro';
    }
}

const findMax = maxOfThree(85, 75, 90);
console.log(findMax);


// onekgulo number er max easily ber korte hole-------
const findMAxNumber = Math.max(15, 45, 78, 98, 25, 32, 65, 95, 29, 48, 68, 98)
console.log(findMAxNumber);
