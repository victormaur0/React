# React

### Comando windows scripts
`set-executionpolicy unrestricted`

## NPM modulos globales
- `npm install -g express`<br>
- `npm install -g firebase-tools`<br>
- `npm install -g vite` *Te permite ejecutar comandos en la terminal.*<br>
## NPM modulos por proyecto
- `npm i nodemon`
- `npm install react-router-dom` *Te permite crear los routing. Simulamos que cada pagina sea un html.*


## Vite Projects
- `npm create vite`
- `npm init vite project-name`
- >Ver proyecto:<br>`npm run dev` *Ejecutar dentro de la carpeta del proyecto.*
- - >*Siempre ejecutar antes: * `npm install`

## Firebase
- >Login<br>
 `firebase login`
- >Crear proyecto: *Inicializar el comando dentro de la carpeta de cada proyecto, no la que engloba todos.*<br>
`firebase init`<br>
- >Ejecutar el proyecto en local<br>
`firebase serve`
- >Subir al servidor el proyecto<br>
`firebase deploy`

## Routing
1. Instalar: `npm install react-router-dom`
2. Import en app.tsx -> `import {createBrowserRouter} from 'react-router-dom'`
3. createBrowserRouter -> es una funcion, se le pasa un array con todas las paginas en json.
>> Formato JSON:
>>>>{
    "path": "",
    "element": ""
  }
>>> Path: ruta
>>> Element: componente a cargar.
>>> Se pueden poner etiquetas de HTML o etiqeutas de componentes creados.
4. Almacenar la funcion en una variable.
5. Importar -> `import {RouterProvider} from 'react-router-dom'`
6. Function app devuelve -> `<RouterProvider router={router} />` 
>> router es la variable que almacena la funcion.

> Enlaces
7. Importar en el .tsx del componente donde esté <a> -> `import {Link} from 'react-router-dom'`
8. Etiqueta volver a inicio -> `<Link to="/">Volver a inicio</Link>`
9. Mejor usar Link porque mantiene el javascript, no recarga la página, asi mantienes las variables almacenadas, etc.

