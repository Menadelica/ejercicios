//ejercicio 11

// let palabra=prompt("ingrese una palabra");

// for (let i=1; i<=10; i++){
//     document.write(i + " " + palabra, "<br>")
// }

//Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos
//los años que ha cumplido (desde 1 hasta su edad).

// let edad=parseInt(prompt("ingrese su edad"));

// for (let año=1; año<=edad; año++){
//     document.write(año,"<br>");
// }
// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla todos los números impares desde 1 hasta ese número separados por
// comas.


// let numero = parseInt(prompt("Escribe un número:"));

// for (let i = 1; i <= numero; i++) {
//     if (i % 2 !== 0) {
//         document.write(i + ",");
//     }
// }

// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla la cuenta atrás desde ese número hasta cero separados por comas.

// let numero=parseInt(prompt("ingrese un numero entero"));
// let cuentaAtras=numero;

// while(cuentaAtras>0){
//     document.write(cuentaAtras+ ",");
//     cuentaAtras=cuentaAtras-1;
// }
// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés
// anual y el número de años, y muestre por pantalla el capital obtenido en la
// inversión cada año que dura la inversión.

// let cantInvertir=parseFloat(prompt("ingrese la cantidad a invertir"));
// let interesAnual=parseFloat(prompt("Ingrese el interes anuaal"));
// let numAños=parseInt(prompt("ingrese el numero de años"));
// let capitalObten=0;
// let añoInversion=0;
// let salir="si";

// while(salir===si){
//     capitalObten=cantInvertir+interesAnual*numAños;
// añoInversion=capitalObten;
// document.write("el capital obtenido cada año, es de:"+ capitalObten);

// alert("desea salir? si/no")
// }

// let cantInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
// let interesAnual = parseFloat(prompt("Ingrese el interés anual (en %):")) / 100;
// let numAños = parseInt(prompt("Ingrese el número de años:"));

// if (isNaN(cantInvertir) || isNaN(interesAnual) || isNaN(numAños) || cantInvertir <= 0 || interesAnual <= 0 || numAños <= 0) {
//     alert("Por favor, ingrese valores válidos.");
// } else {
//     let capitalObten = cantInvertir;

//     document.write("<h3>Capital obtenido por año:</h3>");
//     for (let año = 1; año <= numAños; año++) {
//         capitalObten += capitalObten * interesAnual;
//         document.write(`Año ${año}: ${capitalObten.toFixed(2)}<br>`);
//     }
// }

// Escribir un programa que pida al usuario un número entero y muestre por pantalla
// un triángulo rectángulo como el de más abajo, de altura el número introducido.
// *
// **
// ***
// ****
// *****

// let altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));

// if (isNaN(altura) || altura <= 0) {
//     alert("Por favor, ingrese un número entero positivo.");
// } else {
//     for (let i = 1; i <= altura; i++) {
//         let linea = "*".repeat(i); // 
//         console.log(linea); 
//         document.write(linea + "<br>");
//     }
// }
//  ejercicio 17
//  Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

