
document.addEventListener('DOMContentLoaded', function () {

    const btnCalculadora = document.getElementById('botonCalculadora');
    const btnMenu = document.getElementById('btnMenu');
    const alertaEdadCalc = document.getElementById('edadMascotaCalc');
    const alertaPesoCalc = document.getElementById('pesoMascotaCalc');
    const alertaSobrepesoCalc = document.getElementById('pesoIdealMascotaCalc');


    document.getElementById('sobrepesoCalc').addEventListener('change', function () {
        const inputPesoIdeal = document.getElementById('pesoIdeal');
        if (this.value === 'si') {
            inputPesoIdeal.style.display = 'block';
        } else {
            inputPesoIdeal.style.display = 'none';
            inputPesoIdeal.value = '';
        }
    });


    btnCalculadora.addEventListener('click', () => {
        calcularAlimento();
    });


    function calcularAlimento() {
        const especies = document.getElementById('especiesCalc').value;
        const edad = parseInt(document.getElementById('edadCalc').value);
        const peso = parseFloat(document.getElementById('pesoCalc').value);
        const actividad = document.getElementById('actividadCalc').value;
        const sobrepeso = document.getElementById('sobrepesoCalc').value;
        const pesoIdeal = sobrepeso === 'si' ? parseFloat(document.getElementById('pesoIdeal').value) : peso;


        if (edad <= 0 || edad > 25 || isNaN(edad)) {
            const mensajeEdadCalc = document.createElement('p');
            mensajeEdadCalc.textContent = '* Dato inválido.';
            mensajeEdadCalc.classList.add('pMensajeEdadCalc');
            alertaEdadCalc.innerHTML = '';
            alertaEdadCalc.appendChild(mensajeEdadCalc);
        } else {
            alertaEdadCalc.innerHTML = '';
        }

        if (peso <= 0 || peso > 99 || isNaN(peso)) {
            const mensajePesoCalc = document.createElement('p');
            mensajePesoCalc.textContent = '* Dato inválido.';
            mensajePesoCalc.classList.add('pMensajePesoCalc');
            alertaPesoCalc.innerHTML = '';
            alertaPesoCalc.appendChild(mensajePesoCalc);
        } else {
            alertaPesoCalc.innerHTML = '';
        }

        if (pesoIdeal <= 0 || pesoIdeal > 99 || isNaN(pesoIdeal)) {
            const mensajeSobrepesoCalc = document.createElement('p');
            mensajeSobrepesoCalc.textContent = '* Dato inválido.';
            mensajeSobrepesoCalc.classList.add('pMensajeSobrepesoCalc');
            alertaSobrepesoCalc.innerHTML = '';
            alertaSobrepesoCalc.appendChild(mensajeSobrepesoCalc);
        } else {
            alertaSobrepesoCalc.innerHTML = '';
        }

        let kcalPorKg;

        if (especies === 'gato') {
            if (edad < 1) {
                kcalPorKg = 90; // Cachorro
            } else if (edad < 7) {
                kcalPorKg = 40; // Adulto
            } else {
                kcalPorKg = 37; // Geronte
            }
        } else if (especies === 'perro') {
            if (edad < 1) {
                kcalPorKg = 160; // Cachorro
            } else if (edad < 7) {
                kcalPorKg = 40; // Adulto
            } else {
                kcalPorKg = 37; // Geronte
            }
        }

        // Ajuste por nivel de actividad
        let multiplicadorActividad = 1;
        switch (actividad) {
            case 'alta':
                multiplicadorActividad = 1.5;
                break;
            case 'media':
                multiplicadorActividad = 1.3;
                break;
            case 'baja':
                multiplicadorActividad = 1.1;
                break;
        }

        // Calculo calorías diarias
        const caloriasDiarias = kcalPorKg * pesoIdeal * multiplicadorActividad;

        const comidaDiaria = Math.round(caloriasDiarias / 4);
        document.getElementById('resultadoCalc').innerText = `La ración diaria recomendada es de ${comidaDiaria} gramos.`;
    }


    btnMenu.addEventListener('click', () => {
        window.location.href = "./menu.html";
    });

})