# Sistema Innova ESPE 2026

## Descripción del Proyecto
Este repositorio contiene el prototipo en JavaScript para el **Sistema de Gestión de Entradas Innova ESPE 2026**. El sistema permite registrar compras de entradas, calcular descuentos según el tipo de asistente y controlar los cupos disponibles y los ingresos acumulados.

## Requerimientos Funcionales Cumplidos
1.  **Configuración Inicial:** Variables de estado y constantes de precios y descuentos configuradas correctamente.
2.  **Menú Principal:** Ciclo interactivo que permite al usuario navegar por las opciones hasta que decida salir.
3.  **Compra de Entradas:** Cálculo automático de subtotales, descuentos (30% estudiantes, 15% docentes) y totales, actualizando el inventario de cupos solo si la compra es exitosa.
4.  **Consulta de Cupos:** Muestra los cupos restantes y alertas dinámicas de disponibilidad (disponible, últimos cupos, agotado).
5.  **Consulta de Ingresos:** Reporte del total de entradas vendidas, dinero recaudado y cantidad de transacciones.
6.  **Finalización:** Resumen final de la gestión antes de cerrar el programa[cite: 3].

## Validaciones y Seguridad
El sistema incluye las siguientes validaciones[cite: 3]:
*   Límite estricto de máximo 5 entradas por compra.
*   Rechazo de compras con valores no numéricos, nulos o negativos.
*   Control de sobreventa: No permite comprar más entradas de las disponibles.
*   Preservación del estado: Si una compra es rechazada, las variables de ingresos y cupos se mantienen inmutables.

## Ejecución
Para probar el sistema:
1.  Abre el archivo `index.html` en cualquier navegador web.
2.  Interactúa con el sistema a través de las ventanas emergentes (prompts y alerts).