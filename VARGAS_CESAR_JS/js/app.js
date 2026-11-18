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
            let mensajeCupos = `Cupos disponibles: ${cuposDisponibles}\n`;
            if (cuposDisponibles > 10) {
                mensajeCupos += "Estado: Cupos disponibles";
            } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
                mensajeCupos += "Estado: Últimos cupos disponibles";
            } else {
                mensajeCupos += "Estado: Evento agotado";
            }
            alert(mensajeCupos);
            break;
        case 3:
            alert(
                "REPORTE DE INGRESOS\n" +
                `Total de entradas vendidas: ${entradasVendidas}\n` +
                `Total de ingresos acumulados: $${ingresosAcumulados.toFixed(2)}\n` +
                `Número de compras realizadas: ${comprasRealizadas}`
            );
            break;
        case 4:
            alert(
                "Saliendo del sistema...\n" +
                "RESUMEN FINAL:\n" +
                `Entradas vendidas: ${entradasVendidas}\n` +
                `Ingresos totales: $${ingresosAcumulados.toFixed(2)}\n` +
                `Cupos sobrantes: ${cuposDisponibles}`
            );
            break;
        default:
            alert("Opción no válida. Por favor, intente de nuevo.");
            break;
    }
} while (opcion !== 4);