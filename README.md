# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Ejercicios 
### 5.1
- bajar codigo   
`git clone https://github.com/fullstack-hy2020/bloglist-frontend`

- borrar configuracion git   
`cd bloglist-frontend`
- ve al repositorio clonado   
`rm -rf .git`

- instalar dependecias   
`npm install`   
`npm run dev`

- Implementar la funcionalidad de inicio de sesión en el frontend
  - Solo se vera si el usuario no ha iniciado sesion
  - Si ha inicado sesion se muestra el nombre y su lista de blogs 
-  Guardar el token en el estado `user`
- Aun no se hace uso del localStorage
#### Como
- Incluir variables e estado `username`,  `password` y `user`para guardar token
- Crear un manejador de loginm `handleLogin` que sera accionado por el formulario de login
- Crear el formualrio de login con campos para username y password. Ponerlo en una funcion o en un componente
- Poner un condicional en el renderizado para mostrar el formualario si aun no hay un usuario logueado o mostar el username en caso contrario
### 5.2
- Incluir localStorage para hacer la sesion permanente
- Implementar cerrar sesion 
### 5.3
- Implementar la creacion de nuevos blogs para usuarios logueados
### 5.4
- Implementar notificaciones sobre las operacion realizadas tnto para exito como para error
### 5.5
### 5.6
### 5.7
### 5.8
### 5.9
### 5.10
### 5.11
### 5.12
### 5.13
### 5.14
### 5.15
### 5.16
### 5.17
### 5.18
### 5.19
### 5.20
### 5.21
### 5.22
### 5.23
