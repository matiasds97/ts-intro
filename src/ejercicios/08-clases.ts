import { Producto, calculaISV } from './ejercicios/06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/


class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal {
    // public alterEgo: string;
    // public edad: number;
    // public nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
        nombreReal: string,
        direccion: string
        ) {
            super(nombreReal, direccion);
        }
}

const ironman = new Heroe('Iron Man', 25, 'Tony Stark', 'Stark Industries');
console.log(ironman)