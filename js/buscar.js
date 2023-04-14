//Listado de los productos que voy a vender, en un array con objetos
// const disfraces = [
//     {
//         id: 1,
//         nombre: "Disfraz berenjena",
//         categoria: "Alimentos",
//         precio: 500,
//         imagen: "https://i.ibb.co/6FXLL3G/a1.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 2,
//         nombre: "Disfraz Kim Jong-un",
//         categoria: "Montado",
//         precio: 2000,
//         imagen: "https://i.ibb.co/M8w0B7m/a2.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 3,
//         nombre: "Disfraz Donald Trump",
//         categoria: "Montado",
//         precio: 1400,
//         imagen: "https://i.ibb.co/2sTsLdh/a3.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 4,
//         nombre: "Disfraz koala",
//         categoria: "Animales",
//         precio: 600,
//         imagen: "https://i.ibb.co/zxYh6xM/a4.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 5,
//         nombre: "Disfraz montado a dino",
//         categoria: "Animales",
//         precio: 800,
//         imagen: "https://i.ibb.co/hDbmJhc/a5.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 6,
//         nombre: "Disfraz jet pack",
//         categoria: "Montado",
//         precio: 1200,
//         imagen: "https://i.ibb.co/5rwXy3s/a6.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 7,
//         nombre: "Disfraz león",
//         categoria: "Animal",
//         precio: 1350,
//         imagen: "https://i.ibb.co/fq8jXyF/a7.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 8,
//         nombre: "Disfraz tonto y retonto",
//         categoria: "Personajes",
//         precio: 2300,
//         imagen: "https://i.ibb.co/JH9y306/a8.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 9,
//         nombre: "Disfraz oktoberfest",
//         categoria: "Festividades",
//         precio: 1750,
//         imagen: "https://i.ibb.co/RpLdh0G/a9.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 10,
//         nombre: "Disfraz águila",
//         categoria: "Animales",
//         precio: 1500,
//         imagen: "https://i.ibb.co/BrWPMPB/a10.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 11,
//         nombre: "Disfraz palta",
//         categoria: "Comida",
//         precio: 900,
//         imagen: "https://i.ibb.co/pZSNH08/a11.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 12,
//         nombre: "Disfraz dino esqueleto",
//         categoria: "Halloween",
//         precio: 2050,
//         imagen: "https://i.ibb.co/51ZSwJz/a12.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 13,
//         nombre: "Disfraz hombre de nieve",
//         categoria: "Festividades",
//         precio: 1900,
//         imagen: "https://i.ibb.co/XV3cwMW/a13.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 14,
//         nombre: "Disfraz los increíbles",
//         categoria: "Personajes",
//         precio: 700,
//         imagen: "https://i.ibb.co/wKPRW2y/a14.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 15,
//         nombre: "Disfraz rapto de alien",
//         categoria: "Halloween",
//         precio: 1000,
//         imagen: "https://i.ibb.co/1rNQsQx/a15.jpg",
//         cantidad: 1,
//     },
// ];





//Evento para el scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})





//Animación para la frase de frozono
window.onload = function () {
    let elemento1 = document.querySelector('h2.animacion1');
    elemento1.classList.add('translate');

    setTimeout(function () {
        let elemento2 = document.querySelector('h2.animacion2');
        elemento2.classList.add('translate');
    }, 750);

    setTimeout(function () {
        let elemento3 = document.querySelector('h2.animacion3');
        elemento3.classList.add('translate');
    }, 1500);

    setTimeout(function () {
        let elemento4 = document.querySelector('h2.animacion4');
        elemento4.classList.add('translate');
    }, 2250);
};





//Código para el filtro del buscador:
//Obtener elementos del DOM
const categoriaSelect = document.getElementById('categoria');
const ordenarSelect = document.getElementById('ordenar');
const precioSelect = document.getElementById('precio');
const buscarInput = document.getElementById('buscar');

//Asignar eventos a los elementos del DOM
categoriaSelect.addEventListener('change', filtrarDisfraces);
ordenarSelect.addEventListener('change', filtrarDisfraces);
precioSelect.addEventListener('change', filtrarDisfraces);
buscarInput.addEventListener('input', filtrarDisfraces);

//Función para filtrar disfraces
function filtrarDisfraces() {
    const categoria = categoriaSelect.value;
    const orden = ordenarSelect.value;
    const precio = precioSelect.value;
    const buscar = buscarInput.value.toLowerCase();

    //Filtrar disfraces
    const resultados = disfraces.filter(disfraz => {
        //Filtrar por categoría
        if (categoria !== 'Todo' && disfraz.categoria !== categoria) {
            return false;
        }

        //Filtrar por precio
        let listaOriginal = disfraces.slice(0); // Crear una copia de la lista original


        if (precio === "Todos") {
            return listaFiltrada = listaOriginal;
        } else if (precio === "Menor a mayor") {
            return listaFiltrada = disfraces.sort((a, b) => a.precio - b.precio);
        } else if (precio === "Mayor a menor") {
            return listaFiltrada = disfraces.sort((a, b) => b.precio - a.precio);
        }

        //Filtrar por búsqueda
        if (buscar !== '' && !disfraz.nombre.toLowerCase().includes(buscar)) {
            return false;
        }

        return true;
    });

    //Ordenar resultados
    if (orden === 'A - Z') {
        resultados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === 'Z - A') {
        resultados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    //Mostrar resultados en el HTML
    mostrarResultados(resultados);
}

//Función para mostrar los resultados en el HTML
const tienda = document.getElementById("seccion-productos");

function mostrarResultados(resultados) {
    tienda.innerHTML = '';

    if (resultados.length === 0) {
        tienda.innerHTML = `
        <p class="resultadosNoEncontrados">No se encontraron resultados</p>
        `;
        return;
    }

    //Asegurarse de que resultados sea un array, sino esto me va a traer problemas en el .forEach
    if (!Array.isArray(resultados)) {
        resultados = [resultados]; //Convertir a un array
    }

    resultados.forEach(disfraz => {
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
                <img class="cardFooterImagen" src="https://i.ibb.co/ypzNP3p/carritosuper2.png" alt="">
            </button>
        </div>`;

        //Agregar la nueva cardProducto al contenedor de la tienda
        tienda.append(cardProducto);

        //Función para el botón comprar.
        let botonComprar = cardProducto.querySelector(".botonComprar");

        botonComprar.addEventListener("click", () => {
            agregarAlCarrito(disfraz);
            //Pongo el mensaje del tostify
            Toastify({
                text: "Agregado al carrito",
                duration: 2000,
                close: false,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: '#ffd60a',
                    color: '#000000',
                    fontFamily: 'Carter One, cursive',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '1.1rem',
                    paddingTop: '0.5em',
                    paddingBottom: '0.5em',
                    paddingLeft: '1.5em',
                    paddingRight: '1.5em',
                    borderTopRightRadius: '1em',
                    borderBottomLeftRadius: '1em'
                },
                onClick: function () { }
            }).showToast();
        });
    });
}





//Fetch
const url = "../js/data.json";
let disfraces = [];

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    console.log(data);
    mostrarResultados(data);
})
.catch((error) => {
    console.error("Error al obtener datos JSON:", error);
});





//Mostrar los disfraces filtrados
filtrarDisfraces();