
//Ejercicios con Objetos, JSON y Local Storage

// Objetos
// 1. Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y 
// contrasenia como strings.

// const usuario1 = {
//     nombreUsuario:"gaby",
//     contrasenia:"pepe"
// }

// const usuario2 = {
//     nombreUsuario:"sofi",
//     contrasenia:"pepe1"
// }

// const usuario3 = {
//     nombreUsuario:"maria",
//     contrasenia:"pepe2"
// }

// 2. Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página 
// para que aparezca un h1 que diga "Hola, {nombreUsuario}".
//   const body = document.querySelector("body")
//   const h1 = document.querySelector("h1")

//   const saludar = (objeto) => {

//     let titulo = document.createElement("h1")
//     titulo.textContent = `Hola, ${objeto.nombreUsuario}`
//     body.appendChild(titulo)
//   }

//   saludar(usuario2)
//   saludar(usuario3)


// 3.Probá tu función con los tres objetos definidos antes.

// 4. Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un 
// string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada para 
// tener el valor de nuevoNombre.

//   const modificarNombreDeUsuario = (objeto, nuevoNombre) => {

//     return objeto.nombreUsuario = nuevoNombre
//   }

//   console.log(modificarNombreDeUsuario(usuario1, "juan"))

//   console.log(usuario1)
//   modificarNombreDeUsuario(usuario1, "mery")
//   console.log(usuario2)
//   modificarNombreDeUsuario(usuario2,"carlos")
//   console.log(usuario3)
//   modificarNombreDeUsuario(usuario3, "Marcos")
//Probá tu función con los tres objetos definidos antes.

// 6. Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario 
// y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada 
// para tener el valor de nuevaContrasenia.

//   const modificarContrasenia = (objeto , nuevaContrasenia) => {

//     return objeto.contrasenia = nuevaContrasenia 
//   }

//   console.log (modificarContrasenia(usuario2, "dulce"))
//   console.log (usuario2)
//   modificarContrasenia(usuario3, "plumito")
//   console.log(usuario3)
//   modificarContrasenia (usuario1, "123")
//   console.log(usuario1)

//Probá tu función con los tres objetos definidos antes.

// Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el 
// objeto convertido a JSON.


//   const convertirAJSON = (objeto) => {
//     let objetoJSON = JSON.stringify(objeto)
//     return objetoJSON
//   }

//   console.log (convertirAJSON(usuario1))
//   console.log (convertirAJSON(usuario2))
//   console.log (convertirAJSON(usuario3))
//   const objetoNuevoJSON = convertirAJSON(usuario1)
//   const objetoNuevoJSON2 = convertirAJSON(usuario2)
//   const objetoNuevoJSON3 = convertirAJSON(usuario3)

//Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la 
//cadena convertida a un objeto de Javascript.

//   const convertirDesdeJSON = (objetoJSON) => {
//     const objetoconvertidoJSON = JSON.parse(objetoJSON)
//     return objetoconvertidoJSON
//   }

//   console.log(convertirDesdeJSON (objetoNuevoJSON))
//   console.log(convertirDesdeJSON (objetoNuevoJSON2))
//   console.log(convertirDesdeJSON (objetoNuevoJSON3))


//Probá tus funciones con los tres objetos definidos antes.

// 11.Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, y guarde en localStorage la cadena 
// con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage hay que 
// convertirlo a JSON: usá la función convertirAJSON que declaraste antes)


const objetoNuevoJSON = convertirAJSON(usuario1) //esto ya es un json

  const guardarEnLocalStorage = (objeto , string) => {
    localStorage.setItem(string , objeto)
  }
  guardarEnLocalStorage (objetoNuevoJSON,"usuarios")

// 12. Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript con los
// datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)

//   const leerDesdeLocalStorage = (string) => {
//     return localStorage.getItem(string)
//   }

//   console.log (leerDesdeLocalStorage ("usuarios"))




///////// Ejercitación integradora ////////////



// Tratá de usar las funciones declaradas en los ejercicios anteriores.

// Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"

// Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y 
// otro contraseña, y un botón para enviar el form.

let h1 = document.querySelector("h1")
const botonSesion = document.querySelector("#btn-iniciar")
const formulario = document.querySelector("form") //formulario
const btnEnviar = document.querySelector("#enviar") //boton enviar
const user = document.querySelector("#user") //input usuario
const pass = document.querySelector("#pass") //input pasword

const btnCambiarDatos = document.querySelector("#cambiar-datos")
const btnCerrarSesion = document.querySelector("#cerrar-sesion")

const nuevoForm = document.querySelector("#nuevo-form")
const nuevoUser = document.querySelector("#nuevo-user") //input nuevo usuario
const nuevoPass = document.querySelector("#nuevo-pass") //input nuevo pasword
const btnNuevoForm = document.querySelector("#enviar-nuevo-form") // boton enviar nuevo form

const abrirFormulario = () => {
    formulario.classList.remove("ocultar")
}
botonSesion.onclick = abrirFormulario

// Definí un objeto usuario en javascript en donde estén definidas dos propiedades: nombreUsuario y 
// contrasenia (o usá los objetos definidos antes).

const usuario = {
    nombreUsuario: "gaby",
    contrasenia: "123",
    inicioSesion:false
}


// Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:
// Mostrar como saludo "Hola {nombreUsuario}"
// Ocultar el botón "iniciar sesión"
// Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
// Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella 
//qué elementos se deben mostrar en la página.


const validarUsuario = (usuario) => {

    if (user.value === usuario.nombreUsuario && pass.value === usuario.contrasenia) {
        botonSesion.classList.add("ocultar")
        btnCambiarDatos.classList.remove("ocultar")
        btnCerrarSesion.classList.remove("ocultar")
        
        h1.textContent = `Hola, ${usuario.nombreUsuario}`
        
    }
}

btnEnviar.onclick = ()=> {
    validarUsuario(usuario)
    usuario.inicioSesion = true
    guardarEnLocalStorage (usuario, "gaby")
}

//Si el usuario hace click en "cerrar sesión", el titulo debe volver a decir "Hola!" y el botón "Iniciar sesión" debe volver a ser 
//visible.
//Si el usuario hace click en "Cambiar mis datos", se abre un formulario con un campo usuario y otro contraseña, y un botón para 
//enviar el form. Al enviarse, se deben modificar las propiedades nombreUsuario y contrasenia del objeto usuario.

btnCerrarSesion.onclick = () => {
 h1.textContent = `Hola!`
 botonSesion.classList.remove("ocultar") 
} 

btnCambiarDatos.onclick = () => {
    nuevoForm.classList.remove("ocultar")  
}

btnNuevoForm.onclick = ()=> {
    usuario.nombreUsuario = nuevoUser.value 
    usuario.contrasenia = nuevoPass.value
}

/*Una vez completados todos los puntos anteriores, queremos que la sesión del usuario persista aunque cierre la página.

Al iniciar sesión, se deben guardar en localStorage el nombre del usuario y la propiedad: sesionIniciada: true.
Al saludar al usuario, el título debe consumir la propiedad guardada en localStorage.
Al cerrar sesión, la propiedad sesionIniciada debe pasar a ser false.
Para determinar si la sesión está iniciada o no, usar la propiedad sesionIniciada desde localStorage.
Si el usuario cambia su nombre o contraseña desde el formulario, los datos en localStorage deben actualizarse también.*/




