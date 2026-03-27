const ciutats = ["València",
    "Barcelona",
    "Sevilla",
    "Bilbao",
    "Granada"];

console.log(ciutats.join(" - "));

const tros = ciutats.slice(1,4);

console.log(tros);
console.log(ciutats);

const trosEliminat = ciutats.splice(1,2);
console.log(trosEliminat);

console.log(ciutats);
