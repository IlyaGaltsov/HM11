function doMath (){
    let x = parseInt(prompt("Enter your first number"));
    let y = parseInt(prompt("Enter your second number"));
    let znak = prompt("Сhoose which math action you want to do")
    function calculate(firstNumber,secondNumber){
        if(znak === "+"){
            return firstNumber + secondNumber;
        }else if(znak === "-"){
            return firstNumber - secondNumber;
        }else if(znak === "*"){
            return firstNumber * secondNumber;
        }else if(znak === "/"){
            return firstNumber / secondNumber;
        }else if(znak === "^"){
            return Math.pow(firstNumber,secondNumber);
        }else if(znak === "%"){
            return (firstNumber * secondNumber) / 100;
        };
    }
    let result = calculate(x,y)
    console.log("Result: ", result)
}
doMath();
