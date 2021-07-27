/**
 * - Una página web es un documento HTML
 * - Dos páginas web -> Sitio Web -> 2 documentos HTML (tradicionalmente)
 * 
 * - Flujo de navegación de un usuario en un sitio web
 * 
 *      1. Solicito al servidor la página que quiero ver
 *      2. El servidor me devuelve su HTML
 *      3. El navegador me pinta ese HTML (+CSS +JS)
 *      4. El usuario intenta navegar a otra página del sitio web
 *      5. EL NAVEGADOR SOLICITA LA NUEVA PÁGINA AL SERVIDOR
 *      6. El servidor devuelve el HTML de la nueva página
 *      7. El navegador pinta la nueva página
 * 
 * - A este flujo se le llama MPA (Multiple Page Application)
 *      ** Cada página requiere ir al servidor a por su HTML
 * 
 * - ¿Qué problema tiene este flujo?
 * 
 *      1 Lento -> porque constantemente estamos yendo al servidor
 *      2 Cada HTML tiene que tener la información del contenido
 *      3 Tengo que crear un HTML para cada tipo de contenido
 *          * EJ: Si tnego que pintar un listado de ciudades, el HTML tiene que tener las ciudades 
 *      4 Copiar y pegar elementos comunes
 * 
 * - En su día salieron lenguajes que solucionaban este problema
 *      * Montaban el HTML en cada petición (en caliente) dentro del servidor
 *      * Esos lenguajes tenían acceso a bases de datos
 *      * Java (J2EE, servlets -> JSP, JSF), PHP
 * 
 *      PROBLEMAS NUEVOS
 * 
 *      1 Era aún más lento que los estáticos, pero eran dinámicos
 *      2 El coste era  MUY MUY MUY superior.
 * 
 * - Alguien se dio cuenta que podía usar el navegador para generar el HTML
 * - Otro se dio cuenta de que la visualización web es el contenido de mi negocio presentándolo en HTML y por tanto el contenido se podría reutilizar en otros frontales
 * - Otro alguien se dio cuenta de que una aplicación web o un sitio web podría ser un unico documento HTML (única página), al que le voy cambiando los datos y su estructura HTML
 * 
 * - A esto se le llama Single Page Application (SPA)
 * 
 * - Flujo de la SPA:
 * 
 *      1. Solicito al servidor la página que quiero ver
 *      2. El servidor me devuelve su HTML
 *      3. El navegador me pinta ese HTML (+CSS +JS)
 *      4. Quiero navegar a otra página
 *      5. Pido al servidor LOS DATOS de la nueva página 
 *      6. Elimino el DOM de la página actual
 *      7. Monto el nuevo DOM con los datos recibidos del servidor
 *      8. Añado el nuevo DOM al navegador
 * 
 * 
 */