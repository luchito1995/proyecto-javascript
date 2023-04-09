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
        imagen: "https://i.ibb.co/zxYh6xM/a4.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Disfraz montado a dino",
        categoria: "Animales",
        precio: 800,
        imagen: "https://i.ibb.co/hDbmJhc/a5.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Disfraz jet pack",
        categoria: "Montado",
        precio: 1200,
        imagen: "https://i.ibb.co/5rwXy3s/a6.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Disfraz león",
        categoria: "Animal",
        precio: 1350,
        imagen: "https://i.ibb.co/fq8jXyF/a7.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Disfraz tonto y retonto",
        categoria: "Personajes",
        precio: 2300,
        imagen: "https://i.ibb.co/JH9y306/a8.jpg",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Disfraz oktoberfest",
        categoria: "Festividades",
        precio: 1750,
        imagen: "https://i.ibb.co/RpLdh0G/a9.jpg",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Disfraz águila",
        categoria: "Animales",
        precio: 1500,
        imagen: "https://i.ibb.co/BrWPMPB/a10.jpg",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "Disfraz palta",
        categoria: "Comida",
        precio: 900,
        imagen: "https://i.ibb.co/pZSNH08/a11.jpg",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Disfraz dino esqueleto",
        categoria: "Halloween",
        precio: 2050,
        imagen: "https://i.ibb.co/51ZSwJz/a12.jpg",
        cantidad: 1,
    },
    {
        id: 13,
        nombre: "Disfraz hombre de nieve",
        categoria: "Festividades",
        precio: 1900,
        imagen: "https://i.ibb.co/XV3cwMW/a13.jpg",
        cantidad: 1,
    },
    {
        id: 14,
        nombre: "Disfraz los increíbles",
        categoria: "Personajes",
        precio: 700,
        imagen: "https://i.ibb.co/wKPRW2y/a14.jpg",
        cantidad: 1,
    },
    {
        id: 15,
        nombre: "Disfraz rapto de alien",
        categoria: "Halloween",
        precio: 1000,
        imagen: "https://i.ibb.co/1rNQsQx/a15.jpg",
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



