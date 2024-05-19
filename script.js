 
/** Listener para mostrar uma mensagem de enviado ao enviar o formulario **/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('FormContato');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const message = document.getElementById('FormContato');
           
                message.textContent = 'Enviaaaado :)';
                message.classList.remove('hidden');
             
            form.reset();
        });
    
});
