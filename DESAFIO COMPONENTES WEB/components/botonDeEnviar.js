function createButtonToSend (){
    // Crear el botón
const button = document.createElement('button');
button.textContent = 'Enviar'; 
button.className = 'enviar__boton-de-enviar';

return button; 

}

export {createButtonToSend}; 