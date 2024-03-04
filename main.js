// Ejercicio 1: Mayúsculas y Minúsculas
console.log("Tarea: Convertir toda la cadena a mayúsculas, y luego a minúsculas")
// Texto inicial: "Hola Mundo"
let textoInicial = "hOLa MUnDo";
console.log(`texto inicial: ${textoInicial}`);
console.log(textoInicial.toLowerCase());
console.log(textoInicial.toUpperCase());
console.log(" ");

// Ejercicio 2: Contando Caracteres
// Texto inicial: "JavaScript es asombroso"
console.log("Tarea: Contar cuántas letras 'a' contiene la cadena");
textoInicial = "JavaScript es asombroso";
console.log(`texto inicial: ${textoInicial}`);
let caracter="a";
console.log(textoInicial.split(caracter).length -1);
console.log(" ");


// Ejercicio 3: Extracción de Subcadenas
console.log(`Tarea: Extraer la palabra "JavaScript" de la cadena completa`)
textoInicial= "Desarrollo con JavaScript";
caracter="JavaScript"
console.log(`texto inicial: ${textoInicial}`);
console.log(textoInicial.split(caracter).join(" "));
console.log(" ");



// Ejercicio 4: Comparación de Cadenas
// Texto inicial: "Hola", "hola"
console.log(`Tarea: Determinar si las dos cadenas son iguales, ignorando mayúsculas y minúsculas.`)
let texto1 = "Hola";
let texto2 = "hola";
console.log(`${texto1} es igual que ${texto2}? = ${texto1.toLowerCase() === texto2.toLowerCase()}`)
console.log(" ");



// Ejercicio 5: Concatenación
// Texto inicial: "Hola", "Mundo"
console.log(`Concatenar las dos cadenas para formar "Hola Mundo"`)
texto1 = "Hola";
texto2= "Mundo";
console.log(`texto 1: ${texto1}, texto segundo: ${texto2}`)
console.log(texto1 + " " + texto2);
console.log(" ")


// Ejercicio 6: Eliminación de Espacios
console.log(`Eliminar los espacios en blanco al principio y al final de la cadena.`)
// Texto inicial: 
textoInicial = "    JavaScript    ";
console.log(`texto inicial: ${textoInicial}`);
console.log(textoInicial.split(" ").join(""));
console.log(" ");




// Ejercicio 7: Reemplazo de Palabras
textoInicial = "JavaScript es genial !";
console.log(`texto inicial: ${textoInicial}`);
console.log(`Reemplazar "genial" por "asombroso"`);
const extraccionAlTexto = "genial";
const adicionAlTexto = "asombroso";
console.log(textoInicial.replace(extraccionAlTexto,adicionAlTexto));
console.log(" ");



// .
// Ejercicio 8: Inversión de Cadena
// Texto inicial: "Desarrollo"
console.log(`Invertir el orden de los caracteres de la cadena.`);
textoInicial = "Desarrollo";
console.log(`texto a invertir: ${textoInicial}`);
console.log(`Texto reversado: ${textoInicial.split("").reverse().join("")}`);
console.log(" ");



// Ejercicio 9: División en Array
// Texto inicial: 
console.log(`Dividir la cadena en un array utilizando la coma como separador.`);
textoInicial = "manzana,banana, cereza";
console.log(`texto a dividir: ${textoInicial}`);
console.log(textoInicial.split(","))
console.log(" ");



// Tarea:
// Ejercicio 10: Encuentra la Posición
// Texto inicial: "Aprendiendo JavaScript"
console.log(`Encontrar la posición inicial de la palabra "JavaScript".`)
textoInicial = "Aprendiendo JavaScript";
console.log(`texto a analizar: ${textoInicial}`);
console.log(textoInicial.indexOf("JavaScript"))
console.log(" ");

