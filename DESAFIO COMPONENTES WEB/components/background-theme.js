function createBackgroundTheme() {
    
    const backgroundTheme = document.createElement('img');
    backgroundTheme.src = "./components/image.png";
    backgroundTheme.className = 'background__fondo';

    return backgroundTheme;
}


export {createBackgroundTheme}; 