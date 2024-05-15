// BOOLEANOS

let diasoleado = true;
let dialluvioso = false;
let value = ''

if (value){
    console.log("ES VERDAD!"); // Aqui no se imprimira nada en la consola porque la variable 'value' se establece en una cadena vacia ' '' ' 
}

if(diasoleado) {
    console.log("ES UN DIA SOLEADO!"); // Como la variable 'Diasoleado' esta establecido en 'true' y siempre se ejecutara en if porque la condicional if es un si y else es un no,imprimiendo "ES UN DIA SOLEADO" pero si cambiamos el diaSoleado en False sera "NO ES UN DIA SOLEADO" 
}else {
    console.log("NO ES UN DIA SOLEADO");
}

if(dialluvioso) {
    console.log("ES UN DIA LLUVIOSO!"); // Al igual que diaSoleado solo que la variable dialluvioso esta en false. 
}else {
    console.log("NO ES UN DIA LLUVIOSO");
}