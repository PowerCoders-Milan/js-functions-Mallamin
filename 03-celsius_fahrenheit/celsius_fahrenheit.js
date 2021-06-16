// define a function multiplyByNineFifths(number)

const multiplyByNineFifths=(number) =>{
    //return number*(9/5)
    return number*(9/5)
}

    

// define a function getFahrenheit(celsius)
const getFahrenheit=(celsius)=>{
  // return   multiplyByNineFifths(celsius) + 32;
    return multiplyByNineFifths(celsius) + 32;
}

    

console.log(getFahrenheit(5)) // call getFahrenheit();


// do the same thing starting from Fahrenheit to Celsius
const deduction =farehneit=>{
    return(farehneit-32)
}
const converTocelsius=multiply=>{

    return (deduction(multiply)*5/9)


}

console.log(converTocelsius(4))