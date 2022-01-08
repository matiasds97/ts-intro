/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(123);
let soyArray = queTipoSoy([1,2,3]);

let soyTexto = queTipoSoy<string>("Prueba")