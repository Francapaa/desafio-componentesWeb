function footerDeTodo (){           // Esta funcion no necesita ser dividia en desktop/mobile porque solo cambia 
                                    // el estilo, lo demas es totalmente igual 

const footerDesktop = document.createElement('footer');
footerDesktop.className = 'footer-desktop';

const logoDeFooterDesktop = document.createElement ('img');
logoDeFooterDesktop.src = './components/descarga.png';
logoDeFooterDesktop.className = 'footer__logo-desktop'; 

const ulMobile = document.createElement('ul'); // Declaración de ulMobile
ulMobile.className = 'footer__menu-mobile'; 

const links = [
    { name: 'Portfolio', url: 'portfolio.html' },
    { name: 'Servicios', url: '#servicios' },
    { name: 'Contacto', url: '#contacto' }
];
links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    // Usar la URL del objeto
    a.href = link.url; // Enlaces a las páginas
    a.className = `enlaces-paginas__${link.name}`
    a.textContent = link.name; // Texto del enlace  
    
    li.appendChild(a);
    ulMobile.appendChild(li);
});

const derechosDeAutorFooterDesktop = document.createElement ('p');
derechosDeAutorFooterDesktop.textContent = '© 2025 Todos los derechos reservados';
derechosDeAutorFooterDesktop.className = 'footer__derechos-de-autor-desktop';


const linksDeFooter = [
{ name: 'Instagram', url: 'https://www.instagram.com/francapaaaa/', img: './components/instagram.png'},
{ name: 'Linkedin', url: 'https://www.linkedin.com/in/francisco-caparruva-6711a82a2/', img: './components/linkedin.png'},
{ name: 'GitHub', url: 'https://github.com/Francapaa', img: './components/github.png'}
]; 

linksDeFooter.forEach(linkDeFooter => {

const button = document.createElement('button');
const img = document.createElement('img');

button.name = linkDeFooter.name;
button.onclick = () => window.open(linkDeFooter.url, '_blank');
img.src = linkDeFooter.img;
img.className = `social-network__${linkDeFooter.name}`
img.alt = linkDeFooter.name;
footerDesktop.appendChild(ulMobile);
button.appendChild(img);

footerDesktop.appendChild(button);

footerDesktop.appendChild(logoDeFooterDesktop);
footerDesktop.appendChild(derechosDeAutorFooterDesktop);

document.body.appendChild(footerDesktop);
});

}

export {footerDeTodo};