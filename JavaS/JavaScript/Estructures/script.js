const temperature = Number(prompt("Enter a temperature"));

if (temperature < -10 || temperature > 50) {
    alert("Valor no habitual");
} else if(temperature > 32) {
    alert("Fa molta calor");
} else if (temperature >= 20 && temperature <= 32) {
    alert("Temperatura agradable");
} else if (temperature < 20) {
    alert("Fa fred");
} else {
    alert("Bomboclat");
}
