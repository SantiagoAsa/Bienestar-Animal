

class Mascota {
    constructor(especie, raza, sexo, nombre, edad, peso) {
        this.especie = especie;
        this.raza = raza;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    mostrarDatos() {
        let datosMascota = `\nNombre: ${this.nombre} \nEspecie: ${this.especie} \nRaza: ${this.raza} \nSexo: ${this.sexo} \nEdad: ${this.edad} años \nPeso: ${this.peso} Kg.\n`
        return datosMascota;
    }
}


