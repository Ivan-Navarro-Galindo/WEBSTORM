const llibres = [
    {titulo: 'Silmarillion', genere: "Fantasy", pagines: 448},
    {titulo: 'Las Lagrimas Shiva', genere: "Fantasy", pagines: 240},
    {titulo: 'Harry potter The Complete Saga', genere: "Fantasy", pagines: 3407},
];

console.log(llibres.titulo[0]);
console.log(llibres.genere[1]);
console.log(llibres.pagines[2]);

for (key in llibres) {
    console.log(key+ ": " + llibres[key]);
}


const Silmarillion = Object.assign({}, llibres[0]);

console.log(Silmarillion);

console.log(Object.keys(llibres[0]));
console.log(Object.values(llibres[0]));

Object.freeze(Silmarillion);

Silmarillion.genere = "Acció";

console.log(Silmarillion);
