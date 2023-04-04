//Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const tienda = document.getElementById("seccion-productos");





//Sin esta función, cuando clickee en "comprar" me van a aparecer TODOS los productos en carrito
//Con esto le estoy avisando qué es lo que debe subir al carrito
//Esto me va a servir para llamar a esta función más abajo
//Llamo a esta función en la línea 66
function agregarAlCarrito(disfraz) {
    //"some" sirve para ver si el usuario compra 2 o más veces el mismo producto
    //Es un valor booleando. Devuelve false para comprar 1 sola vez, true para más veces
    const repetir = carrito.some((repetirProducto) => repetirProducto.id === disfraz.id);

    //Si el producto se repite, se suma 1 en cantidad. Sino se pushea el producto entero
    if (repetir === true) {
        carrito.map((disfrazEnCarrito) => {
            if (disfrazEnCarrito.id === disfraz.id) {
                disfrazEnCarrito.cantidad++;
            }
        })
    } else {
        carrito.push({
            id: disfraz.id,
            nombre: disfraz.nombre,
            categoria: disfraz.categoria,
            precio: disfraz.precio,
            imagen: disfraz.imagen,
            cantidad: 1,
        });
    };
    console.log(carrito);
    console.log(carrito.length);
    //Este aparece en carrito.js
    carritoContador();
    saveLocal();
};





//Función flecha forEach que voy a usar para agregar contenido al HTML. En este caso voy a agregar las cards a los html
disfraces.forEach((disfraz) => {
    const cardProducto = document.createElement("div");
    cardProducto.className = "card";
    cardProducto.innerHTML = `
        <div class="cardImagen">
            <div class="capa">
                <h2>${disfraz.nombre}</h2>
            </div>
            <img src="${disfraz.imagen}" alt="">
        </div>

        <div class="cardFooter">
            <button class="verDetalles">
                <img class="cardFooterImagen" src="https://i.ibb.co/HqFNb69/detalles.png" alt="">
            </button>
            <div class="precio">$ ${disfraz.precio}</div>
            <button id="${disfraz.id}" class="botonComprar">
                <p class="cartelAgregado">Agregado al carrito</p>
                <img class="cardFooterImagen" src="https://i.ibb.co/ypzNP3p/carritosuper2.png" alt="">
            </button>
        </div>
        `;
    //A la sección de tienda vamos a añadirle las cards
    tienda.append(cardProducto);

    //Función para el botón comprar.
    let botonComprar = cardProducto.querySelector(".botonComprar");
    let cartelAgregado = cardProducto.querySelector(".cartelAgregado");
    
    botonComprar.addEventListener("click", () => {
        agregarAlCarrito(disfraz);
        cartelAgregado.classList.add("mostrarCartel");
        setTimeout(() => {
            cartelAgregado.classList.remove("mostrarCartel");
        }, 4000);
    });
});





//Storage: set item
//Con esto guardo el carrito en el almacenamiento local. Sólo falta ponerlo en el push, línea 35
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Storage: get item
//Esto sirve para guardar los datos incluso si cerrás la página o apagás la computadora
//Tengo que escribir esta frase en let carrito:
// JSON.parse(localStorage.getItem("carrito"));