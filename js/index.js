//Listado de los productos que voy a vender, en un array con objetos
const disfraces = [
    {
        id: 1,
        nombre: "Disfraz berenjena",
        categoria: "Alimentos",
        precio: 500,
        imagen: "https://i.ibb.co/6FXLL3G/a1.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Disfraz Kim Jong-un",
        categoria: "Personajes",
        precio: 2000,
        imagen: "https://i.ibb.co/M8w0B7m/a2.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Disfraz Donald Trump",
        categoria: "Personajes",
        precio: 1400,
        imagen: "https://i.ibb.co/2sTsLdh/a3.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Disfraz koala",
        categoria: "Animales",
        precio: 600,
        imagen: "./imagenes/a4.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Disfraz montado a dino",
        categoria: "Animales",
        precio: 800,
        imagen: "./imagenes/a5.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Disfraz jet pack",
        categoria: "Montado",
        precio: 1200,
        imagen: "./imagenes/a6.jpg",
        cantidad: 1,
    },
];





//Enumeración de constantes. (Implementación de DOM para enlazar el archivo html con el js)
const indicadores = document.querySelectorAll('.indicador');





//Evento para el scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})





//Función flecha forEach para los indicadores del carrusel
indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        // Quita la clase "active" de todos los indicadores
        indicadores.forEach(indicador => indicador.classList.remove('activo'));

        // Añade la clase "active" al indicador clickeado
        indicador.classList.add('activo');
    });
});




