

document.addEventListener('DOMContentLoaded', function () {

    const btnMenu = document.getElementById('btnMenu');
    const mascotaForm = document.getElementById('mascotaForm');
    const btnSubmitMascota = document.getElementById('btnSubmitMascota');
    const alertaEdad = document.getElementById('edadMascota');
    const alertaPeso = document.getElementById('pesoMascota');
    const alertaRegistro = document.getElementById('mascotaRegistrada');
    const inputRaza = document.getElementById('inputRaza');
    const resultados = document.getElementById('resultados');
    let razasMascotas = [];


    fetch('../data/razas.json')
        .then(response => response.json())
        .then(data => {
            razasMascotas = data.razas_mascotas;
        })
        .catch(error => console.error('Error fetching razas:', error));

    inputRaza.addEventListener('input', () => {
        const ingreso = inputRaza.value.toLowerCase();
        resultados.innerHTML = '';
        if (ingreso.length > 0) {
            const razasFiltradas = razasMascotas.filter(razas => razas.toLowerCase().startsWith(ingreso));
            razasFiltradas.forEach(razas => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.textContent = razas;
                div.addEventListener('click', () => {
                    inputRaza.value = razas;
                    resultados.innerHTML = '';
                });
                resultados.appendChild(div);
            });
        }
    });


    mascotaForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });


    btnSubmitMascota.addEventListener('click', () => {
        let nombreUsuario = document.getElementById('inputNombreTutor').value.toLowerCase();
        let especie = document.getElementById('inputEspecie').value;
        let raza = document.getElementById('inputRaza').value.toLowerCase();
        let sexo = document.getElementById('inputSexo').value;
        let nombre = document.getElementById('inputNombreMascota').value.toLowerCase();

        let edad = Number(document.getElementById('inputEdad').value);
        if (edad <= 0) {
            const mensajeEdad = document.createElement('p');
            mensajeEdad.textContent = '* Dato inválido.';
            mensajeEdad.classList.add('pMensajeEdad');
            alertaEdad.innerHTML = '';
            alertaEdad.appendChild(mensajeEdad);
        } else {
            alertaEdad.innerHTML = '';
        }

        let peso = Number(document.getElementById('inputPeso').value);
        if (peso <= 0) {
            const mensajePeso = document.createElement('p');
            mensajePeso.textContent = '* Dato inválido.';
            mensajePeso.classList.add('pMensajePeso');
            alertaPeso.innerHTML = '';
            alertaPeso.appendChild(mensajePeso);
        } else {
            alertaEdad.innerHTML = '';
        }

        if (veterinaria.buscarUsuario(nombreUsuario) == true) {
            const usuarioEncontrado = veterinaria.devolverUsuarioPorNombreCompleto(nombreUsuario)
            usuarioEncontrado.registrarMascota(especie, raza, sexo, nombre, edad, peso)
            const mensajeRegistro = document.createElement('p');
            mensajeRegistro.textContent = '* Mascota registrada exitosamente.';
            mensajeRegistro.classList.add('pMensajeRegistro');
            alertaRegistro.innerHTML = '';
            alertaRegistro.appendChild(mensajeRegistro);
        } else {
            const mensajeRegistro = document.createElement('p');
            mensajeRegistro.textContent = '* El tutor no se encuentra en el sistema. Primero debe agregar un nuevo usuario y luego registrar una mascota a su nombre.';
            mensajeRegistro.classList.add('pMensajeRegistroNoExitoso');
            alertaRegistro.innerHTML = '';
            alertaRegistro.appendChild(mensajeRegistro);
        }

    });


    btnMenu.addEventListener('click', () => {
        window.location.href = './menu.html';
    });

});