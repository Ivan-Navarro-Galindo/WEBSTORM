let repetitions = Number(prompt("Enter a number"));

for (let i = 0; i < mounth; i++) {
    let mounth = prompt("Enter a number of mounth (1-12): ");

    if(mounth < 1 || mounth > 12) {
        alert("Mes no vàlid");
        continue;
    }

    switch (mounth) {
        case 1, 12, 2:
            console.log("Hivern")
            break;
        case 3 , 4 , 5:
            console.log("Primavera")
            break;
        case 6, 7, 8:
            console.log("Estiu")
            break;
        case 9, 10 ,11:
            console.log("Tardor")
    }

}