const formulario = document.querySelector('.formulario-registro');
const modal = document.getElementById('modal-feedback');

// Al enviar el formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Frena el reinicio de la página

    // Captura los datos ingresados e inyecta las respuestas en el cartel directamente
    document.getElementById('nombre-usuario').innerText = document.getElementById('nombre').value;
    document.getElementById('correo-usuario').innerText = document.getElementById('email').value;

    modal.classList.add('mostrar'); // Muestra el cartel
});

// Escucha el clic en la X para cerrar y resetear el formulario
document.getElementById('btn-cerrar-x').addEventListener('click', function() {
    modal.classList.remove('mostrar');
    formulario.reset();
});