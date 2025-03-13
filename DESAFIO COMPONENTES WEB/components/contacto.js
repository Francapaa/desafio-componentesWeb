function createContactForm() {
    const form = document.createElement('form');
    form.setAttribute('class', 'contact-form');

    // Nombre
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nombre:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'nombre');
    nameInput.setAttribute('required', 'true');

    // Email
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', 'true');

    // Mensaje
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Mensaje:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('name', 'mensaje');
    messageTextarea.setAttribute('rows', '4');
    messageTextarea.setAttribute('required', 'true');

    // Agregar elementos al formulario
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    
    return form;
}

export {createContactForm}; 