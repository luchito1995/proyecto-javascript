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

//1)Listado de los productos que voy a vender en un array con objetos
const disfraces = [
    {
        id: 1,
        nombre: "Disfraz de berenjena",
        categoria: "Alimentos",
        precio: 500,
        imagen: "../imagenes/a1.jpg"
    },
    {
        id: 2,
        nombre: "Disfraz de dictador norcoreano",
        categoria: "Personajes",
        precio: 2000,
        imagen: "../imagenes/a2.jpg"
    },
    {
        id: 3,
        nombre: "Disfraz de politico estadounidense",
        categoria: "Personajes",
        precio: 1400,
        imagen: "../imagenes/a3.jpg"
    },
    {
        id: 4,
        nombre: "Disfraz de koala",
        categoria: "Animales",
        precio: 600,
        imagen: "../imagenes/a4.jpg"
    },
    {
        id: 5,
        nombre: "Disfraz montado a dinosaurio",
        categoria: "Animales",
        precio: 800,
        imagen: "../imagenes/a5.jpg"
    },
    {
        id: 6,
        nombre: "Disfraz jet pack",
        categoria: "Montado",
        precio: 1200,
        imagen: "../imagenes/a6.jpg"
    },
    {
        id: 7,
        nombre: "Disfraz león",
        categoria: "Animal",
        precio: 1350,
        imagen: "../imagenes/a7.jpg"
    },
    {
        id: 8,
        nombre: "Disfraz tonto y retonto",
        categoria: "Personajes",
        precio: 2300,
        imagen: "../imagenes/a8.jpg"
    },
    {
        id: 9,
        nombre: "Disfraz oktoberfest",
        categoria: "Celebraciones",
        precio: 1750,
        imagen: "../imagenes/a9.jpg"
    }
];

//2)Variable carrito (que empieza con un array vacío), donde voy a guardar todos los disfraces que el usuario quiera comprar
const carrito = [];

//3) Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const seccionProductos = document.querySelector("#seccionProductos");
const verCarrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");


//4) ForEach que voy a usar para agregar contenido al HTML. En este caso voy a agregar las cards a "buscar.html"
const mostrarDisfraces = (disfraces => {
    disfraces.forEach((disfraz) => {
        const cardProducto = document.createElement("div");
        cardProducto.className = "card";
        cardProducto.innerHTML = `
                <div class="cardImagen">
                    <img src="${disfraz.imagen}" alt="">
                </div>
    
                <div class="cardFooter">
                    <div class="verDetalles">
                        <img class="cardFooterImagen" src="../imagenes/detalles.png" alt="">
                    </div>
                    <div class="precio">$ ${disfraz.precio}</div>
                    <div id="${disfraz.id}" class="btn-comprar">
                        <img class="cardFooterImagen" src="../imagenes/carritosuper2.png" alt="">
                    </div>
                </div>
        `;
        //A la sección de productos vamos a añadirle las cards
        seccionProductos.append(cardProducto)
    })
    const btnComprar = document.querySelectorAll(".btn-comprar");
    btnComprar.forEach(el => {
        el.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.id)
        });
    })
})

mostrarDisfraces(disfraces);

//5) Función para agregar al carrito y parseo al id
function agregarAlCarrito(id) {
    let disfrazEncontrado = disfraces.find(disfraz => disfraz.id === parseInt(id));
    carrito.push(disfrazEncontrado)
    console.log(carrito);
}

//6) Evento para clickear en el carrito y que ocurra algo. Crear modal para el carrito
verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;

    //Al container del modal vamos a agregarle el header
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    //Al header del modal vamos a agregarle el botón
    modalHeader.append(modalbutton);

    //Tenemos que recorrer el carrito con un forEach
    carrito.forEach((disfraz) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${disfraz.imagen}">
        <h3>${disfraz.nombre}</h3>
        <p>$ ${disfraz.precio}</p>
        `;

        //Al container del modal, al espacio del modal, le agregamos el contenido del carrito
        modalContainer.append(carritoContent);
    });

    //Utilizar el método reduce para calcular el total del carrito
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    //Creo el footer de ese total del carrito
    const totalComprar = document.createElement("div")
    totalComprar.className = "total-content"
    totalComprar.innerHTML = `
    total a pagar: $ ${total}
    `;

    //Al container del modal, le agregamos el footer del carrito con el precio total
    modalContainer.append(totalComprar);
});

//7) Almacenar el carrito de compras actualizado en el local storage
// localStorage.setItem('carrito', JSON.stringify(carrito));

//ME FALTA AGREGARLE CSS AL CARRITO. LA PÁGINA "BUSCAR.HTML" ES LA QUE FUNCIONA, EL CARRITO APARECE ABAJO DE TODO CUANDO CLICKEAMOS EN CARRITO