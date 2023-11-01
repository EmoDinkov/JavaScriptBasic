function spiceMustFlow(yeild) {
    
    let spiceFlow = 0;
    let days = 0;

        while (yeild >= 100) {
            spiceFlow += yeild;
            spiceFlow -= 26;
            yeild -= 10;
            days++;
        }

    spiceFlow -= 26;

    console.log(days);
    console.log(spiceFlow);
}

spiceMustFlow (450)