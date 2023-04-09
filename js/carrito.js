//Variable carrito (que empieza con un array vacío), donde voy a guardar todos los disfraces que el usuario quiera comprar
//Tiene que ser let para poder cambiarlo
//Le pongo el localStorage.getItem para guardar lo que haya agregado al carrito el usuario
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];





//Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const verCarrito = document.getElementById("carrito");
const modal = document.getElementById("modal-id");





//Creo el modal para el carrito, creo cada parte y luego las añado al const modal. Header, button y content
//Para el content tenemos que hacer un forEach así muestro lo que clickea el usuario
const pintarCarrito = () => {
    //Estas 2 líneas sirven para abrir y cerrar el carrito sin problemas
    modal.innerHTML = "";
    modal.style.display = "flex";

    const modalContainer = document.createElement("div");
    modalContainer.className = "modalContainer";
    modal.append(modalContainer);

    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
    <h1 class="modalHeaderTitle">Carrito</h1>
    <img class="modalHeaderImagen" src="https://i.ibb.co/pRWmFgB/carritosuper.png" loading="lazy">
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("button");
    modalButton.className = "modalHeaderButton";
    modalButton.innerText = "❌";

    //Evento para que se cierre el modal y vuelva a aparecer el scroll del body
    modalButton.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    })

    modalHeader.append(modalButton);

    const modalContent = document.createElement("div");
    modalContent.className = "modalContent";
    modalContainer.append(modalContent);

    carrito.forEach((disfraz) => {
        let modalProduct = document.createElement("div");
        modalProduct.className = "modalProduct";
        modalProduct.innerHTML = `
            <div class="modalProductImagen">
                <img src="${disfraz.imagen}">
            </div>
            <p class="modalProductNombre">${disfraz.nombre}</p>
            <p class="modalProductPrecio">$ ${disfraz.precio}</p>
            <div class="modalProductCantidad">
                <button class="modalProductRestar"> - </button>
                <p class="modalProductNumero">${disfraz.cantidad}</p>
                <button class="modalProductSumar"> + </button>
            </div>
            <div class="modalProductTotal">
                <p class="modalProductTotalPalabra">Total: </p>
                <p class="modalProductTotalNumero">$ ${disfraz.cantidad * disfraz.precio}</p>
            </div>
            <button class="modalProductBorrar"> ❌ </button>
        `;
        modalContent.append(modalProduct);


        let restar = modalProduct.querySelector(".modalProductRestar");
        let sumar = modalProduct.querySelector(".modalProductSumar");
        let eliminar = modalProduct.querySelector(".modalProductBorrar");

        restar.addEventListener("click", (event) => {
            if (disfraz.cantidad !== 1) {
                disfraz.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        sumar.addEventListener("click", (event) => {
            disfraz.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        eliminar.addEventListener("click", (event) => {
            eliminarProducto(disfraz.id);
        });


    });

    //Función para calcular el total del carrito
    //El método reduce lleva 2 parámetros: "acc" que es el acumulador y "el" que es cada elemento de los productos
    //0 es el número con el que arranca el acumulador
    //Esto lo utilizo en la línea 110
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    //Pongo el precio total para el modal
    const modalFooter = document.createElement("div");
    modalFooter.className = "modalFooter";
    modalFooter.innerHTML = `
    <button class="vaciarCarrito">
    <p>Vaciar carrito</p>
    </button>
    <div class="modalFooterTotal">
        <p class="modalFooterTotalPalabra">Total a pagar:</p>
        <p class="modalFooterTotalNumero">$ ${total}</p>
    </div>
    <button class="finalizarCompra">
    <p>Finalizar compra</p>
    <p class="compraCompletada">¡Gracias por elegir súper trajes! 😊</p>
    </button>
    `;
    modalContainer.append(modalFooter);

    //Función para que el botón de finalizar compra limpie el storage y aparezca un cartel
    let vaciarCarrito = document.querySelector(".vaciarCarrito")
    let finalizarCompra = document.querySelector(".finalizarCompra");
    let compraCompletada = document.querySelector(".compraCompletada");

    vaciarCarrito.addEventListener('click', () => {
        localStorage.clear();
        eliminarTodosProductos();
    });

    finalizarCompra.addEventListener('click', () => {
        localStorage.clear();
        eliminarTodosProductos();
        compraCompletada.classList.add("cartel");
        setTimeout(() => {
            compraCompletada.classList.remove("cartel");
        }, 4000);
    });
};





//Cuando clickee en el carrito, va a ocurrir la función "pintarCarrito"
//También va a ocurrir que se va a mostrar el modal, y va a desaparecer el scroll del body
//Es decir estoy juntando las 2 cosas en esta función
verCarrito.addEventListener('click', function () {
    pintarCarrito();

    // Mostrar el div del modal
    modal.style.display = 'flex';

    // Ocultar el scrollbar del body
    document.body.style.overflow = 'hidden';
});






//Le doy función al "eliminar" creado en la línea 94
//La palabra element puede ser disfraz o cualquier cosa
const eliminarProducto = (id) => {
    //Lo que el usuario quiere eliminar
    const idEncontrado = carrito.find((element) => element.id === id);

    //El carrito entero, menos el id eliminado 
    carrito = carrito.filter((carritoId) => {
        return carritoId !== idEncontrado;
    });

    // Actualiza la vista del carrito, contador y guarda en local
    carritoContador();
    saveLocal();
    pintarCarrito();
};





//Eliminar todo el carrito
const eliminarTodosProductos = () => {
    // Vacía el carrito completamente
    carrito = [];

    // Actualiza la vista del carrito, contador y guarda en local
    carritoContador();
    saveLocal();
    pintarCarrito();
};





//Estoy modificando el dibujo al lado de "carrito"
//Si no compran nada aparece el carrito1 que es un png de carrito. Si compran aparece el carrito2 que es un contador
//Estoy agregando set item para que cuando se refresque, me siga mostrando el contador con los disfraces clickeados en el local storage
const carritoContador = () => {
    let carrito1 = document.querySelector('.carrito1');
    let carrito2 = document.querySelector('.carrito2');
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    if (carrito.length === 0) {
        carrito1.style.display = "inline-block";
        carrito2.style.display = "none";
    } else {
        carrito1.style.display = "none";
        carrito2.style.display = "inline-block";
        carrito2.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    }
};

//Para que cuando se refresque, me siga mostrando el contador de los disfraces clickeados en el header
carritoContador();





//Clase ".hidden" agregada con Javascript para que no aparezca el fondo del modal cuando refresque la página
//No entendí muy bien este problema, lo resolví con chat gpt
document.addEventListener("DOMContentLoaded", function () {
    modal.classList.add("hidden");
});