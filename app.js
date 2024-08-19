/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

let textArea = document.getElementById("container-texto");
let mensaje = document.getElementById("container-resultado-texto"); 


function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
}

function encriptar(cadena){
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


