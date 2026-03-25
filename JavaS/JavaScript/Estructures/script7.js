let number = Number(prompt("Enter number: "));

while (number != 0) {

    console.log("1 - Calcular el quadrat d'un número");

    console.log("2 - Dir si un número és positiu, negatiu o zero");

    console.log("3 - Compta cap arrere des d'un número fins 0");

    console.log("0- Eixir");

    switch (number) {
        case 1:
            let square = number * number;
            console.log(square);
            break;
        case 2:
            if(number === 0) {
                console.log("El número es positiu");
            } else if (number > 0) {
                console.log("El número es positiu");
            } else {
                console.log("El número es negatiu");
            }
            break;
        case 3:
            for (let i = number; i > 0 ; i--) {
                console.log(i);
            }
            break;
        case 0:
            confirm("Estas seguro de salir?")
            break;
        default:
            alert("Opcion incorrecto");
    }
}