function loginHard(input) {
    
    let username = input[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let guess = input[1];
    let index = 1;
    let counter = 1;

    while (guess !== password && counter !== 4) {
        console.log("Incorrect password. Try again.");
        counter++;
        index++;
        guess = input[index];

    }


        if (guess == password) {
         console.log(`User ${username} logged in.`);
     } else {
        console.log(`User ${username} blocked!`);
     }
}

loginHard (['sunny','rainy','cloudy','sunny','not sunny'])