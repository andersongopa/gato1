document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('botonX');
    
    function moverBoton() {
        const maxX = window.innerWidth - boton.offsetWidth;
        const maxY = window.innerHeight - boton.offsetHeight;
        
        const nuevoX = Math.floor(Math.random() * maxX);
        const nuevoY = Math.floor(Math.random() * maxY);
        
        boton.style.left = nuevoX + 'px';
        boton.style.top = nuevoY + 'px';
        
        console.log('Botón movido a:', nuevoX, nuevoY);
    }

    boton.addEventListener('click', moverBoton);
    moverBoton();
    
    console.log('Script cargado correctamente');
});