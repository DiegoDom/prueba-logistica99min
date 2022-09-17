# 99Minutos - Prueba Técnica
## Instrucciones

Instalar las dependencias.
```
yarn
```

Para correr localmente, se necesita las variables de entorno de firebase y el usuario del backend proporcionado:
* En este caso dejo adjunto el .env para pruebas.
```
VITE_FIREBASE_APIKEY=
VITE_FIREBASE_AUTHDOMAIN=
VITE_FIREBASE_PROJECTID=
VITE_FIREBASE_STORAGEBUCKET=
VITE_FIREBASE_MESSAGINGSENDERID=
VITE_FIREBASE_APPID=


```

* Usuario backend en API https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app/users/create:
```
VITE_TESTAPI_USERNAME=
VITE_TESTAPI_PASSWORD=
```

Crear el archivo __.env__. Tomar __.env.example__ como ejemplo/plantilla.
<br/>

Correr el servidor.
```
yarn dev
```
<br/>

El inicio de sesión esta proporcionado con firebase, puede crear una cuenta o puedes iniciar con el usuario por defecto.

> **_NOTE:_**  En algunos casos, vite sufre un crasheo al iniciar la aplicación en maquinas con pocos recursos, suele bastar con bajar y subir el proyecto, o bien, borrar la caché de yarn & npm.