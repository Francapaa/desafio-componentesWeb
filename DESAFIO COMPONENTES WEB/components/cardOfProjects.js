export function createCardOfProjects (){

const cartasDelProyecto = [
    {
        img: "./components/instagramCLON.jpg",
        title: "Clon de Instagram",
        description :  "Cree un clon de Instagram, tiene todos los features que tiene la aplicacion default"
    },
    {
        img:"./components/bitcoin.jpeg" ,
        title: "Creacion de Bitcoin",
        description: "Aporte en la creacion de Bitcoin porque es un proyecto Open Source"
    },
    {
        img: "./components/pptONLINE.jpg",
        title: "Juego de Piedra Papel o Tijera",
        description: "Cree una plataforma de juego PPT Online, en la cual hay mas de 10.000 usuarios registrados"
    }
]

const contenedorDeCartasPadre = document.createElement('div'); 
contenedorDeCartasPadre.className = "proyectos__contenedor-padre-de-cartas"; 
cartasDelProyecto.forEach(carta =>{
    
    const contenedorDeCarta = document.createElement('div');
    contenedorDeCarta.className =  `proyectos__carta${carta.title}`;
    const imagenDeCarta = document.createElement ('img');
    const titleDeCarta = document.createElement ('h2');
    const descriptionDeCarta = document.createElement ('p');

    //ASIGNAMOS VALORES A PARTIR DE ACA
    
    imagenDeCarta.src = carta.img; 
    titleDeCarta.textContent = carta.title;
    descriptionDeCarta.textContent = carta.description

    contenedorDeCarta.appendChild(imagenDeCarta);
    contenedorDeCarta.appendChild(titleDeCarta);
    contenedorDeCarta.appendChild(descriptionDeCarta);

    //ASIGNMAOS TODOS LOS CONTENEDORES DE CARTA AL CONTENEDOR DE CARTA PADRE

    contenedorDeCartasPadre.appendChild (contenedorDeCarta);
})

return contenedorDeCartasPadre; 
}