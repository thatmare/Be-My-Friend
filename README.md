# Be My Friend

Be My Friend es una  aplicación diseñada para facilitar la adopción de animales en busca de un hogar. Nuestra plataforma te brinda la oportunidad de conocer a estas adorables criaturas y hacer una diferencia en sus vidas.

Con Be My Friend, podrás registrarte y crear una cuenta personalizada para comenzar tu viaje hacia la adopción. Una vez que hayas iniciado sesión, podrás crear y editar publicaciones sobre los animales que deseas adoptar, proporcionando información relevante sobre su especie, edad y personalidad. 

La aplicación fue desarrollada como una _Single Page Application_ con Firebase (Firestore, Authentication y Hosting) como servicio de backend y JavaScript _vanilla_.

## UX Research

Realizamos la investigación de usuarios a cuidadores de animales, obteniendo los siguientes resultados: 

- Tener una página de bienvenida para explicar la aplicación.
- Permitir redactar publicaciones para incluir información sobre: salud, edad, ubicación y especie de los animales, así como condiciones para adoptarlos.
- Poder dar like a las publicaciones.
- Poder subir fotos de los animales.
- Tener servicio de mensajería para comunicarse entre adoptantes y adoptados.
- Invitar a dar testimonios sobre los animales.
- Formulario sobre el historial de los adoptantes (qué mascotas han tenido, alergías, qué animal buscan...).
- Habilitar donaciones a refugios o asociaciones.

### Historias de Usuario

Para el desarrollo de nuestra primera versión de la app, nos guiamos por las siguientes historias de usuario.

1. **Yo:** Como usuario amante de las mascotas. **Quiero:** Poder visualizar una pagina de inicio con testimonios de mascotas (con fotos). **Para:** Saber si me interesa registrarme y conocer mas sobre la app y web.

2. **Yo:** como usuario. **Quiero:** poder Iniciar de sesión. **Para:** interactuar con la pagina Be My Friend.

3. **Yo:** Como nueva usuaria que quiere regitrarse. **Quiero:** Poder visualizar un form donde pueda ingresar mis datos. **Para:** Tener el perfil en la app.

4. **Yo:** Como usuaria que quiere cerrar sesión. **Quiero:** Poder visualizar un menu con la opción de log out. **Para:** salir de la red social.

5. **Yo:** Como usuario que quiero dar en adopción una mascota. **Quiero:** Poder publicar la mascota y añadir sus características. **Para:** Que otros puedan conocerla y se interesen.

6. **Yo:** Como usuario amante de las mascotas. **Quiero:** Poder eliminar un post. **Para:** descartar información que no esté actualizada.

7. **Yo:** Como usuario interesado en las mascotas. **Quiero:** poder editar un post. **Para:** que la información se muestre correctamente y actualizada.

8. **Yo:** como usuaria de la red social. **Quiero:** poder dar/quitar like en los post. **Para**: indicar mis gustos en mascotas a adoptar.

## Prototipos

Para los prototipos escogimos la siguiente paleta de colores con las consideraciones de tener una paleta de colores cálida para transmitir comfort, sin colores brillantes o saturados, pero con un color frío para acentuar.

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/68fd173c-8497-45a0-a433-e3664b37fe1e)

Para el logo utilizamos la tipografía Fire Sans Condensed:

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/2a5d73bf-9743-4e1d-9b23-da3a14b8d7f6)

Y optamos por tipografía sans-serif para el resto de la aplicación:

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/e40c34b3-0e88-47ab-b2ce-71da74adf8c8)

[Versión mobile:](https://www.figma.com/proto/BIIlMvAQP6WPnJHvuhwbcb/Social-Network?type=design&node-id=39-48&scaling=scale-down&page-id=0%3A1&starting-point-node-id=39%3A48&show-proto-sidebar=1)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/869a9655-6aad-4e02-a3c4-8b71e46d4b96)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/4ba2f2a7-66b2-44f5-b429-ce440323a9b2)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/de2903aa-27f3-49a5-9cc8-5090bed87c1f)

[Versión desktop:](https://www.figma.com/proto/BIIlMvAQP6WPnJHvuhwbcb/Social-Network?type=design&node-id=93-69&scaling=scale-down&page-id=35%3A20&starting-point-node-id=93%3A69&show-proto-sidebar=1)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/349c4eae-28f6-40ac-8eec-284e4c26204a)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/a2f31dd2-0872-4ed7-99b3-7c5979c415a8)

![image](https://github.com/thatmare/Be-My-Friend/assets/113146161/d9403730-2172-42d5-a634-9e18ebfdd6bd)

### Tests de usabilidad

Como resultado de los tests de usabilidad obtuvimos el siguiente feedback:

- Colocar la imagen del usuario en los posts.
- Los colores son adecuados.
- Mejorar el contraste para los botones (Lighthouse).
- Aumentar el tamaño de fuente para el área de testimonios, prototipo de desktop.
- No queda claro para qué sirve la patita. Recomendaciones: mover la patita debajo del nombre de la mascota, separarla más del corazón de "me gusta", además de agregar una instrucción.
- Corroborar tamaño de botones: deben ser del mismo ancho.

## Definición de terminado
- [x]  Debe ser una SPA.
- [x]  Debe ser responsive.
- [x]  Deben haber recibido code review de al menos una compañera de otro equipo.
- [x]  Hicieron los test unitarios
- [x]  Testearon manualmente buscando errores e imperfecciones simples.
- [x]  Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [x]  Desplegaron su aplicación y etiquetaron la versión (git tag).

## [Visita nuestra app](https://proyecto-prueba-ec5fc.web.app/)

## Autoras
- [Rebeca Martínez](https://github.com/jhosefin)
- [Gabriela Porras](https://github.com/gabiestefany24)
- [Marissa Vargas](https://github.com/thatmare)
