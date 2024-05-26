# GreenWish Frontend

Este repositorio contiene el frontend para la iniciativa de negocio GreenWish, una plataforma que conecta a ciudadanos con empresas de reciclaje y puntos de recolección en Bogotá. La plataforma incluye una página web y una aplicación móvil, ofreciendo a los usuarios la posibilidad de encontrar puntos de recolección cercanos, recibir información y consejos sobre reciclaje, y ganar puntos por reciclar. Los puntos acumulados pueden canjearse por beneficios como descuentos en comercios locales, entradas a eventos o donaciones a causas ambientales.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

- [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript
- [npm](https://www.npmjs.com/) - Gestor de paquetes de Node.js

### Instalación 🔧

Para hacer una copia local del proyecto, abre tu terminal, dirígete al directorio donde estará el proyecto y usa el siguiente comando:
```bash
git clone https://github.com/ieti-ecode/greenwish-frontend.git
```

Dirígete al directorio creado con:
```bash
cd greenwish-frontend
```

Instala las dependencias del proyecto con:
```bash
npm install
```

### Ejecutando la aplicación

Para ejecutar la aplicación en modo desarrollo, usa el siguiente comando:
```bash
npm start
```

O también se puede usar el comando:
```bash
npm run dev
```

Esto levantará el servidor de desarrollo y podrás ver la aplicación en `http://localhost:5173`.

## Estructura del Proyecto 📁

El proyecto está estructurado en diferentes carpetas, cada una con una funcionalidad específica:

- **components**: Contiene todos los componentes reutilizables.
  - **auth**: Componentes relacionados con la autenticación del usuario (inicio de sesión, registro).
  - **benefit**: Componentes que representan los beneficios que pueden canjear los usuarios.
  - **company**: Componentes que muestran información detallada sobre las empresas de reciclaje y sus puntos de recolección.
  - **material**: Componentes que muestran los materiales que manejamos para reciclar y sus puntos canjeables.
  - **user**: Componentes relacionados con el perfil del usuario.
  - Otros componentes que hacen referencia a la estructura de las páginas que verán los diferentes roles.

- **pages**: Contiene las páginas principales de la aplicación, organizadas según los roles y funciones de los usuarios.
- **hooks**: Contiene hooks personalizados que se utilizan en la aplicación.

## Roles y Funciones 🛠️

La plataforma tiene tres roles principales, cada uno con funciones y páginas personalizadas:

- **Administrador**: Tiene acceso a funcionalidades administrativas, como la gestión de usuarios y empresas, así como la supervisión de los puntos y beneficios.
- **Cliente**: Los ciudadanos que utilizan la plataforma para canjear puntos para conseguir beneficios, reciclar materiales para obtener puntos y encontrar puntos de recolección.
- **Empresa**: Empresas de reciclaje que ofrecen sus servicios a través de la plataforma y gestionan sus puntos de recolección.

## Seguridad 🔒

Para la seguridad, utilizamos JWT (JSON Web Tokens) para la autenticación. Los JWT se generan en el backend y se envían al frontend, permitiendo el acceso a rutas protegidas. La verificación de credenciales y la gestión de tokens se implementan para garantizar la integridad y seguridad de las transacciones.

## Despliegue 📦

Para desplegar la aplicación, sigue estos pasos:

1. Construye la aplicación para producción:
```bash
npm run build
```
2. Sirve los archivos estáticos generados en el directorio `build` utilizando un servidor web como Nginx o Apache.

## Construido con 🛠️

- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [Chakra UI](https://chakra-ui.com/) - Biblioteca de componentes para React.
- [Axios](https://axios-http.com/) - Cliente HTTP basado en promesas para el navegador y Node.js.

## Versionado 📌

![GreenWish](https://img.shields.io/badge/GreenWish_Frontend-v1.0.0-blue)

## Autores ✒️

* **Angie Natalia Mojica Diaz** - [An6ie02](https://github.com/An6ie02)
* **Daniel Antonio Santanilla Arias** - [ELS4NTA](https://github.com/ELS4NTA)
* **Jefer Alexis Gonzalez Romero** - [AlexisGR117](https://github.com/AlexisGR117)
* **Brian Camilo Fajardo Sanchez** - [briancfajardo](https://github.com/briancfajardo)
* **Andrea Johana Durán Vivas** - [andreaduranvivas](https://github.com/andreaduranvivas)

## Licencia 📄

Este proyecto está bajo la Licencia CC0 - mira el archivo [LICENSE](LICENSE) para más detalles.

## Agradecimientos 🎁

* A nuestro maravilloso equipo de trabajo
* Ada School
