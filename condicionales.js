// CONDICIONALES 

const username = 'Mauricio';
const password = '123456';
const email = false;

// if y else: Permite ejecutar un código si la condición es verdadera y el otro código si la condición es falsa.

if (username === 'Mauri'){
    console.log("Estas logeado");
} else {
    console.log("No estas logeado");
}

if (password === '123456'){
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}

// else if: Se utiliza cuando tienes varias condiciones que verificar.

if (username === 'Mauri'){
    console.log("Estas logeado");
} else if (email){
    console.log("Estas logeado");
} else {
    console.log("No estas logeado");
}

// switch: Se utiliza para seleccionar uno de los múltiples bloques de código para ejecutar.

switch (email) {
    case true:
        console.log("El usuario ha proporcionado un email válido");
        break;
    case false:
        console.log("El usuario no ha proporcionado un email válido");
    default:
        console.log("El estado del email no esta definido");
}

// Operacion ternario: La operación ternaria se utiliza para asignar un mensaje a la variable mensaje dependiendo del valor de la variable

let edad = 18;
let mensaje = (edad >= 18) ? "eres mayor de edad" : "eres menor de edad";

console.log(mensaje);

