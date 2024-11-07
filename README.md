# React + Vite
# React-MairaDiaz
# Proyecto E-commerce - React

Este proyecto es una tienda en línea desarrollada con React y Vite, utilizando Firebase para el manejo del inventario y órdenes en tiempo real. Los usuarios pueden agregar productos al carrito, realizar pedidos, y ver los detalles de sus compras. Se utiliza un modal para ingresar los datos del comprador, y los estilos se manejan con Sass.

## Dependencias

A continuación, se detalla la lista de dependencias principales utilizadas en el proyecto.

### Cómo Instalar las Dependencias
Para instalar todas las dependencias necesarias, simplemente ejecuta el siguiente comando:```bash
npm install

### Dependencias de Producción

Estas dependencias son necesarias para que la aplicación funcione correctamente:

- **[@types/react@^18.3.11]**: Tipos de TypeScript para React.
- **[@types/react-dom@^18.3.1 ]**: Tipos de TypeScript para ReactDOM.
- **[firebase@^11.0.1 react@^18.3.1]**: Utilizado para la gestión de base de datos y autenticación.
- **[react-dom@^18.3.1]**: Biblioteca principal para construir interfaces de usuario.
- **[react-modal@^3.16.1]**: Para trabajar con el DOM en React.
- **[react-router-dom@^6.27.0]**: Utilizado para mostrar modales en la aplicación. 
- **[react-spinners@^0.14.1 ]**: Para mostrar indicadores de carga.





### Dependencias de Desarrollo
Estas dependencias son necesarias solo para el entorno de desarrollo:
npm install --save-dev

**[@eslint/js@^9.13.0]**: Herramienta para mantener la calidad del código JavaScript.
- **[@vitejs/plugin-react@^4.3.3]**: Plugin para trabajar con React en Vite.
- **[sass-embedded@^1.80.3]**: Utilizado para procesar archivos `.scss` y añadir estilos al proyecto.
- **[vite@^5.4.9]**: Herramienta de desarrollo para compilar y servir el proyecto.
- **[]**:

 


### Dependencias Extrañas o No Necesarias
Durante la revisión, se encontraron algunas dependencias que podrían no ser necesarias para el proyecto actual:

- **[bindings]**: ^1.5.0 (extraneous).
- **[file-uri-to-path]**: ^1.0.0 (extraneous).
- **[nan]**: ^2.22.0 (extraneous).

Las dependencias marcadas como "extraneous" no están incluidas en `package.json`, por lo que es posible que se hayan instalado accidentalmente. Se recomienda revisar su necesidad o desinstalarlas para evitar problemas en el proyecto.