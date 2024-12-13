<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Proyecto NestJS: Pico y Placa Predictor

Este proyecto está basado en NestJS y proporciona una API para predecir si un vehículo puede circular o no según el sistema de "Pico y Placa" de Ecuador.

## Requisitos previos

1. **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Recomendamos la versión LTS.
2. **npm**: El gestor de paquetes de Node.js, que se instala automáticamente con Node.js.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio
    
    git clone https://github.com/WilliamPaucar/pico-y-placa.git
    cd pico-y-placa-predictor


### 2. Instalar dependencias
Una vez dentro de la carpeta del proyecto, instala las dependencias necesarias:

    
    npm install
### 3. Iniciar el servidor NestJS
Para ejecutar el backend, corre el siguiente comando:

    
    npm run start
El servidor NestJS debería estar corriendo en http://localhost:3000 por defecto.


# Proyecto NestJS: Interfaz y Pruebas

Este proyecto desarrollado con **NestJS** contiene una interfaz web en el archivo `index.html` ubicado en la ruta `/pico-y-placa/public/`. 

Para probar la interfaz, sigue los siguientes pasos:

### 1. Abrir el archivo `index.html` en tu editor de código

- Navega a la carpeta `pico-y-placa/public/` dentro de tu proyecto.
- Abre el archivo `index.html` en tu editor de código (se recomienda **Visual Studio Code**).

### 2. Instalar y usar Live Server

Si no tienes la extensión **Live Server** instalada, instálala desde el Marketplace de Visual Studio Code. 

Una vez instalada, haz clic derecho sobre el archivo `index.html` y selecciona **"Open with Live Server"**.

Esto abrirá una nueva ventana en tu navegador con la interfaz de la aplicación, mientras el servidor de NestJS sigue funcionando en segundo plano.

**Nota:** Si estás utilizando otro IDE, busca una extensión similar a Live Server que permita ejecutar archivos estáticos en un servidor local.

---

## Endpoints disponibles

El backend debe estar ejecutando los datos necesarios para que la interfaz funcione correctamente. Asegúrate de que el servidor de NestJS esté corriendo en **http://localhost:3000** (por defecto) para poder realizar las pruebas.

---

## Desarrollo

Aquí puedes agregar más detalles sobre el desarrollo del proyecto, cómo hacer modificaciones, o cualquier otra información que necesites.


Endpoints disponibles
 El backend debe estar ejecutando los datos necesarios para que la interfaz funcione correctamente.

Desarrollo
### Modificar el backend
Si necesitas realizar cambios en el backend de NestJS, puedes editarlos en el código y luego reiniciar el servidor con:
    
    npm run start:dev
Esto reiniciará el servidor automáticamente cada vez que se detecten cambios.

### Modificar la interfaz
Si deseas realizar modificaciones en la interfaz de usuario, simplemente edita el archivo index.html o los archivos relacionados en la carpeta static (si aplica) y recarga el navegador.

Problemas comunes
### Error al iniciar el servidor NestJS
Si el servidor no inicia correctamente, asegúrate de que tienes todas las dependencias instaladas. Puedes intentar limpiar la caché de npm con el siguiente comando y volver a instalar las dependencias:

    
npm cache clean --force
npm install
###2. **Problema con Live Server**
Si Live Server no abre el archivo correctamente o da un error, verifica que no haya ningún otro servidor corriendo en el mismo puerto y que el archivo index.html esté ubicado en el directorio correcto.
