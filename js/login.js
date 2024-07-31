

document.addEventListener('DOMContentLoaded', function () {
    const btnInicio = document.getElementById('btnInicio');


    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });


    // const loginForm = document.getElementById('loginForm');
    // if (loginForm) {
    //     loginForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         const username = document.getElementById('username').value;
    //         const password = document.getElementById('password').value;
    //         const valido = veterinaria.logearUsuario(username, password);
    //         if (valido) {
    //             const usuario = veterinaria.devolverUsuarioPorNombre(username);
    //             localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
    //             document.getElementById('usuarioExistente').textContent = '* Login correcto, ingresando al sistema...';

    //             setTimeout(() => {
    //                 window.location.href = './menu.html';
    //             }, 1500);

    //         } else {
    //             document.getElementById('usuarioInexistente').textContent = '* Usuario o contraseña incorrectos.';
    //         }
    //     });
    // }



    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Cargar el archivo JSON
        fetch('../data/usuariosCompletos.json')
            .then(response => response.json())
            .then(data => {
                const users = data.datos_usuarios;
                let loginSuccess = false;

                for (let user of users) {
                    if (user.nombreUsuario === username && user.password === password) {
                        loginSuccess = true;
                        break;
                    }
                }

                if (loginSuccess) {
                    const usuarioOnline = veterinaria.devolverUsuarioPorNombre(username);
                    localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioOnline));
                    console.log('Login correcto!'); // Agregado para depuración
                    document.getElementById('message').textContent = "'* Login correcto! ingresando al sistema...'";
                    document.getElementById('message').style.color = "green";
                    setTimeout(() => {
                        window.location.href = './menu.html';
                    }, 1500);

                } else {
                    console.log('Usuario o contraseña incorrectos'); // Agregado para depuración
                    document.getElementById('message').textContent = "* Usuario o contraseña incorrectos.";
                    document.getElementById('message').style.color = "red";
                }
            })
            .catch(error => console.error('Error loading JSON:', error));
    });
});

