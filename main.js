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
//ejercicio 16
// Escribir un programa que pida al usuario un número entero y muestre por pantalla
// un triángulo rectángulo como el de más abajo, de altura el número introducido.
// *
// **
// ***
// ****
// *****


// let altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));

//  if (isNaN(altura) || altura <= 0) {
//     alert("Por favor, ingrese un número entero positivo.");
//  } else {
//      for (let i = 1; i <= altura; i++) {
//          let linea = "*".repeat(i); // 
//        document.write(linea); 
//         document.write(linea + "<br>");
//     }
//  }

//  ejercicio 17
//  Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

//  for (let i = 1; i <= 10; i++) {
//     document.write(`<h2>Tabla de ${i}</h2><br>`); // Añadimos <br> para salto de línea
//     for (let j = 1; j <= 10; j++) {
//      document.write(`${i} x ${j} = ${i * j} <br>`);
//     }
//      document.write("<br><br>"); // Dos saltos de línea para más separación
//    }

//ejercicio 18
// Escribir un programa que pida al usuario un número entero y muestre por pantalla
// un triángulo rectángulo como el de más abajo.
// 1
// 3 1
// 5 3 1
// 7 5 3 1
// 9 7 5 3 1

//     let numero = parseInt(prompt("Ingrese un numero entero"));
// if (isNaN(numero) || numero <= 0) {
//     document.write("Por favor, ingrese un número entero positivo.");
// } else {
//     for (let i = 1; i <= numero; i++) {
//         let linea = ""; // Inicializar línea como cadena vacía
//         for (let j = 1; j <= i; j++) {
//             linea += numero; // Concatenar el número en lugar de repetirlo
//         }
//         document.write(linea + "<br>");
//     }
// }

//ejercicio 19
// Escribir un programa que almacene la cadena de caracteres contraseña en una
// variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña
// correcta.

// const cadena= "contraseña";
// let contraseña=prompt("ingrese la contraseña");
// const numIntentos=10;
//intento #1 ERROR
// if(contraseña===cadena){
//     document.write("contraseña correcta");
// }else{
//     alert("contraseña incorrecta, vuelve a intentarlo");
// }

// if(contraseña===numIntentos){
//     document.write("haz alcanzado el numero maximo de intentos");
// }
//IA CLAUDE, Solucion:
// const cadena = "contraseña";
// const numIntentos = 10;
// let intentosRealizados = 0;

// while (intentosRealizados < numIntentos) {
//     let contraseña = prompt("Ingrese la contraseña");
//     intentosRealizados++;

//     if (contraseña === cadena) {
//         document.write("Contraseña correcta");
//         break; // Salir del bucle si la contraseña es correcta
//     } else {
//         alert(`Contraseña incorrecta. Intento ${intentosRealizados} de ${numIntentos}`);
//     }
// }

// if (intentosRealizados === numIntentos) {
//     document.write("Has alcanzado el número máximo de intentos");
// }

// Ejercicio 20
// Escribir un programa que pida al usuario un número entero y muestre por pantalla
// si es un número primo o no.
//IA CHATGPT
// Pedir número al usuario
// let numero = parseInt(prompt("Ingrese un número entero:"));

// // Verificar si el número es válido
//  if (isNaN(numero)) {
//     document.write("Por favor, ingrese un número válido.");
// } else {
//     // Variable para determinar si es primo
//      let esPrimo = true;

// //     // Manejar números menores de 2
//    if (numero < 2) {
//         esPrimo = false;
//          } else {
//        // Revisar divisibilidad
//          for (let i = 2; i <= Math.sqrt(numero); i++) {
//            // Si encuentra un divisor
//            if (numero % i === 0) {
//                 esPrimo = false;
//                  break; // Salir del bucle al encontrar un divisor
//              }
//         }
//     }
//     // Mostrar resultado
//     if (esPrimo) {
//       document.write(`${numero} es un número primo.`);
//      } else {
//         document.write(`${numero} NO es un número primo.`);
//     }
//  }
// Este ciclo revisa si el número tiene divisores distintos de 1 y de sí mismo. Veamos cómo funciona y por qué se usa de esta manera:

// 1. Declaración del ciclo
// javascript
// Copiar código
// for (let i = 2; i <= Math.sqrt(numero); i++) {
// let i = 2: Inicia el ciclo con i igual a 2 porque todos los números son divisibles por 1, y esa comprobación no nos sirve aquí.
// i <= Math.sqrt(numero):
// Solo revisa hasta la raíz cuadrada de numero, porque si un número no tiene divisores menores o iguales a su raíz cuadrada, no tendrá divisores mayores que eso. Esto optimiza el proceso.
// Ejemplo:
// Si numero = 36, su raíz cuadrada es 6. Basta revisar los números del 2 al 6 para comprobar si es primo. Si no es divisible por estos, será primo.
// i++: Incrementa i en 1 en cada iteración para probar el siguiente divisor.
// 2. Comprobar divisibilidad
// javascript
// Copiar código
// if (numero % i === 0) {
// numero % i: Esto calcula el resto de la división de numero entre i.
// Si el resto es 0 (es decir, numero % i === 0), significa que numero es divisible por i, y por lo tanto, no es primo.
// 3. Cambiar esPrimo y detener el ciclo
// javascript
// Copiar código
// esPrimo = false;
// break;
// esPrimo = false: Cambia la variable a false, indicando que el número ya no es primo.
// break: Sale del ciclo inmediatamente después de encontrar un divisor. Esto evita realizar comprobaciones innecesarias, ahorrando tiempo.
// Ejemplo práctico del ciclo
// Supongamos que el usuario ingresó el número 15.

// Inicio del ciclo:

// i = 2:
// 15 % 2 = 1 (no es divisible).
// No pasa nada, el ciclo sigue con i = 3.
// Segunda iteración:

// i = 3:
// 15 % 3 = 0 (es divisible).
// Cambia esPrimo a false.
// break: El ciclo se detiene porque ya sabemos que no es primo.
// Resultado: 15 NO es un número primo.

// Optimización con Math.sqrt
// ¿Por qué usamos la raíz cuadrada (Math.sqrt)?

// Si un número tiene un divisor mayor que su raíz cuadrada, entonces necesariamente tendrá un divisor menor que esta.

// Ejemplo: Para 36:
// Divisores menores o iguales a 6: 2, 3, 4, 6.
// Divisores mayores que 6: 9, 12, 18, 36.
// Si 36 no fuera divisible por 2, 3, 4 o 6, entonces no sería divisible por ningún número mayor.
// Esto reduce la cantidad de comprobaciones necesarias, haciéndolo mucho más eficiente.

// Resumiendo el for
// El ciclo revisa posibles divisores de numero desde 2 hasta su raíz cuadrada.
// Si encuentra al menos un divisor, el número no es primo y el ciclo se detiene.
// Si no encuentra divisores, el número es primo.

// Ejercicio 21
// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla
// una a una las letras de la palabra introducida empezando por la última.

//IA CHATGPT
// let palabra=prompt("ingrese una palabra");

// for(let i=palabra.length-1; i>=0; i--){
//     document.write(palabra[i] + "<br>");
// }

// palabra.length: Devuelve la longitud de la palabra. Por ejemplo, si el usuario escribe "hola", palabra.length será 4.
// i = palabra.length - 1: Esto inicia el ciclo en la última posición de la palabra.
// En un string, las posiciones empiezan en 0. Por eso, la última letra está en la posición palabra.length - 1.
// Ejemplo para "hola":
// h está en la posición 0.
// o está en la posición 1.
// l está en la posición 2.
// a está en la posición 3 (es decir, 4 - 1).
// i >= 0: El ciclo continuará mientras i sea mayor o igual a 0 (es decir, mientras queden letras por mostrar).
// i--: En cada iteración, el valor de i disminuye en 1 para pasar a la letra anterior.
// 3. Mostrar cada letra
// javascript
// Copiar código
// document.write(palabra[i] + "<br>");
// palabra[i]: Accede a la letra en la posición i de la palabra.
// document.write: Muestra esa letra en la página.
// + "<br>": Añade un salto de línea después de cada letra para que aparezcan una debajo de la otra.

// Ejercicio 22
// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y
// muestre por pantalla el número de veces que aparece la letra en la frase.
//intento #1, ERROR 
// let frase=prompt("ingrese una frase");
// let letra=prompt("ingrese una letra");
// let numLetras=0;

// for(let i=frase.length; i=letra; i++){
//     if(frase=letra)
//         letra=numLetras
//     document.write(numLetras)
// }
//IA CHATGPT
// let frase = prompt("Ingrese una frase:");
// let letra = prompt("Ingrese una letra:");
// let numLetras = 0;

// // Recorrer la frase letra por letra
// for (let i = 0; i < frase.length; i++) {
//     // Comparar la letra actual con la letra buscada
//     if (frase[i] === letra) {
//         numLetras++; // Incrementar el contador si coinciden
//     }
// }
// document.write(`La letra "${letra}" aparece ${numLetras} veces en la frase.`);

// Ejercicio 23
// Escribir un programa que muestre el eco de todo lo que el usuario introduzca
// hasta que el usuario escriba “salir” que terminará.
//codigo malo, intento #1, ERROR
// let eco=parseInt(prompt("introduzca lo que quiera"));
// let salir= "si"
// while(salir==="si"){
     
//      if(pregunta==="si"){
//         document.write(eco);
//      }else{
//         let pregunta=prompt("desea ingresar algo mas? si/no")
//      }
// }
//IA CHATGPT
// let entrada = "";

// while (entrada.toLowerCase() !== "salir") {
//     entrada = prompt("Escribe algo (escribe 'salir' para terminar):");
//     if (entrada.toLowerCase() !== "salir") {
//         document.write(entrada + "<br>");
//     }
// }

// Ejercicios de Listas

// Ejercicio 24
// Escribir un programa que almacene las asignaturas de un curso (por ejemplo
// Matemáticas, Física, Química, Historia y Lengua) en una lista y la muestre por
// pantalla.

// Ejercicio 24
// Lista de asignaturas
// const asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

// // Mostrar las asignaturas por pantalla
// document.write("Asignaturas del curso:");
// asignaturas.forEach(asignatura => {
//     document.write(asignatura + "<br>");
// });
// Ejercicio 25
// Escribir un programa que almacene las asignaturas de un curso (por ejemplo
// Matemáticas, Física, Química, Historia y Lengua) en una lista y la muestre por
// pantalla el mensaje Yo estudio <asignatura>, donde <asignatura> es cada una de
// las asignaturas de la lista.

 const asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

 document.write("Asignaturas del curso:");
 asignaturas.forEach(asignatura => {
    document.write("yo estudio" + " " + asignatura + "<br>");
 });




