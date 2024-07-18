document.addEventListener('DOMContentLoaded', function () {

    const btnEnviarContacto = document.getElementById('btnEnviarContacto');
    const btnInicio = document.getElementById('btnInicio');
    const mensajeEnviado = document.getElementById('mensajeContacto');


    btnEnviarContacto.addEventListener('submit', (e) => {
        e.preventDefault();
    });


    btnEnviarContacto.addEventListener('click', () => {

        const textoMensaje = document.getElementById('mensaje').value;
        let veterinaria = new Veterinaria();
        veterinaria.mandarMensaje(textoMensaje);
        const mensajeOk = document.createElement('p');
        mensajeOk.textContent = '* Mensaje enviado exitosamente.';
        mensajeOk.classList.add('pMensajeOk');
        mensajeEnviado.innerHTML = '';
        mensajeEnviado.appendChild(mensajeOk);

    });


    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

});