function sumDigits(num) {
    
    let numAsString = String(num);
    let sum = 0;

    for (i = 0; i <= numAsString.length - 1 ; i++) {
        let numAsNumber = Number(numAsString[i]);
        sum += numAsNumber;
    }

    console.log(sum);

}

sumDigits (97561)