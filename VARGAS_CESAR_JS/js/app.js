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
            if (cuposDisponibles === 0) {
                alert("Lo sentimos, el evento está agotado.");
                break;
            }

            let nombre = prompt("Ingrese el nombre del comprador:");
            let tipo = prompt("Ingrese el tipo de participante (estudiante, docente, general):").toLowerCase();
            let cantidad = parseInt(prompt("Ingrese la cantidad de entradas (Máximo 5):"));

            if (isNaN(cantidad) || cantidad < 1 || cantidad > MAX_ENTRADAS_COMPRA) {
                alert("Cantidad inválida. Debe ser un número entre 1 y 5. Compra rechazada.");
                break;
            }

            if (cantidad > cuposDisponibles) {
                alert(`No hay suficientes cupos. Solo quedan ${cuposDisponibles} entradas disponibles. Compra rechazada.`);
                break;
            }

            let descuentoAplicado = 0;
            if (tipo === "estudiante") {
                descuentoAplicado = DESC_ESTUDIANTE;
            } else if (tipo === "docente") {
                descuentoAplicado = DESC_DOCENTE;
            } else if (tipo === "general") {
                descuentoAplicado = DESC_PUBLICO;
            } else {
                alert("Tipo de participante no reconocido. Compra rechazada.");
                break;
            }

            let subtotal = cantidad * PRECIO_ENTRADA;
            let valorDescuento = subtotal * descuentoAplicado;
            let total = subtotal - valorDescuento;

            cuposDisponibles -= cantidad;
            entradasVendidas += cantidad;
            ingresosAcumulados += total;
            comprasRealizadas++;

            let resumenCompra = 
                `--- RESUMEN DE COMPRA ---\n` +
                `Nombre: ${nombre}\n` +
                `Tipo de participante: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}\n` +
                `Cantidad de entradas: ${cantidad}\n` +
                `Subtotal: $${subtotal.toFixed(2)}\n` +
                `Descuento (${descuentoAplicado * 100} %): $${valorDescuento.toFixed(2)}\n` +
                `Total a pagar: $${total.toFixed(2)}\n` +
                `Compra realizada exitosamente.\n` +
                `Cupos restantes: ${cuposDisponibles}`;
            
            alert(resumenCompra);
            console.log(resumenCompra);
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