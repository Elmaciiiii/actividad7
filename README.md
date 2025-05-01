# 💧 Sistema de Riego Inteligente con Control de Duración y Alerta

Este proyecto consiste en el desarrollo de una interfaz web interactiva para simular un sistema de riego inteligente. Permite al usuario activar y detener el riego, configurar la duración del riego, y visualizar un historial de la actividad. Además, incorpora una alerta de confirmación personalizada antes de detener el riego anticipadamente.

## Tecnologías Utilizadas

* **HTML:** Estructura de la página web, incluyendo los controles de usuario y la visualización del historial.
* **CSS:** Estilos y diseño de la página, proporcionando una interfaz intuitiva y visualmente agradable, incluyendo la alerta de confirmación personalizada.
* **JavaScript:** Lógica interactiva para la manipulación del DOM, la simulación del control de riego con temporizadores, el almacenamiento del historial en el navegador utilizando IndexedDB, y la gestión de la alerta de confirmación.

## Funcionalidades

* **Activación y Detención Manual del Riego:** Permite al usuario iniciar y detener el sistema de riego a través de botones en la interfaz.
* **Control de Duración del Riego:** El usuario puede especificar la duración deseada del riego utilizando un campo numérico y seleccionar la unidad de tiempo (segundos, minutos, horas).
* **Simulación de Detención Automática:** El sistema simula la detención automática del riego una vez transcurrido el tiempo configurado.
* **Historial de Riego:** Registra la actividad del riego (activación, detención manual o automática) con la fecha, hora, ID del riego y la duración programada.
* **Identificación Única de Riegos:** Cada ciclo de riego se identifica con un número único.
* **Indicación Visual del Estado:** El estado actual del riego (Activo/Detenido) se muestra visualmente con diferentes colores.
* **Alerta de Confirmación de Detención:** Antes de detener el riego manualmente, se muestra una alerta interactiva y estilizada para confirmar la acción.
* **Persistencia de Datos:** El historial de riego se almacena localmente en el navegador utilizando IndexedDB, lo que permite mantener los registros incluso después de cerrar y volver a abrir la página.
* **Borrado de Registros:** Cada entrada del historial tiene un botón para eliminarla individualmente.

## Instrucciones para Probar el Proyecto del Sistema de Riego Inteligente

Para probar la simulación del sistema de riego inteligente, sigue estos pasos:

1.  **Descargar los archivos del proyecto:**
    * Si recibiste los archivos individualmente (`index.html`, `style.css`, `script.js`), asegúrate de que estén en la misma carpeta.
    * Si el código se proporcionó en un contexto donde puedes copiar y pegar, crea los tres archivos mencionados y pega el contenido correspondiente en cada uno.

2.  **Abrir `index.html` en un navegador web:**
    * Localiza el archivo `index.html` en tu computadora.
    * Haz doble clic en el archivo para abrirlo con tu navegador web predeterminado.

3.  **Interactuar con el sistema:**
    * **Configurar la duración:** En el campo "Regar por:", ingresa la cantidad de tiempo deseada y selecciona la unidad (segundos, minutos, horas) del menú desplegable.
    * **Activar el riego:** Haz clic en el botón "💧 Activar Riego". El estado cambiará a "Activado" (en verde) y se creará un nuevo registro en el historial con un ID único y la duración programada.
    * **Detener el riego manualmente:** Haz clic en el botón "🛑 Detener Riego". Aparecerá una alerta preguntando si estás seguro de detener el riego.
        * Haz clic en "Sí, detener" para detener el riego. El estado cambiará a "Detenido" (en rojo) y se añadirá un registro al historial.
        * Haz clic en "No, continuar" para cancelar la detención y permitir que el riego continúe hasta que termine el tiempo programado.
    * **Esperar la detención automática:** Si no detienes el riego manualmente, se detendrá automáticamente después del tiempo configurado. Esto también se registrará en el historial.
    * **Visualizar el historial:** La sección "📋 Historial de Riego" mostrará todos los eventos de riego con su fecha, hora, ID y duración programada. El color del borde izquierdo indica si fue activado (verde) o detenido (rojo).
    * **Borrar registros:** Haz clic en el icono de la papelera (🗑️) junto a cada registro del historial para eliminarlo.

¡Disfruta probando la simulación de tu sistema de riego inteligente!
