

document.addEventListener('DOMContentLoaded', function () {
    const btnInicio = document.getElementById('btnInicio');


    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const valido = veterinaria.logearUsuario(username, password);
            if (valido) {
                const usuario = veterinaria.devolverUsuarioPorNombre(username);
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
                document.getElementById('usuarioExistente').textContent = '* Login correcto, ingresando al sistema...';

                setTimeout(() => {
                    window.location.href = './menu.html';
                }, 1500);

            } else {
                document.getElementById('usuarioInexistente').textContent = '* Usuario o contraseña incorrectos.';
            }
        });
    }
});

