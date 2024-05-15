// METODOS DE STRING

let texto = "Hola Mundo";

// length 

console.log(texto.length); // Imprime 10

// toUpperCase

console.log(texto.toLocaleUpperCase()); // Vuelve en mayuscula el string en este caso "HOLA MUNDO"

// toLowerCase

console.log(texto.toLocaleLowerCase()); // Vuelve en minuscula el string en este caso "hola mundo"

// trim().length

let parrafo = "       Hola Mundo     " // trim() se utiliza para eliminar los espacios blancos al principio y al final 
console.log(parrafo.trim().length);

// Concatenacion 

let name = "Mauricio";
let lastname = "Pereda";

// Concatenacion manual (ES5)
console.log('Bienvenido' + ' ' + name + ' ' + lastname + 'al bootcamp');

// Template string (ES6)
console.log(`Bienvenido ${name} ${lastname} al bootcamp`);