let veterinaria = new Veterinaria();


veterinaria.registrarUsuario('santiago asa', 'santiagoasa@gmail.com', 'santi', '123');
veterinaria.registrarUsuario('leticia nicasio', 'leticia_nicasio@gmail.com', 'leti', '8910');
veterinaria.registrarUsuario('damian tumine', 'tuminedamian@gmail.com', 'damian', '456');
veterinaria.registrarUsuario('tomas rodriguez', 'tomas.rod@hotmail.com', 'tomy', '678');
veterinaria.registrarUsuario('norma tisera', 'norma.tisera@gmail.com', 'norma', '131415');
veterinaria.registrarUsuario('claudia iribarne', 'ciribarne@gmail.com', 'claudia', '101112');
veterinaria.registrarUsuario('juan gomez', 'gomez_j@hotmail.com', 'qwerty', '999');
veterinaria.registrarUsuario('lorena gutierrez', 'loreguti_1979@gmail.com', 'loreg', '444');
veterinaria.registrarUsuario('ramon scalpo', 'scalporamon@yahoo.com.ar', 'ramon77', 'ramscal');
veterinaria.registrarUsuario('julia gonzalez', 'no tiene', 'juliagon', 'ju11go');
veterinaria.registrarUsuario('esteban guzman', 'guzman.empresa@gmail.com', 'guzguz', '123eg');
veterinaria.registrarUsuario('pepe crack', 'pepe@mail.com', 'pepe', 'pepe');
veterinaria.registrarUsuario('profesional veterinario', 'bienestaranimal@yahoo.com.ar', 'admin', 'admin');
veterinaria.usuarios[0].registrarMascota('canino', 'mestizo', 'macho', 'coco', 5, 26);
veterinaria.usuarios[0].registrarMascota('felino', 'mestizo', 'hembra', 'biena', 7, 6)
veterinaria.usuarios[1].registrarMascota('felino', 'mestizo', 'hembra', 'matilda', 9, 3.5);
veterinaria.usuarios[2].registrarMascota('canino', 'bulldog frances', 'hembra', 'juana', 4, 9);
veterinaria.usuarios[3].registrarMascota('canino', 'border collie', 'macho', 'nestor', 7, 23);
veterinaria.usuarios[4].registrarMascota('canino', 'pug carlino', 'hembra', 'bruna', 10, 11);
veterinaria.usuarios[4].registrarMascota('canino', 'golden retriever', 'macho', 'rolo', 2, 31.2);
veterinaria.usuarios[5].registrarMascota('felino', 'mestizo', 'macho', 'michino', 1, 3);
veterinaria.usuarios[6].registrarMascota('canino', 'cocker spaniel', 'hembra', 'luz', 9, 15);
veterinaria.usuarios[7].registrarMascota('felino', 'mestizo', 'macho', 'simon', 8, 7);
veterinaria.usuarios[7].registrarMascota('felino', 'mestizo', 'hembra', 'letona', 3, 4.7);
veterinaria.usuarios[8].registrarMascota('canino', 'ovejero aleman', 'hembra', 'luna', 9, 28);
veterinaria.usuarios[8].registrarMascota('canino', 'ovejero aleman', 'hembra', 'negra', 6, 26.8);
veterinaria.usuarios[8].registrarMascota('canino', 'boxer', 'macho', 'bongo', 3, 22.7);
veterinaria.usuarios[9].registrarMascota('felino', 'siames', 'hembra', 'golda', 5, 4.1);
veterinaria.usuarios[9].registrarMascota('felino', 'siames', 'macho', 'tom', 5, 3.9);
veterinaria.usuarios[10].registrarMascota('canino', 'bull terrier', 'macho', 'ringo', 1, 32);
veterinaria.usuarios[11].registrarMascota('felino', 'angora turco', 'macho', 'el michi', 6, 4.3);


document.addEventListener('DOMContentLoaded', () => {

    const btnLogin = document.getElementById('btnLogin');
    const btnCrearCuenta = document.getElementById('btnCrearCuenta');
    const btnContacto = document.getElementById('btnContacto');


    btnLogin.addEventListener('click', () => {
        window.location.href = '../pages/login.html';
    });


    btnCrearCuenta.addEventListener('click', () => {
        window.location.href = '../pages/registro.html';
    });


    btnContacto.addEventListener('click', () => {
        window.location.href = '../pages/contacto.html';
    });
});


