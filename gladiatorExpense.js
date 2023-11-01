function gladiatorExpense(lostFight, helmet, sword, shield, armor) {
    
    let counter = 0;
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0 ;


        while (counter < lostFight) {
        counter++
        if (counter % 2 == 0) {
            helmetCounter++;
        }
         if (counter % 3 == 0) {
            swordCounter++;
        }
         if (counter % 2 == 0 & counter % 3 == 0) {
            shieldCounter++;
        }
         if (shieldCounter % 2 == 0 && shieldCounter != 0 && counter % 6 == 0) {
            armorCounter++;
        }
    }
    

    let trashedHelmet = helmetCounter * helmet;
    let trashedSword = swordCounter * sword;
    let trashedShield = shieldCounter * shield;
    let trashedArmor = armorCounter * armor;

    let total = trashedArmor + trashedHelmet + trashedShield + trashedSword

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpense (23,

    12.50,
    
    21.50,
    
    40,
    
    200)