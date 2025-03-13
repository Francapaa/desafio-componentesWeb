import { createHeader, createHeaderMobile} from '../components/header.js';
import {footerDeTodo} from '../components/footer.js';
import { createButtonToSend } from '../components/botonDeEnviar.js';

document.addEventListener('DOMContentLoaded', function () {
function main (){
    const header = createHeader();
    const headerMobile = createHeaderMobile();
    const body = document.body;
    const botonDeEnviarEl = createButtonToSend(); 
    const contenedorDeHeaders = document.createElement('div');
    contenedorDeHeaders.className = 'contenedor-de-headers';
    contenedorDeHeaders.appendChild(header);
    contenedorDeHeaders.appendChild(headerMobile);
    console.log(header);
    console.log(headerMobile);  

    body.insertBefore(contenedorDeHeaders, body.firstChild);     
    body.appendChild(botonDeEnviarEl); 
    body.appendChild(footerDeTodo());
    const form = document.getElementById("contact-form");
        form.addEventListener("enviar", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        const email = document.getElementById("email").value; // Captura el email
        const message = document.getElementById("message").value; // Captura el mensaje
        const url = "https://apx.school/api/utils/email-to-student"; // URL a la que envías la solicitud
        fetch(url, {
           method: "POST",
               headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    to: email,
                    message: message
               })
            })
         .then(response => response.json())
    .then(data => console.log(data))
         .catch(error => console.error('Error:', error));
        });
    
}

main ();


}); 