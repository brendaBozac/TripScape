// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.parentElement.querySelector('.article-text');
            const minimizeBtn = this.parentElement.querySelector('.minimize-btn');
            
            // Alternar la clase que expande o contrae el contenido
            content.classList.toggle('expanded');

            // Cambiar el texto del botón
            if (content.classList.contains('expanded')) {
                this.textContent = "Minimize Article";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});