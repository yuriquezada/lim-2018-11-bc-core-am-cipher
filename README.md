# Cifrado César

## Proceso de diseño
Para definir mi producto final a nivel de experiencia y de interfaz seguí los siguientes pasos del proceso de diseño:

### Descubrimiento e investigación
![descubrimiento-investigacion](https://camo.githubusercontent.com/a64744933db3aefaa9911ecc31ef5e506f8dcb0c/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f38376b6462483150664b4339413849696b384b73397a33736254677a4b4b7943505f44525548485539462d364654346c715155356341537237664d776f636466424746367a316247745431584e56682d7656386761654c482d537a6d46427930626f705569356843544841512d7a386e5a6d315f574b42666a6f415037516e64797864444f736a384e3755)
Los usuarios principales de mi producto son las parejas de novios o enamorados (o quienes tienen a alguien especial) que desean escribirse y que desean proteger la intimidad de algunos de sus mensajes, o quizá mandar algún mensaje secreto.
Existen aplicaciones de mensajería instantánea que facilitan en cierta forma la comunicación de pareja, pero no hay cómo proteger esos mensajes. A lo que me refiero es, por ejemplo, si en algún momento debemos prestar nuestro dispositivo (celular, laptop) a otra persona, o si nos lo roban, corremos el riesgo de que puedan ver lo que le escribimos a nuestra pareja, y más si algunos mensajes son de carácter privado.
En conclusión, lo que más desearía la mayoría de parejas es privacidad y proteger la intimidad de sus mensajes.

### Síntesis y definición
![sintesis-definicion](https://camo.githubusercontent.com/4d47fe26b388d88afe35989393c9cca61835ed0e/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f6e51495046686a533751746d6a75705073444845386855524d5a52646f776b756f70714973574d475952365943644e52643365446c4448667a31314e5a364d47437047336969564878335a5933677375747061487a5f6155306750702d416b327632323472523056485570454b62566a4c4233556f664376353231634562413350307968725f48632d384d)
¿Qué queremos resolver de nuestros usuarios? metas necesidades intereses
![Alt text](arquetipo.jpg)

### Ideación
![ideacion](https://camo.githubusercontent.com/6062d943caa32fc67373ebf1ffd34d060acd89c7/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4b55444332657a6f79365362626f64494d756e6a446a6c467664716a3831564f5836583877514266444173794f5a467934576e6a48424a5a704c6e583663464d305f694254343136783637655851525246714d5873796452464e58354c5f30745170695258334e4b686c2d71796c6a39515155706479424953376d734e3568787a334d6a73436a665a366f)

### Prototipado
![prototipado]
(https://camo.githubusercontent.com/d3d6669518a8cf067263a9983c04935382cc059d/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4f30766134675364496e576134692d32674c674970615442436141656f4665716a7463314f715674534a707671566d6d34766e4334356a7a594e6b6653374a456e524a5930354a7a6a58585947494f694d5f595f6954712d445f4e4d34377946666a72545a515365384f4c5f326e783069654c574e4b4b56624f4a7a5f745845387a583039496276336d63)



## Contexto

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.


## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
- Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el primer Sprint (una semana) y al  final, trata de fijar un estimado de cuándo lo terminarás.

## Objetivos de aprendizaje

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo  completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

### Habilidades Técnicas Front-end

| Habilidad |
|-----------|
| **CS** |
| Lógica |
| Arquitectura |
| **SCM** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |

### Habilidades Técnicas UX

| Habilidad |
|-----------|
| User Centricity |

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- GitHub y GitHub Pages.
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
