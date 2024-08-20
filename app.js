/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

let textArea = document.getElementById("container-texto");
let mensaje = document.getElementById("container-resultado-texto"); 
let botonCopiar = document.getElementById("btnCopiar");

window.onload = function() {
  // Selecciona el botón por su ID y lo oculta al cargar la página
  botonCopiar.style.display = "none";
};

function copiar(){
  textArea.value = mensaje.value;
  mensaje.value = "";
}

/***********Seccion Encriptar***************/

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";    //esto es para sacar la imagen del textarea
  botonCopiar.style.display = "inline-block"; //hace visible el boton copiar
}

function encriptar(cadena){
  cadena = cadena.toLowerCase();
  const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };
  let cadenaEncriptada = '';

   for (let i = 0; i < cadena.length; i++) {
      let letra = cadena[i];
      
      if (reemplazos[letra]) {
          cadenaEncriptada += reemplazos[letra];
      } else {
          
          cadenaEncriptada += letra;
      }
  }
  return cadenaEncriptada;
}

/***********Seccion Desencriptar***************/

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  //mensaje.style.backgroundImage = "url(assets/muneco.svg)";    //esto es para poner la imagen del textarea
  botonCopiar.style.display = "none"; //oculta el boton copiar
}

function desencriptar(cadena){
   // Crear un objeto que mapea las secuencias encriptadas a sus vocales originales
   const reemplazos = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };

  // Recorrer las secuencias y reemplazarlas en la cadena original
  for (let secuencia in reemplazos) {
      cadena = cadena.replaceAll(secuencia, reemplazos[secuencia]);
  }
  return cadena;
}