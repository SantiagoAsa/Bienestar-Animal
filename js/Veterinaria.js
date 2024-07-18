

class Veterinaria {
    constructor() {
        this.usuarios = [];
        this.casillaDeMensajes = [];
    }


    logearUsuario(nombreUsuario, password) {
        const usuario = this.usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.password === password)
        if (usuario) {
            return true;
        } else {
            return false;
        }
    }


    chequearUsuario(nombreCompleto, correoElectronico, nombreUsuario) {
        const usuario = this.usuarios.some(usuario => usuario.nombreCompleto === nombreCompleto || usuario.correoElectronico === correoElectronico || usuario.nombreUsuario === nombreUsuario)
        if (usuario) {
            return true;
        } else {
            return false;
        }
    }

    chequearNombreApellido(nombreCompleto) {
        const usuario = this.usuarios.some(usuario => usuario.nombreCompleto === nombreCompleto)
        return usuario.nombreCompleto;
    }


    registrarUsuario(nombreCompleto, correoElectronico, nombreUsuario, password) {
        const nuevoUsuario = new Usuario(nombreCompleto, correoElectronico, nombreUsuario, password);
        this.usuarios.push(nuevoUsuario);
    }


    listaDeUsuarios() {
        let usuariosLista = '\n';
        this.usuarios.forEach(usuario => {
            usuariosLista += `${usuario.nombreCompleto}\n`
        })
        return usuariosLista;
    }


    buscarUsuario(nombreCompleto) {
        const usuario = this.usuarios.find(usuario => usuario.nombreCompleto === nombreCompleto);

        if (usuario) {
            this.usuarioParaMostrar = `Este nombre se encuentra en el sistema\n\nDatos: ${usuario.mostrarDatos()}\n-------------------------------------\n`;
            return true;
        } else {
            this.usuarioParaMostrar = `*Usuario no encontrado\n-------------------------------------\n`;
            return false;
        }
    }


    devolverUsuarioPorNombre(nombreUsuario) {
        return this.usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);
    }


    devolverUsuarioPorNombreCompleto(nombreCompleto) {
        return this.usuarios.find(usuario => usuario.nombreCompleto === nombreCompleto);
    }


    listaDeMascotas() {
        let mascotasLista = 'Lista de mascotas registradas:\n';
        this.usuarios.forEach(usuario => {
            mascotasLista += `-------------------------------------\n${usuario.nombreCompleto}\n`;
            mascotasLista += `${usuario.listaMisMascotas()}\n`;
        })
        return mascotasLista;
    }


    buscarMascota(nombre, especie) {
        for (let usuario of this.usuarios) {
            for (let mascota of usuario.mascotas) {
                if (mascota.nombre === nombre && mascota.especie === especie) {
                    return mascota
                }
            }
        }
        return null;
    }


    mandarMensaje(textoGuardar) {
        this.casillaDeMensajes.push(textoGuardar);
    }

}

