const usuariCorrecte ="admin";
const clauCorrecte ="1234";

const userName = prompt("Enter username");
const password = prompt("Enter password");

if (userName === usuariCorrecte && password === clauCorrecte) {
    alert("Bomboclat");
} else if (userName !== usuariCorrecte) {
    alert("usuario no existe");
} else if (password !== clauCorrecte) {
    alert("Password incorrect");
}