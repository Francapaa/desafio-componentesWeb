function createCards(){


const cards = [
    {
        img: "./components/desarrolloWeb.png",
        title: "Desarrollo de paginas web",
        description: "Desarrollo de paginas web con las ultimas tecnologias, responsivas y mobile first con un diseño unico y personalizado.",
    },
    {
        img: "./components/seo.png",
        title: "SEO",
        description: "Posicionamiento en buscadores, optimizacion de paginas web, analisis de palabras clave y competencia.",
    },
    {
        img: "./components/desarrolloDeAppsMoviles.png",
        title: "Desarrollo de aplicaciones moviles",
        description: "Desarrollo de aplicaciones moviles nativas e hibridas, para Android y IOS.",
    }
]

const contenedorDeCardsPadre = document.createElement("div");
contenedorDeCardsPadre.className = "cards__contenedor-padre"

cards.forEach(card => {

    const contenedorDeCard = document.createElement("div");
    const className = `card-${card.title.toLowerCase().replace(/\s+/g, "-")}`;
    contenedorDeCard.className = className; 
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const descripcion = document.createElement("p");

    imagen.src = card.img;
    titulo.textContent = card.title;
    descripcion.textContent = card.description;

    contenedorDeCard.appendChild(imagen);
    contenedorDeCard.appendChild(titulo);
    contenedorDeCard.appendChild(descripcion);
    

    contenedorDeCardsPadre.appendChild(contenedorDeCard); // Agregamos la card al contenedor padre
});

return contenedorDeCardsPadre; 

}

export {createCards}; 