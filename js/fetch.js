// 1)
//Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const tienda = document.getElementById("seccion-productos");





// 2)
//Fetch hacia un json que uso para agregarle las cards a buscar.html mediante una ruta relativa
fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);

        data.map((item) => {

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
            </div>
            `;
            //A la sección de tienda vamos a añadirle las cards
            tienda.append(cardProducto);

            //Función para el botón comprar.
            //La función agregarAlCarrito es el punto 4) del carrito.js
            let botonComprar = cardProducto.querySelector(".botonComprar");
            let cartelAgregado = cardProducto.querySelector(".cartelAgregado");

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

        })
    })