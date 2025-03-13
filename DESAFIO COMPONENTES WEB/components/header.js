function createHeader (){

const logoDeHeader = document.createElement ('img');
logoDeHeader.src = './components/descarga.png';
logoDeHeader.className = 'logo-header'; 

const portfolioDeHeader = document.createElement ('a');
portfolioDeHeader.href = 'portfolio.html'; // falta la url   
portfolioDeHeader.textContent = 'Portfolio';
portfolioDeHeader.className = 'portfolio-header';

const serviciosDeHeader = document.createElement ('a');
serviciosDeHeader.href = '#servicios'; // falta la url
serviciosDeHeader.textContent = 'Servicios';
serviciosDeHeader.className = 'servicios-header';

const contactoDeHeader = document.createElement ('a');
contactoDeHeader.href = '#contacto'; // falta la url 
contactoDeHeader.textContent = 'Contacto';
contactoDeHeader.className = 'contacto-header';


const header = document.createElement ('header');  
header.className = 'header-desktop';
header.appendChild(logoDeHeader);
header.appendChild(portfolioDeHeader);
header.appendChild(serviciosDeHeader);
header.appendChild(contactoDeHeader);

return header; 

}


function createHeaderMobile() {
    const logoDeHeaderMobile = document.createElement('img');
    logoDeHeaderMobile.src = './components/descarga.png';
    logoDeHeaderMobile.className = 'logo-header-mobile';

    const menuMobile = document.createElement('nav');
    menuMobile.className = 'menu-mobile';
    menuMobile.style.transform = 'translateX(-100%)'; // Inicialmente fuera de la pantalla

    const ulMobile = document.createElement('ul');
    ulMobile.className = 'menu-mobile-list';

    const menuButton = document.createElement('button');
    menuButton.className = 'menu-hamburguesa';
    menuButton.textContent = '☰';

    const closeButton = document.createElement('button');
    closeButton.className = 'cerrar-menu';
    closeButton.textContent = '×'; // Usando × en lugar de X para un mejor aspecto

    const links = [
        { name: 'Portfolio', url: 'portfolio.html' },
        { name: 'Servicios', url: '#servicios' },
        { name: 'Contacto', url: '#contacto' }
    ];
    
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        li.appendChild(a);
        ulMobile.appendChild(li);
    });

    menuButton.addEventListener('click', () => {
        menuMobile.style.transform = 'translateX(0)';
    });

    closeButton.addEventListener('click', () => {
        menuMobile.style.transform = 'translateX(-100%)';
    });

    const headerMobile = document.createElement('header');
    headerMobile.className = 'header-mobile';
    headerMobile.appendChild(logoDeHeaderMobile);
    headerMobile.appendChild(menuButton);

    menuMobile.appendChild(closeButton);
    menuMobile.appendChild(ulMobile);
    headerMobile.appendChild(menuMobile);

    return headerMobile;
}

export { createHeader, createHeaderMobile };