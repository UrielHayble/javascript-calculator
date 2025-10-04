const display = document.getElementById("display");
let operator = "";

function showDisplay(number){
    display.value += number;
}

function backSpace(){
    const expression = display.value;
    const newExpression = expression.slice(0, -1);
    display.value = newExpression;
}

function setOperator(op){
    operator = op;
    display.value += op
}

function clearDisplay(){                                    
    display.value = ""
}

function getNumbers(sign){                                      //splits expression and turns it into numbers
    const expression = display.value;
    const numbers = expression.split(sign).map(Number);
    return numbers;
}

function add(){
    const numbers = getNumbers("+");
    const addition = numbers.reduce((acc, num) => acc + num);
    return addition;

}

function subtract(){
    const numbers = getNumbers("-");
    const subtraction = numbers.reduce((acc, num) => acc - num);
    return subtraction;
}

function multiplication(){
    const numbers = getNumbers("x");
    const multiplication = numbers.reduce((acc, num) => acc * num);
    return multiplication;

}

function division(){
    const numbers = getNumbers("÷");
    const division = numbers.reduce((acc, num) => acc / num);
    return division;
}

function sqrt(){
    const expression = display.value;
    const numbers = Number(expression.slice(1));
    const sqrt = Math.sqrt(numbers).toFixed(2);
    return sqrt;
}

function percentage(){
    const expression = display.value;
    const numbers = Number(expression.slice(0, -1));
    const percentage = numbers / 100;
    return percentage;
}



function calculate(){                                    //used switch statement to select operators and display results
    try{
        let result;
        switch (operator) {
            case "+":
              result = add();
              display.value = result;
              break;
            
            case "-":
              result = subtract();
              display.value = result;
              break;

            case "x":
              result = multiplication();
              display.value = result;
              break;
            
            case "÷":
              result = division();
              display.value = result;
              break;

            case "√":
              result = sqrt();
              display.value = result;
              break;
            
            case "%":
              result = percentage();
              display.value = result;
              break;

            default:
              console.log(`something went wrong in switch statement`)
        }   
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        } 

    }
    catch(error){
        display.value = "Error";
        console.log("Error");
    }
}
