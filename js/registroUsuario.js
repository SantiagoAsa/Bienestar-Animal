

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agregarForm');
    const btnAgregarUsuario = document.getElementById('btnAgregarUsuario');
    const btnMenu = document.getElementById('btnMenu');
    const alertaMensaje = document.getElementById('mensajeUsuarioAgregado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });


    btnAgregarUsuario.addEventListener('click', () => {
        let nombreCompleto = document.getElementById('inputNombreApellido').value.toLowerCase();
        let correoElectronico = document.getElementById('inputRegistroMail').value.toLowerCase();
        let nombreUsuario = document.getElementById('inputRegistroUsuario').value;
        let password = document.getElementById('inputRegistroPassword').value;

        const usuarioExistente = veterinaria.chequearUsuario(nombreCompleto, correoElectronico, nombreUsuario)
        const mensaje = document.createElement('p');
        if (usuarioExistente) {
            mensaje.textContent = '* Error: El usuario ya existe o los datos son incorrectos.';
            mensaje.classList.add('pUsuarioError');
        } else {
            veterinaria.registrarUsuario(nombreCompleto, correoElectronico, nombreUsuario, password);
            mensaje.textContent = '* Usuario agregado exitosamente.';
            mensaje.classList.add('pUsuarioAgregado');
        }
        alertaMensaje.innerHTML = '';
        alertaMensaje.appendChild(mensaje);
    });


    btnMenu.addEventListener('click', () => {
        window.location.href = './menu.html';
    });

});