// // ENTREGA N°1
// alert("¡Bienvenido a la licorería!");


// // 1) Algoritmo utilizando un condicional
// let edad = 18;


// if (edad >= 18) {
//   console.log("Puedes hacer tu compra.");
// } else {
//   console.log("Lo siento, no podés hacer tu compra.");
// }


// // 2)Algoritmo utilizando un ciclo.
// // Utilicé el mismo tema del 1) es decir, no permito comprar a menores de 18, pero esta vez usando la estructura while para hacer un ciclo
// let edadUsuario = parseInt(prompt("Ingrese su edad: "));

// while (edadUsuario < 18) {
//   alert("Lo siento, debes ser mayor de edad para realizar una compra.");
//   edadUsuario = parseInt(prompt("Ingrese su edad: "));
// }

// alert("Bienvenido, puedes realizar tu compra.");


// //3)Simulador interactivo de un carrito de compras
// function calcularPrecioTotal() {
//   let precioCerveza = 80;
//   let precioVino = 100;
//   const precioLicor = 200;

//   let cantidadCervezas = prompt("¿Cuántas cervezas desea ordenar?");
//   let cantidadVinos = prompt("¿Cuántos vinos desea ordenar?");
//   let cantidadLicores = prompt("¿Cuántos licores desea ordenar?");

//   let totalCervezas = precioCerveza * cantidadCervezas;
//   let totalVinos = precioVino * cantidadVinos;
//   let totalLicores = precioLicor * cantidadLicores;

//   let precioTotal = totalCervezas + totalVinos + totalLicores;

//   let mensaje = `Usted ordenó ${cantidadCervezas} cervezas, ${cantidadVinos} vinos y ${cantidadLicores} licores, con un precio total de $${precioTotal}.`;

//   alert(mensaje);
// }

// calcularPrecioTotal ();





// //ENTREGA N°2
// alert("Frozono:\n\n¿DÓNDE...\nESTÁ...\nMÍ...\nSÚPER TRAJE?");
// alert("¡Bienvenido a súper trajes! :) La mejor tienda de disfraces del mundo");
// let nombreUsuario = prompt("Queremos conocer a nuestros clientes, ¿cuál es tu nombre?");


// // Verificar si el nombre ingresado tiene una sola palabra
// while (nombreUsuario.trim().split(' ').length !== 1 || nombreUsuario.trim().length === 0) {
//   if (nombreUsuario.trim().length === 0) {
//     alert("Lo siento, debes ingresar un nombre.");
//   } else {
//     alert("Lo siento, sólo se permiten nombres de una sola palabra.");
//   }
//   nombreUsuario = prompt("Por favor, ingresa tu nombre en una sola palabra:");
// }


// //1) Objeto con el método constructor:
// class disfraz {

//   constructor(nombre, categoria, precio, id, cantidadDisponible) {
//     this.nombre = nombre;
//     this.categoria = categoria;
//     this.precio = parseInt(precio);
//     this.id = parseInt(id);
//     this.cantidadDisponible = parseInt(cantidadDisponible);
//   }
// }


// //2)Un array de objetos principal, y luego otro array con 2 objetos que voy a sumar al array inicial
// const disfraces = [

//   new disfraz("Spiderman", "Super heroes", 1500, 1, 5),
//   new disfraz("Leon", "Animales", 800, 2, 12),
//   new disfraz("Banana", "Comida", 1200, 3, 10),
//   new disfraz("Medico", "Profesiones", 600, 4, 8)

// ];

// const nuevosDisfraces = [

//   new disfraz("Batman", "Super heroes", 2000, 5, 14),
//   new disfraz("Toronja", "Alimentos", 900, 6, 4)

// ];


// //3)Función de orden superior, con el método for Each. Haciendo esto agrego el disfraz de Batman y Toronja al array original
// nuevosDisfraces.forEach(disfraz => disfraces.push(disfraz));
// console.log(disfraces);


// //4)Prompt pidiéndole al usuario un dato:
// //El array.slice sirve para copiar el array original y guardarlo, ya que el método sort es un método destructivo
// let criterio;

// while (true) {
//   criterio = prompt("¡Hola " + nombreUsuario + "! Te damos la bienvenida a nuestro catálogo. Por favor, elige un criterio con el que deseas ver nuestros productos:\n\n1) A-Z\n2) Z-A\n3) Menor a mayor precio\n4) Mayor a menor precio\n\nUna vez que hayas elegido tu criterio de ordenación, nuestro catálogo se actualizará automáticamente para mostrar los productos de acuerdo a tu elección. ¡Disfruta navegando por nuestra selección!");

//   if (criterio === "1" || criterio === "2" || criterio === "3" || criterio === "4") {
//     break;
//   } else {
//     alert("La opción elegida no es válida. Por favor, selecciona una opción del 1 al 4.");
//   }
// }

// function ordenar(criterio, array) {
//   let arrayOrdenado = array.slice(0);

//   switch (criterio) {
//     case "1":
//       let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
//       return nombreAscendente;
//     case "2":
//       let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
//       return nombreDescendente;
//     case "3":
//       return arrayOrdenado.sort((a, b) => a.precio - b.precio);
//     case "4":
//       return arrayOrdenado.sort((a, b) => b.precio - a.precio);
//   }
// }


// //5) Función necesaria para que el criterio elegido por el usuario funcione.
// function crearStringResultado(array) {
//   let info = "";

//   array.forEach(elemento => {

//     info += "Nombre: " + elemento.nombre + "\nCategoria: " + elemento.categoria + "\nPrecio: " + elemento.precio + "\nId: " + elemento.id + "\nCantidad disponible: " + elemento.cantidadDisponible + "\n\n"

//   }
//   )

//   return info;

// }

// alert(crearStringResultado(ordenar(criterio, disfraces)))





//ENTREGA N°3
//Animación para la página buscar
window.onload = function () {
    let elemento1 = document.querySelector('h2.animacion1');
    elemento1.classList.add('translate');

    let elemento2 = document.querySelector('h2.animacion2');
    elemento2.classList.add('translate');

    let elemento3 = document.querySelector('h2.animacion3');
    elemento3.classList.add('translate');

    let elemento4 = document.querySelector('h2.animacion4');
    elemento4.classList.add('translate');
};