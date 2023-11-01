function hardCalculator(num1, operatior, num2) {
 
    let sum = 0;

        if (operatior === '+') {
            sum = num1 + num2;
            console.log(sum.toFixed(2));
        } else if (operatior === `-`) {
            sum = num1 - num2;
            console.log(sum.toFixed(2));
        } else if (operatior === `/`) {
            sum = num1 / num2;
            console.log(sum.toFixed(2));
        } else {
            sum = num1 * num2;
            console.log(sum.toFixed(2));
        }

}

hardCalculator (25.5,

    '-',
    
    3)