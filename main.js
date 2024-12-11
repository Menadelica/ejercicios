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

//  const asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

//  document.write("Asignaturas del curso:");
//  asignaturas.forEach(asignatura => {
//     document.write("yo estudio" + " " + asignatura + "<br>");
//  });

// Ejercicio 26
// Escribir un programa que almacene las asignaturas de un curso (por ejemplo
// Matemáticas, Física, Química, Historia y Lengua) en una lista, pregunte al usuario
// la nota que ha sacado en cada asignatura, y después las muestre por pantalla con
// el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una
// des las asignaturas de la lista y <nota> cada una de las correspondientes notas
// introducidas por el usuario.

// const asignaturas=["matematicas","fisica","quimica","historia","lengua"];

// let matematicas=parseFloat(prompt("cual es tu nota de matematicas"));
// let fisica=parseFloat (prompt("cual es tu nota de fisica"))
// let quimica=parseFloat (prompt("cual es tu nota de quimica"))
// let lengua=parseFloat (prompt("cual es tu nota de lengua"))
// let historia=parseFloat (prompt("cual es tu nota de historia"))

// document.write("la nota de matematicas es:"+matematicas,"<br>"+"la nota de fisica es:"+ fisica,"<br>"+"la nota de quimica es:"+ quimica,"<br>"+"la nota de lengua es:" +lengua,"<br>"+ "la nota de historia es:"+historia + "<br>" )

// Ejercicio 27
// Escribir un programa que pregunte al usuario los números ganadores de la lotería
// primitiva, los almacene en una lista y los muestre por pantalla ordenados de menor
// a mayor.

// const numerosGanadores = prompt("Introduce los 6 números ganadores separados por comas:");

// // Convertir la entrada en un array de números y ordenarlos
// const numerosOrdenados = numerosGanadores.split(",").map(Number).sort((a, b) => a - b);

// // Mostrar los números ordenados en el documento
// document.write("<h2>Números ganadores de la lotería:</h2>");
// document.write("<p>" + numerosOrdenados.join(", ") + "</p>");

// Ejercicio 28
// Escribir un programa que almacene en una lista los números del 1 al 10 y los
// muestre por pantalla en orden inverso separados por comas.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Invertir el orden de los números
// const numerosInvertidos = numeros.reverse();

// // Mostrar los números en orden inverso separados por comas
// document.write("<h2>Números en orden inverso:</h2>");
// document.write("<p>" + numerosInvertidos.join(", ") + "</p>");

// Ejercicio 29
// Escribir un programa que almacene las asignaturas de un curso (por ejemplo
// Matemáticas, Física, Química, Historia y Lengua) en una lista, pregunte al usuario
// la nota que ha sacado en cada asignatura y elimine de la lista las asignaturas
// aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el
// usuario tiene que repetir.

// Ejercicio 29
// Lista de asignaturas
// const asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

// // Preguntar al usuario la nota de cada asignatura
// const asignaturasRepetir = [];

// asignaturas.forEach(asignatura => {
//     const nota = parseFloat(prompt(`¿Qué nota has sacado en ${asignatura}?`));
//     if (nota < 3) {
//         asignaturasRepetir.push(asignatura);
//     }
// });

// // Mostrar las asignaturas que el usuario tiene que repetir
// if (asignaturasRepetir.length > 0) {
//     document.write("<h2>Asignaturas que tienes que repetir:</h2>");
//     document.write("<p>" + asignaturasRepetir.join(", ") + "</p>");
// } else {
//     document.write("<h2>¡Felicidades! No tienes asignaturas que repetir.</h2>");
// }

// Ejercicio 30
// Escribir un programa que almacene el abecedario en una lista, elimine de la lista
// las letras que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista
// resultante.

// const abecedario = "abcdefghijklmnopqrstuvwxyz".split("");

// // Filtrar las letras cuya posición no sea múltiplo de 3
// const resultado = abecedario.filter((_, index) => (index + 1) % 3 !== 0);

// // Mostrar la lista resultante
// document.write("<h2>Abecedario sin letras en posiciones múltiplos de 3:</h2>");
// document.write("<p>" + resultado.join(", ") + "</p>");

// Ejercicio 31
// Escribir un programa que pida al usuario una palabra y muestre por pantalla el
// número de veces que contiene cada vocal.

// const palabra = prompt("Introduce una palabra:").toLowerCase();

// // Inicializar un objeto para contar las vocales
// const conteoVocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// // Contar las vocales en la palabra
// for (const letra of palabra) {
//     if (conteoVocales.hasOwnProperty(letra)) {
//         conteoVocales[letra]++;
//     }
// }

// // Mostrar el resultado
// document.write("<h2>Conteo de vocales:</h2>");
// for (const [vocal, cantidad] of Object.entries(conteoVocales)) {
//     document.write(`<p>${vocal.toUpperCase()}: ${cantidad}</p>`);
// }

// Ejercicio 32
// Escribir un programa que almacene en una lista los siguientes precios, 50, 75, 46,
// 22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios.

// const precios = [50, 75, 46, 22, 80, 65, 8];

// // Encontrar el menor y el mayor precio
// const menorPrecio = Math.min(...precios);
// const mayorPrecio = Math.max(...precios);

// // Mostrar el menor y el mayor precio
// document.write("<h2>Precios:</h2>");
// document.write(`<p>Menor precio: ${menorPrecio}</p>`);
// document.write(`<p>Mayor precio: ${mayorPrecio}</p>`);

// Ejercicio 33
// Escribir un programa que pregunte por una muestra de números, separados por
// comas, los guarde en una lista y muestre por pantalla su media y su suma.
//profundizar en explicacion

// const entrada = prompt("Introduce una muestra de números separados por comas:");

// // Convertir la entrada en una lista de números
// const numeros = entrada.split(",").map(Number);

// // Calcular la suma y la media
// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// const media = suma / numeros.length;

// // Mostrar la suma y la media
// document.write("<h2>Resultados:</h2>");
// document.write(`<p>Suma: ${suma}</p>`);
// document.write(`<p>Media: ${media}</p>`);

// Ejercicio 34
// Escribir programa que pida a dos personas ingresar su nombre, edad y color
// favorito. Y decir cual de los dos es mayor, publicar también la edad, nombre y
// color favorito del menor.

// const nombre1 = prompt("Persona 1: Ingresa tu nombre:");
// const edad1 = parseInt(prompt("Persona 1: Ingresa tu edad:"), 10);
// const color1 = prompt("Persona 1: Ingresa tu color favorito:");

// // Pedir datos de la segunda persona
// const nombre2 = prompt("Persona 2: Ingresa tu nombre:");
// const edad2 = parseInt(prompt("Persona 2: Ingresa tu edad:"), 10);
// const color2 = prompt("Persona 2: Ingresa tu color favorito:");

// // Determinar quién es mayor y quién es menor
// let mayor, menor;

// if (edad1 > edad2) {
//     mayor = { nombre: nombre1, edad: edad1, color: color1 };
//     menor = { nombre: nombre2, edad: edad2, color: color2 };
// } else {
//     mayor = { nombre: nombre2, edad: edad2, color: color2 };
//     menor = { nombre: nombre1, edad: edad1, color: color1 };
// }
// document.write("<h2>Resultados:</h2>");
// document.write(`<p>El mayor es: ${mayor.nombre}, con ${mayor.edad} años.</p>`);
// document.write(`<p>El menor es: ${menor.nombre}, con ${menor.edad} años y su color favorito es ${menor.color}.</p>`);

// Ejercicio 35
// Escribir programa que calcule el promedio de tres notas (enteros entre 0 y 10),
// que muestre el nombre de la persona, su edad, su color favorito y diga si gana o
// pierde. Promedio menor o igual a 7 pierde

// const nombre = prompt("Ingresa tu nombre:");
// const edad = parseInt(prompt("Ingresa tu edad:"), 10);
// const colorFavorito = prompt("Ingresa tu color favorito:");

// // Pedir las tres notas
// const nota1 = parseInt(prompt("Ingresa la primera nota (entre 0 y 10):"), 10);
// const nota2 = parseInt(prompt("Ingresa la segunda nota (entre 0 y 10):"), 10);
// const nota3 = parseInt(prompt("Ingresa la tercera nota (entre 0 y 10):"), 10);

// // Calcular el promedio de las notas
// const promedio = (nota1 + nota2 + nota3) / 3;

// // Determinar si gana o pierde
// const resultado = promedio <= 7 ? "pierde" : "gana";

// document.write("<h2>Resultados:</h2>");
// document.write(`<p>Nombre: ${nombre}</p>`);
// document.write(`<p>Edad: ${edad}</p>`);
// document.write(`<p>Color favorito: ${colorFavorito}</p>`);
// document.write(`<p>Promedio: ${promedio.toFixed(2)}</p>`);
// document.write(`<p>El resultado es: ${resultado}</p>`);























