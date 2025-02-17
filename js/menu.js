

document.addEventListener('DOMContentLoaded', function () {

    const btnVerUsuarios = document.getElementById('btnVerUsuarios');
    const containerVerUsuarios = document.getElementById('containerVerUsuarios');
    const btnBuscarUsuario = document.getElementById('btnBuscarUsuario');
    const btnCalculadorAlimento = document.getElementById('btnCalculadorAlimento');
    const btnRegistrarUsuario = document.getElementById('btnRegistrarUsuario');
    const btnVerMascotas = document.getElementById('btnVerMascotas');
    const containerVerMascotas = document.getElementById('containerVerMascotas')
    const btnBuscarMascota = document.getElementById('btnBuscarMascota');
    const btnRegistrarMascota = document.getElementById('btnRegistrarMascota');
    const btnSalir = document.getElementById('btnSalir');
    const form = document.getElementById('formBuscarUsuario');
    const buscarUser = document.getElementById('containerBuscarUsuario');
    const buscarMascota = document.getElementById('containerBuscarMascota');
    const formMascota = document.getElementById('formBuscarMascota');
    const name = document.getElementById('name');
    const resultadosUsuarios = document.getElementById('resultadosUsuarios');
    let usuariosRegistrados = [];
    const nameMascota = document.getElementById('nameMascota');
    const resultadosMascotas = document.getElementById('resultadosMascotas');
    let mascotasRegistradas = [];



    // ~~~ MENSAJE BIENVENIDA ~~~ //
    const welcomeMessage = document.getElementById('userData');
    if (welcomeMessage) {
        const usuarioEnMenu = JSON.parse(localStorage.getItem('usuarioLogueado'));
        if (usuarioEnMenu) {
            welcomeMessage.textContent = `Bienvenid@, ${usuarioEnMenu.nombreCompleto}.`;
        } else {
            window.location.href = 'login.html';
        }
    }


    // ~~~ VER USUARIOS REGISTRADOS ~~~ //
    btnVerUsuarios.addEventListener('click', () => {
        if (btnVerUsuarios.className === 'btnVerUsuariosOculto') {
            let templateMostrarUsuarios = document.getElementById('templateVerUsuarios').content.cloneNode(true);
            templateMostrarUsuarios.querySelector('.pVerUsuarios').innerText = `${veterinaria.listaDeUsuarios()}`;
            containerVerUsuarios.append(templateMostrarUsuarios);
            btnVerUsuarios.className = 'btnVerUsuarios';
        } else {
            containerVerUsuarios.innerHTML = '';
            btnVerUsuarios.className = 'btnVerUsuariosOculto';
        }
    });


    // ~~~ BUSCAR USUARIO REGISTRADO ~~~ //
    btnBuscarUsuario.addEventListener('click', () => {
        buscarUser.classList.toggle('hidden');
    });

    fetch('../data/usuarios.json')
        .then(response => response.json())
        .then(data => {
            usuariosRegistrados = data.usuarios_registrados;
        })
        .catch(error => console.error('Error fetching usuarios:', error));

    name.addEventListener('input', () => {
        const ingreso = name.value.toLowerCase();
        resultadosUsuarios.innerHTML = '';
        if (ingreso.length > 0) {
            const usuariosFiltradas = usuariosRegistrados.filter(usuarios => usuarios.toLowerCase().startsWith(ingreso));
            usuariosFiltradas.forEach(usuarios => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.textContent = usuarios;
                div.addEventListener('click', () => {
                    name.value = usuarios;
                    resultadosUsuarios.innerHTML = '';
                });
                resultadosUsuarios.appendChild(div);
            });
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let buscarPersona = document.getElementById('name').value.toLowerCase();
        let usuarioEncontrado = veterinaria.buscarUsuario(buscarPersona);
        if (usuarioEncontrado) {
            let templateBuscarUsuario = document.getElementById('templateVerUsuario').content.cloneNode(true);
            templateBuscarUsuario.querySelector('.pBuscarUsuario').innerText = veterinaria.usuarioParaMostrar;
            document.getElementById('resultadoUsuario').appendChild(templateBuscarUsuario);
        } else {
            let templateBuscarUsuario = document.getElementById('templateVerUsuario').content.cloneNode(true);
            templateBuscarUsuario.querySelector('.pBuscarUsuario').innerText = veterinaria.usuarioParaMostrar;
            document.getElementById('resultadoUsuario').appendChild(templateBuscarUsuario);
        }
    });


    // ~~~ REGISTRAR USUARIO ~~~ //
    btnRegistrarUsuario.addEventListener('click', () => {
        window.location.href = './registroUsuario.html';
    });


    // ~~~ VER MASCOTAS REGISTRADAS ~~~ //
    btnVerMascotas.addEventListener('click', () => {
        if (btnVerMascotas.className === 'btnVerMascotasOculto') {
            let templateMostrarMascotas = document.getElementById('templateVerMascotas').content.cloneNode(true);
            templateMostrarMascotas.querySelector('.pVerMascotas').innerText = `${veterinaria.listaDeMascotas()}`;
            containerVerMascotas.append(templateMostrarMascotas);
            btnVerMascotas.className = 'btnVerMascotas';
        } else {
            containerVerMascotas.innerHTML = '';
            btnVerMascotas.className = 'btnVerMascotasOculto';
        }
    });


    // ~~~ BUSCAR MASCOTA ~~~ //
    btnBuscarMascota.addEventListener('click', () => {
        buscarMascota.classList.toggle('oculto');
    });

    fetch('../data/mascotas.json')
        .then(response => response.json())
        .then(data => {
            mascotasRegistradas = data.mascotas_registradas;
        })
        .catch(error => console.error('Error fetching mascotas:', error));

    nameMascota.addEventListener('input', () => {
        const ingreso = nameMascota.value.toLowerCase();
        resultadosMascotas.innerHTML = '';
        if (ingreso.length > 0) {
            const mascotasFiltradas = mascotasRegistradas.filter(mascotas => mascotas.toLowerCase().startsWith(ingreso));
            mascotasFiltradas.forEach(mascotas => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.textContent = mascotas;
                div.addEventListener('click', () => {
                    nameMascota.value = mascotas;
                    resultadosMascotas.innerHTML = '';
                });
                resultadosMascotas.appendChild(div);
            });
        }
    });
    

    formMascota.addEventListener('submit', (e) => {
        e.preventDefault();
        let buscarNombre = document.getElementById('nameMascota').value.toLowerCase();
        let buscarEspecie = document.getElementById('especieMascota').value.toLowerCase();
        let mascotaEncontrada = veterinaria.buscarMascota(buscarNombre, buscarEspecie);
        if (mascotaEncontrada) {
            let templateBuscarMascota = document.getElementById('templateBuscarMascota').content.cloneNode(true);
            templateBuscarMascota.querySelector('.pBuscarMascota').innerText += mascotaEncontrada.mostrarDatos() + '\n-------------------------------------\n';

            document.getElementById('resultadoMascota').appendChild(templateBuscarMascota);
        } else {
            let templateBuscarMascota = document.getElementById('templateBuscarMascota').content.cloneNode(true);
            templateBuscarMascota.querySelector('.pBuscarMascota').innerText = '* Mascota no encontrada\n-------------------------------------\n';

            document.getElementById('resultadoMascota').appendChild(templateBuscarMascota);
        }
    });


    // ~~~ CALCULADOR ALIMENTO ~~~
    btnCalculadorAlimento.addEventListener('click', () => {
        window.location.href = './calculador.html';
    });


    // ~~~ REGISTRAR MASCOTA ~~~ //
    btnRegistrarMascota.addEventListener('click', () => {
        window.location.href = './registroMascota.html';
    });


    // ~~~ SALIR ~~~ //
    btnSalir.addEventListener('click', () => {

        // ~~~ SWEET ALERT ~~~ //
        Swal.fire({
            title: 'Desea abandonar el sistema?',
            text: 'Si lo hace, deberá loguearse nuevamente.',
            icon: 'question',
            iconColor: '#09b9ff',
            confirmButtonColor: '#aaa',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonColor: '#aaa',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html';
            }

        });
    });


});

