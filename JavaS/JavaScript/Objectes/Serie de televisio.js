const serie = {
    titol: "Game of Thrones",
    plataforma: "HBOMAX",
    temporades: 8,
    acabada: true
};
console.log(serie);
delete serie.acabada;
console.log("temporades" in serie);
console.log("director" in serie);

for (key in serie) {
    console.log(key+ ": " + serie[key]);
}
