

document.addEventListener('DOMContentLoaded', function () {

    const btnRegistroNuevoUsuario = document.getElementById('btnRegistroNuevoUsuario');
    const btnInicio = document.getElementById('btnInicio');
    let form = document.querySelector('.registroForm');
    const terminos = document.getElementById('terminos');
    const clickTerminos = document.getElementById('clickMe');
    const alertaMensaje = document.getElementById('mensajeUsuarioAgregado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btnRegistroNuevoUsuario.addEventListener('click', () => {
        let nombreCompleto = document.getElementById('inputNombreCompleto').value.toLowerCase();
        let correoElectronico = document.getElementById('inputMail').value.toLowerCase();
        let nombreUsuario = document.getElementById('inputNuevoUsuario').value;
        let password = document.getElementById('inputPassword').value;
        let aceptarTerminos = document.getElementById('aceptarTerminos');


        const usuarioExistente = veterinaria.chequearUsuario(nombreCompleto, correoElectronico, nombreUsuario)
        const mensaje = document.createElement('p');

        if (usuarioExistente) {
            mensaje.textContent = '* Error: El usuario ya existe o los datos son incorrectos.';
            mensaje.classList.add('pUsuarioError');
            alertaMensaje.innerHTML = '';
            alertaMensaje.appendChild(mensaje);
        } else {

            if (nombreCompleto && correoElectronico && nombreUsuario && password) {

                if (aceptarTerminos.checked) {
                    veterinaria.registrarUsuario(nombreCompleto, correoElectronico, nombreUsuario, password);

                    mensaje.textContent = '* Usuario creado exitosamente.';
                    mensaje.classList.add('pUsuarioOk');
                    alertaMensaje.innerHTML = '';
                    alertaMensaje.appendChild(mensaje);

                } else {

                    mensaje.textContent = '* Debe aceptar los términos y condiciones.';
                    mensaje.classList.add('pClickMe');
                    alertaMensaje.innerHTML = '';
                    alertaMensaje.appendChild(mensaje);

                }
            }
            else {
                const completarCampos = document.createElement('p');
                completarCampos.textContent = '* Debe completar todos los campos requeridos.';
                completarCampos.classList.add('pCompletarCampos');
                clickTerminos.innerHTML = '';
                clickTerminos.appendChild(completarCampos);

            }
        }
    });


    terminosCondiciones.addEventListener('click', () => {
        const mensajeTermCond = document.createElement('p');
        mensajeTermCond.textContent = 'Acepta recibir de vez en cuando nuestros mensajes y materiales de promoción, por correo postal, correo electrónico o cualquier otro formulario de contacto que nos proporcione (incluido su número de teléfono para llamadas o mensajes de texto). Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento.';
        mensajeTermCond.classList.add('pTermCond');
        terminos.innerHTML = '';
        terminos.appendChild(mensajeTermCond);
    });


    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

});