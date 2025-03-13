# Henry_CAC_Integrador

Este proyecto es un integrador para el curso de Henry. A continuación, se proporciona una breve descripción y guía de cómo utilizar y configurar el proyecto.

## Descripción

El proyecto consiste en un frontend desarrollado en React que consume la API de Rick and Morty para mostrar información sobre los personajes de la serie. Además, se ha implementado un backend en Express que se conecta a una base de datos PostgreSQL utilizando Sequelize.

## Tecnologías

- Frontend: React
- Backend: Express
- Base de datos: PostgreSQL
- ORM: Sequelize
- API: Rick and Morty API

## Configuración del Proyecto

Siga estos pasos para configurar y ejecutar el proyecto localmente:

### Requisitos Previos

- Node.js instalado
- PostgreSQL instalado y configurado

### Pasos de Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Gustav-Br/Henry_CAC_Integrador.git

Navega al directorio del proyecto:

cd Henry_CAC_Integrador

2. Instala las dependencias del frontend:

   ```bash
     cd front
     npm install

3. Instala las dependencias del backend:

   ```bash
    cd back
    npm install

Configura la base de datos en PostgreSQL

4. En la carpeta back generar un archivo .env con la siguiente información 

   ```bash
    DB_USER= el USER de tu base de datos 
    DB_PASSWORD= el PASSWORD de tu base de datos 
    DB_HOST=localhost
    DB_PORT=5432
    DB_BDD=rickandmorty

Ejecuta el servidor backend:

cd back

npm start

Ejecuta el frontend:

cd front

npm start

Abre tu navegador y visita http://localhost:5173/ para ver la aplicación en acción.

