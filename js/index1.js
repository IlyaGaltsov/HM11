function createSumFunction() {
    let total = 0; 
    function innerSum(x) {
        total += x;  
        return total;
    }
    return innerSum;  
}


const sumFunction = createSumFunction();


console.log(sumFunction(10));  
console.log(sumFunction(2));  
console.log(sumFunction(234));