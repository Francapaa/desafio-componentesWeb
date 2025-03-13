import { createCards } from "../components/cards.js";
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtén el contenedor donde se insertarán las cards
    const contenedorServicios = document.getElementById('contenedor-de-todas-las-cards');  
    if (contenedorServicios) {
        // Llama a la función createCards y asigna el resultado a cardsElement
        const cardsElement = createCards();

        // Agrega cardsElement al contenedor
        contenedorServicios.appendChild(cardsElement);
    } else {    
        console.error('No se encontró el elemento con id "contenedor-de-todas-las-cards"');
    }
});