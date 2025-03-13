import { createCardOfProjects } from "../components/cardOfProjects.js";
import { createHeaderMobile } from "../components/header.js";
import { createHeader } from "../components/header.js";
import { footerDeTodo} from "../components/footer.js";

document.addEventListener('DOMContentLoaded', function (){
    const body = document.body;
        
    function main (){

        const isHomePage = window.location.pathname === '/' || 
        window.location.pathname === '/home.html' || 
        window.location.pathname.endsWith('/home.html');

        const linkDeServicios = document.querySelectorAll('.servicios-header'); 
        const linkDeContacto = document.querySelectorAll('.contacto-header'); 

        if (!isHomePage) {
            const baseUrl = window.location.origin + '/home.html';
            for (let link of linkDeServicios) {
                link.href = `${baseUrl}#servicios`; 
            }
            for (let link of linkDeContacto) {
                link.href = `${baseUrl}#contacto`;
            }
        }
    // Create header container if it doesn't exist
    let contenedorDeHeader = document.getElementById('contenedor-header');
    if (!contenedorDeHeader) { 
        contenedorDeHeader = document.createElement('div');
        contenedorDeHeader.id = 'contenedor-header';
    }
    
    // Create and append components
    const headerDesktop = createHeader();
    const headerMobile = createHeaderMobile(); 
    const cartasConProyecto = createCardOfProjects();
    
    // Clear and rebuild the DOM in the correct order
    contenedorDeHeader.innerHTML = '';
    contenedorDeHeader.appendChild(headerDesktop); 
    contenedorDeHeader.appendChild(headerMobile);
    
    // Insert header at the beginning
    if (body.firstChild) {
        body.insertBefore(contenedorDeHeader, body.firstChild);
    } else {
        body.appendChild(contenedorDeHeader);
    }
    
    // Add cards in the middle
    body.appendChild(cartasConProyecto);
    
    // Ensure footer is last
    body.appendChild(footerDeTodo());
    
    console.log('DOM structure rebuilt in correct order');
}
    
    main (); 
});
