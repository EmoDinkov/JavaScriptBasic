function calculater(numOne, numTwo, operator) {

    let operators = {
        'add' : (numOne, numTwo) => numOne + numTwo,
        'subtract' : (numOne, numTwo) => numOne - numTwo,
        'multiply' : (numOne, numTwo) => numOne * numTwo,
        'divide' : (numOne, numTwo) => numOne / numTwo,
        'power' : (numOne, numTwo) => numOne ** numTwo,
    }

    let operation = operators[operator];
    console.log(operation(numOne, numTwo));

}

calculater(5,

    5,
    
    'multiply')