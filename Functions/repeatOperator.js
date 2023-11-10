function repeatche (stringche, num) {
    
    let result = "";

    for (let i = 0; i < num; i++) {
        result += stringche
    }

    return result
}

console.log(repeatche ("abc", 3))