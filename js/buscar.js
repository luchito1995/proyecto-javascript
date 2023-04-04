//Listado de los productos que voy a vender, en un array con objetos
const disfraces = [
    {
        id: 1,
        nombre: "Disfraz berenjena",
        categoria: "Alimentos",
        precio: 500,
        imagen: "../imagenes/a1.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Disfraz Kim Jong-un",
        categoria: "Personajes",
        precio: 2000,
        imagen: "../imagenes/a2.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Disfraz Donald Trump",
        categoria: "Personajes",
        precio: 1400,
        imagen: "../imagenes/a3.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Disfraz koala",
        categoria: "Animales",
        precio: 600,
        imagen: "../imagenes/a4.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Disfraz montado a dino",
        categoria: "Animales",
        precio: 800,
        imagen: "../imagenes/a5.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Disfraz jet pack",
        categoria: "Montado",
        precio: 1200,
        imagen: "../imagenes/a6.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Disfraz león",
        categoria: "Animal",
        precio: 1350,
        imagen: "../imagenes/a7.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Disfraz tonto y retonto",
        categoria: "Personajes",
        precio: 2300,
        imagen: "../imagenes/a8.jpg",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Disfraz oktoberfest",
        categoria: "Festividades",
        precio: 1750,
        imagen: "../imagenes/a9.jpg",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Disfraz águila",
        categoria: "Animales",
        precio: 1500,
        imagen: "../imagenes/a10.jpg",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "Disfraz palta",
        categoria: "Comida",
        precio: 900,
        imagen: "../imagenes/a11.jpg",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Disfraz dino esqueleto",
        categoria: "Halloween",
        precio: 2050,
        imagen: "../imagenes/a12.jpg",
        cantidad: 1,
    },
    {
        id: 13,
        nombre: "Disfraz hombre de nieve",
        categoria: "Festividades",
        precio: 1900,
        imagen: "../imagenes/a13.jpg",
        cantidad: 1,
    },
    {
        id: 14,
        nombre: "Disfraz los increíbles",
        categoria: "Personajes",
        precio: 700,
        imagen: "../imagenes/a14.jpg",
        cantidad: 1,
    },
    {
        id: 15,
        nombre: "Disfraz rapto de alien",
        categoria: "Halloween",
        precio: 1000,
        imagen: "../imagenes/a15.jpg",
        cantidad: 1,
    },
];





//Evento para el scroll
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})





//Animación para la frase de frozono
window.onload = function () {
    let elemento1 = document.querySelector('h2.animacion1');
    elemento1.classList.add('translate');

    setTimeout(function(){
        let elemento2 = document.querySelector('h2.animacion2');
        elemento2.classList.add('translate');
    }, 750);

    setTimeout(function(){
        let elemento3 = document.querySelector('h2.animacion3');
        elemento3.classList.add('translate');
    }, 1500);

    setTimeout(function(){
        let elemento4 = document.querySelector('h2.animacion4');
        elemento4.classList.add('translate');
    }, 2250);
};



