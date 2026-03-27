const notes = [4, 7, 9];

notes.forEach(nota => console.log(nota));

const aprovat = nota => {
    if (nota >= 5) {
        return "Aprovat";
    } else {
        return "Suspés";
    }
};

console.log(aprovat(4));
console.log(aprovat(7));
console.log(aprovat(9));
