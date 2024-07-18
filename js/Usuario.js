

class Usuario {
    constructor(nombreCompleto, correoElectronico, nombreUsuario, password) {
        this.nombreCompleto = nombreCompleto;
        this.correoElectronico = correoElectronico;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.mascotas = [];
    }

    registrarMascota(especie, raza, sexo, nombre, edad, peso) {
        const nuevaMascota = new Mascota(especie, raza, sexo, nombre, edad, peso);
        this.mascotas.push(nuevaMascota);
    }

    mostrarDatos() {
        let datosUsuarios = `\nNombre completo: ${this.nombreCompleto} \nCorreo electrónico: ${this.correoElectronico} \nNombre de usuario: ${this.nombreUsuario} \nPassword: ${this.password}`;
        return datosUsuarios;
    }

    listaMisMascotas() {
        let datosMisMascotas = 'Mascotas: \n'
        this.mascotas.forEach(mascota => {
            datosMisMascotas += `${mascota.mostrarDatos()}`;
        });
        return datosMisMascotas;
    }


}

