//Variable carrito (que empieza con un array vacío), donde voy a guardar todos los disfraces que el usuario quiera comprar
//Tiene que ser let para poder cambiarlo
//Le pongo el localStorage.getItem para guardar lo que haya agregado al carrito el usuario
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];





//Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const verCarrito = document.getElementById("carrito");
const modal = document.getElementById("modal-container");





//Creo el modal para el carrito, creo cada parte y luego las añado al const modal. Header, button y content
//Para el content tenemos que hacer un forEach así muestro lo que clickea el usuario
const pintarCarrito = () => {
    //Estas 2 líneas sirven para abrir y cerrar el carrito sin problemas
    modal.innerHTML = "";
    modal.style.display = "block";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
    <h1 class="modalHeaderTitle">Carrito</h1>
    `;
    modal.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.className = "modalHeaderButton";
    modalButton.innerText = "x";

    //Evento para que se cierre el modal
    modalButton.addEventListener("click", () => {
        modal.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((disfraz) => {
        let modalContent = document.createElement("div");
        modalContent.className = "modalContent";
        modalContent.innerHTML = `
            <img src="${disfraz.imagen}">
            <h3>${disfraz.nombre}</h3>
            <p>$ ${disfraz.precio}</p>
            <button class="restar"> - </button>
            <p>Cantidad: ${disfraz.cantidad}</p>
            <button class="sumar"> + </button>
            <p>Total: ${disfraz.cantidad * disfraz.precio}</p>
            <button class="borrarProducto"> ❌ </button>
        `;
        modal.append(modalContent);


        let restar = modalContent.querySelector(".restar");
        let sumar = modalContent.querySelector(".sumar");
        let eliminar = modalContent.querySelector(".borrarProducto");
        restar.addEventListener("click", () => {
            if (disfraz.cantidad !== 1) {
                disfraz.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });
        sumar.addEventListener("click", () => {
            disfraz.cantidad++;
            saveLocal();
            pintarCarrito();
        });
        eliminar.addEventListener("click", () => {
            eliminarProducto(disfraz.id);
        })
    });

    //Función para calcular el total del carrito
    //El método reduce lleva 2 parámetros: "acc" que es el acumulador y "el" que es cada elemento de los productos
    //0 es el número con el que arranca el acumulador
    //Esto lo utilizo en la línea 96
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    //Pongo el precio total para el modal
    const precioTotal = document.createElement("div");
    precioTotal.className = "total";
    precioTotal.innerHTML = `
    total a pagar: $ ${total}
    `;
    modal.append(precioTotal);
};





//Cuando clickee en el carrito, va a ocurrir la función "pintarCarrito"
verCarrito.addEventListener("click", pintarCarrito);





//Le doy función al "eliminar" creado en la línea 54
//La palabra element puede ser disfraz o cualquier cosa
const eliminarProducto = (id) => {
    //Lo que el usuario quiere eliminar
    const idEncontrado = carrito.find((element) => element.id === id);

    //El carrito entero, menos el id eliminado 
    carrito = carrito.filter((carritoId) => {
        return carritoId !== idEncontrado;
    });

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



