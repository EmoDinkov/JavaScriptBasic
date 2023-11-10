function orderChe(stringche, num) {

    let price;
    
    
    switch (stringche) {
        case "coffee":
            price = 1.5;
            break;
        case "water":
            price = 1;
            break;
        case "coke":
            price = 1.4;
            break;
        case "snacks":
            price = 2;
            break;
    }

    let sum = price * num

    console.log(sum.toFixed(2));
}

orderChe ("water", 5)