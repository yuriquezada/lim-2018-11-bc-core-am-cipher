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
¿Qué queremos resolver de nuestros usuarios?

![Arquetipo de mi usuario](arquetipo.jpg)

La imagen representa a un arquetipo de nuestros usuarios: una pareja de enamorados llamados Luis y Rosa.
Ellos comparten gustos afines; dispositivos tecnológicos como una computadora, laptop, tablet o celular forman parte de su día a día, ya sea para comunicarse o hacer trabajos de la universidad. Ya que no siempre pueden verse por los horarios de clases, las aplicaciones de mensajería instantánea como WhatsApp y Facebook Messenger les son muy útiles para comunicarse y mostrarse afecto así sean solo palabras.
Como la mayoría de parejas, ellos desean escribirse mensajes especiales que nadie más pudiese leer, y les ha pasado más de una vez que al prestar su celular a algún amigo o amiga, sus mensajes son vistos de casualidad o a propósito, causando un poco de incomodidad en Rosa y Luis. Rosa, en particular, no confía totalmente en la privacidad que ofrecen estas aplicaciones, y piensa que sería buenos tener algunas conversaciones con Luis que solo los dos puedan entender y saber.

### Ideación
![ideacion](https://camo.githubusercontent.com/6062d943caa32fc67373ebf1ffd34d060acd89c7/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4b55444332657a6f79365362626f64494d756e6a446a6c467664716a3831564f5836583877514266444173794f5a467934576e6a48424a5a704c6e583663464d305f694254343136783637655851525246714d5873796452464e58354c5f30745170695258334e4b686c2d71796c6a39515155706479424953376d734e3568787a334d6a73436a665a366f)

Si nuestros usuarios desean tener mensajes que solo ellos puedan entender, se nos viene a la mente el concepto de cifrado, y así pude trabajar entendiendo el proceso de cifrado y cómo plasmarlo en una interfaz amigable que el usuario pueda entender y gustarle.

### Prototipado
![prototipado](https://camo.githubusercontent.com/d3d6669518a8cf067263a9983c04935382cc059d/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4f30766134675364496e576134692d32674c674970615442436141656f4665716a7463314f715674534a707671566d6d34766e4334356a7a594e6b6653374a456e524a5930354a7a6a58585947494f694d5f595f6954712d445f4e4d34377946666a72545a515365384f4c5f326e783069654c574e4b4b56624f4a7a5f745845387a583039496276336d63)
Elaboré un prototipo práctico, ya que nuestro usuarios desean obtener los mensajes rápido, así como un traductor de idioma.
En el encabezado va un título, luego las indicaciones para el usuario, un input para el offset (número de desplazamiento de letras), un textarea para ingresar el mensaje que se desea cifrar, dos botones para que cifre o descifre, y finalmente el resultado deseado (texto cifrado o descifrado).

![prototipo cipher](prototipo.jpg)

## Conclusiones

- Quiénes son los principales usuarios de producto.

  Los principales usuarios son las parejas de enamorados o novios.

- Cuáles son los objetivos de estos usuarios en relación con tu producto.

  Los objetivos son que los usuarios puedan disfrazar sus mensajes especiales y mandarselos, y que solo ellos sepan su significado.

- Cómo crees que el producto que estás creando está resolviendo sus problemas.

   Mediante el cifrado y descifrado, ellos tendrían su mensaje original y cifrado a la mano, y luego lo pueden copiar y pegar a su chat de preferencia, pueden mandarse los mensajes que deseen y nadie más podrá saber qué es lo que se escriben.

## Contexto: Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.
