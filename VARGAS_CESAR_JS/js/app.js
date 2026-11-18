const PRECIO_ENTRADA = 20;
const MAX_ENTRADAS_COMPRA = 5;

const DESC_ESTUDIANTE = 0.30;
const DESC_DOCENTE = 0.15;
const DESC_PUBLICO = 0.00;

let cuposDisponibles = 50;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;

let opcion = 0;

do {
    opcion = parseInt(prompt(
        "SISTEMA INNOVA ESPE 2026\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n" +
        "Ingrese una opción:"
    ));

    switch (opcion) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            alert("Opción no válida. Por favor, intente de nuevo.");
            break;
    }
} while (opcion !== 4);