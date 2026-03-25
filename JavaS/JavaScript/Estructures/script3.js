const number = Number(prompt("Introdueix un numero"));

if (number === 0) {
    alert("Es cero")
} else if (number > 0 && number %2 === 0) {
    alert("Es par/positiu")
}else if (number > 0 && number  % 2 !== 0) {
    alert("Es impar/positiu")
} else if (number < 0 && number % 2 === 0) {
    alert("Es par/negatiu")
} else if (number < 0 && number % 2 !== 0) {
    alert("Es impar/negatiu")
}