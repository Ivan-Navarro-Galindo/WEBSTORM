const asignatures = ["Matemàtiques", "Valencià", "Història", "Angles", "Biologia"];

for (let i = 0; i < asignatures.length; i++) {
    console.log(asignatures[i]);
}

for (key in asignatures) {
    console.log(key);
}

console.log(asignatures.indexOf("Història"));
console.log(asignatures.indexOf("Física"));