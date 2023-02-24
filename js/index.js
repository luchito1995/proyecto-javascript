alert("Bienvenido a la licorería!");


//1) Algoritmo utilizando un condicional
let edad = 18;


if (edad >= 18) {
  console.log("Puedes hacer tu compra.");
} else {
  console.log("Lo siento, no podés hacer tu compra.");
}






//2)Algoritmo utilizando un ciclo.
//Utilicé el mismo tema del 1) es decir, no permito comprar a menores de 18, pero esta vez usando la estructura while para hacer un ciclo
let edadUsuario = parseInt(prompt("Ingrese su edad: "));

while (edadUsuario < 18) {
  alert("Lo siento, debes ser mayor de edad para realizar una compra.");
  edadUsuario = parseInt(prompt("Ingrese su edad: "));
}

alert("Bienvenido, puedes realizar tu compra.");




//3)Simulador interactivo de un carrito de compras
function calcularPrecioTotal() {
  let precioCerveza = 80;
  let precioVino = 100;
  const precioLicor = 200;

  let cantidadCervezas = prompt("¿Cuántas cervezas desea ordenar?");
  let cantidadVinos = prompt("¿Cuántos vinos desea ordenar?");
  let cantidadLicores = prompt("¿Cuántos licores desea ordenar?");

  let totalCervezas = precioCerveza * cantidadCervezas;
  let totalVinos = precioVino * cantidadVinos;
  let totalLicores = precioLicor * cantidadLicores;

  let precioTotal = totalCervezas + totalVinos + totalLicores;

  let mensaje = `Usted ordenó ${cantidadCervezas} cervezas, ${cantidadVinos} vinos y ${cantidadLicores} licores, con un precio total de $${precioTotal}.`;

  alert(mensaje);
}

calcularPrecioTotal ();