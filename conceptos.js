// DOMContentLoaded: 
`tenemos una garantia que todo el documnto se cargo y esta disponible para manipular `
// script
`espera que la petición se cumpla y se detiene el html`
// script async 
`espera que la petición se cumpla pero no se de tiene el procesamiento del html y ya cuando se tiene la respuesta si se de tiene`
// script defer 
`va a deferir la ejecución de javascript hasta el final del procesamiento de html`

// scope es el alcance que tienen las variables


// stripmode se corre usando
"use strict";

// Netscape

// ¿Qué hace un JS Engine?
`
Recibe el codigo fuente
Paresea el codigo y produce un Abstract Syntax Tree(AST)
Se compila a bytecode y se ejecuta
Se optimiza e machine code y se reemplaza el codigo base `

// ¿Que hace un parser?
`
codigo fuente
tokens
Abstract Syntax Tree
    `

// *modos de hacer Parser
`
Eager Parsing / lazy parsing -
    Encuentra errores de sintaxis / doble de rapido que el eager parser -
    crea el AST / No crea el AST -
    Contruye scopes / construye scopes parcialmente `

// *Tokens descomponen cualquier codigo de javascript y saca su type y su value
ej:
    let foo = "bar";

[{
        "type": "Keyword",
        "value": "let"
    },
    {
        "type": "Identifier",
        "value": "foo"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "String",
        "value": "\"bar\""
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]

// Abstract Syntax Tree
`Es un grafo(estructura de datos) que representa un programa
se usa en:
-Javascript engine
-Bundlers: Webpack, Rollup, Parcel 
-Transpilers: Babel
-Linters: ESLint, Prettify
-Type Checkers: TypeScript. Flow
-Syntax Highlighting
`
// Syntax Error
`
Es lanzado cuand el motor de javascript se encuentra con partes
de codigo que no forman parte de la sintaxis del lenguaje al momento de analizar
el codigo
    `

// Google dice:
`
Parsing es 15 - 20 % del proceso de ejecución
La mayoria del javascript en una pagina nunca se ejecuta
esto hace que el bundling y code splitting sea muy importante
    `


// Bytecode
`
Lo que va ir ejecutanto el motor de javascript donde un observador va estar
tomando notas cuando el observador tienes bastante notas y optimiza el codigo
`

// Bytecode vs Machine Code
`
Codigo parecido a assembly // Binario
Portatil // Instrucciones especificas a una arquitectura o procesador
Ejecutado por el virtual machine.
`

// Profiling data
`
toma obvsevacion de la ejecución de bytecode y cuando ve que las funciones se van
llamando iguales puede hacer optimizaciones
`


// Event Loop
`
Hace que javascript parezca ser multi hilo cuando realmente javascript es de un solo hilo
es el script que esta entre medio del stack y la cola de tareas y esta constantemente revisando
si has tareas y si encuentra una y valida tambien si esta vacio el stack y si esta vacio coje de la cola de tareas
y las pasa al stack y ejecuta las funciones
pero si la cola de tareas esta llena y hay tareas asincronas pendientes espera que terminen esas
tareas y luego pregunta si la cola de tareas esta vacia las pasa al stack y las ejecuta
`

// Stack y memory Heap 
`
Stack es una estructura de datos que lleva rastro de donde esta el programa
-push varias formas de hacer colocar en una fila platos 
-el pop va vaciando los platos hasta sacar el que no se va usar

memory Heap es una estructura de datos desorganizada
`

// Queue
`
Estructura de datos como stack y memory heap lo primero que entra es lo primero que sale(fila)
`

// Task Queue
`
donde se cargan las funciones que ya se completaron y estan lista para pasar al stack
`
// Promesas
`
Es algo que eventualmente va a pasar y como se puede resolver la promesa o
se puede rechazar pero lo importante es que es eventualmente es asincrono
`

// Getters y Setters
`
Son funciones que podemos utilizar dentro de objetos que nos permiten tener propiedades virtuales
es decir no es una propiedad que existe directamente en el objeto pero a trabes
de un Getters y Setters podemos correr una funcion que va a calcular estos valores
o va usar un valor para establecer un nuevo valor. 
`

// Proxy
`
Son parecidos a los Getters y Setters
usan un concepto que se llama traps: Que son interseptores de llamadas. para mostrar 
información al usuario antes de las llamadas
proxy recibe dos parametros el target y handler
target = es el objeto que queremos interseptar.
handler = es un objeto que tiene varias funciones que son las trampas que ya estan
definidas
`

// Generadores
`
Los generadores son funciones espciales podemos comenzar su ejecucion y detenerla 
a mitad nuestro programa continua , y luego podemos regresar a la funcion generadora
y continuar su ejecucion donde la dejamos 

los generadores se ven de la siguinte manera ejemplo:
function* simpleGenerator() {}
como podemos ver despues de la plabra reservada function va un *
Los generadores tienen varios metodos y propiedades
el metodo next() le dice al generador que continue con la ejecución
este hace que se ejecute todo lo que esta dentro de la funcion generadora
y este retorna lo que esta dentro de la funcion generadora y un objeto con 2 valores
value y el done 
el done quiere decir que la ejecución termino
yield = quiere decir que cedemos la ejecucion que hay en el momento

`

// Self hace refencia al service worker es como this a los objetos
self.addEventListener('install', event => {
    // Creamos un precache con una lista de recursos que queremos que mantenga en cache
    event.waitUntil(precache());
})

//   STACK