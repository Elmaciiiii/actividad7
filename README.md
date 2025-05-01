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

1.  **Descargar el proyecto desde GitHub:**
    * Ve a esta página: [https://github.com/Elmaciiiii/actividad7.git](https://github.com/Elmaciiiii/actividad7.git)
    * Haz clic en el botón verde que dice "Code".
    * Elige la opción "Download ZIP" y guarda el archivo en tu computadora.

2.  **Extraer el archivo ZIP:**
    * Busca el archivo ZIP que descargaste y haz clic derecho para extraer su contenido. Se creará una carpeta llamada `actividad7-main` o similar.

3.  **Abrir la carpeta del proyecto en Visual Studio Code:**
    * Abre Visual Studio Code.
    * Ve a "Archivo" (File) en la barra de menú y selecciona "Abrir Carpeta" (Open Folder).
    * Navega hasta la carpeta que se creó al extraer el ZIP (`actividad7-main`) y selecciónala. Haz clic en "Seleccionar carpeta" o "Abrir".

4.  **Abrir `index.html` con Live Server:**
    * **Asegúrate de tener instalada la extensión "Live Server" en Visual Studio Code.** Puedes buscarla en la sección de extensiones (el icono con cuatro cuadrados) y hacer clic en "Instalar".
    * En el explorador de archivos de Visual Studio Code (a la izquierda), busca y abre el archivo llamado `index.html`.
    * Haz clic derecho en cualquier parte del archivo `index.html` dentro del editor y selecciona la opción "Open with Live Server".
    * La página del sistema de riego se abrirá en tu navegador web. Live Server hará que la página se actualice automáticamente cuando hagas cambios en el código.

5.  **Interactuar con el sistema:**
    * **Configurar la duración:** En el campo "Regar por:", ingresa la cantidad de tiempo deseada y selecciona la unidad (segundos, minutos, horas) del menú desplegable.
    * **Activar el riego:** Haz clic en el botón "💧 Activar Riego". El estado cambiará a "Activado" (en verde) y se creará un nuevo registro en el historial con un ID único y la duración programada.
    * **Detener el riego manualmente:** Haz clic en el botón "🛑 Detener Riego". Aparecerá una alerta preguntando si estás seguro de detener el riego.
        * Haz clic en "Sí, detener" para detener el riego. El estado cambiará a "Detenido" (en rojo) y se añadirá un registro al historial.
        * Haz clic en "No, continuar" para cancelar la detención y permitir que el riego continúe hasta que termine el tiempo programado.
    * **Esperar la detención automática:** Si no detienes el riego manualmente, se detendrá automáticamente después del tiempo configurado. Esto también se registrará en el historial.
    * **Visualizar el historial:** La sección "📋 Historial de Riego" mostrará todos los eventos de riego con su fecha, hora, ID y duración programada. El color del borde izquierdo indica si fue activado (verde) o detenido (rojo).
    * **Borrar registros:** Haz clic en el icono de la papelera (🗑️) junto a cada registro del historial para eliminarlo.


## Estructura del Proyecto

![image](https://github.com/user-attachments/assets/7c7c9755-4e15-4589-8e2e-b6d2f3b4d8d6)
