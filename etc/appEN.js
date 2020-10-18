/* Archvio JS encargado del control en Ingles */
//Variables del Texto 0
var audioTextoCero = "./aud/en/00EN.mp3";
var delayTextoCero = 4885;

//Reproduce el Texto 0
function esperarTextoCero() {
  contexto0.texto0.disabled = true; 
  contexto0.texto0.value = "Leyendo...";
  texto0();
  setTimeout(function(){
    contexto0.texto0.disabled = false;
    contexto0.texto0.value = "Leer Texto";
  }, delayTextoCero);
  return false;
}

contexto0.texto0.addEventListener("click", function(){ 
  return confirmEnviar();
}, false);

function texto0() {
var textoCero = new Audio(audioTextoCero);
textoCero.play();
}

//Funcion de Navegacion (Ocultar y aparecer con Scroll)
var ubicacionInicial = window.pageYOffset;

window.onscroll = function() {
  var ubicacionActual = window.pageYOffset;

  if(ubicacionInicial >= ubicacionActual) {
    document.getElementsByClassName("navMenuPrincipal").style.top="0px";
  }
  else{
    document.getElementsByClassName("navMenuPrincipal").style.top="-100px";
  }
  ubicacionInicial = ubicacionActual;
}

//Funciones de Spoilers
function mostrarSpoilerGitHub() {
  if(document.getElementById('spoilerGitHub-id').style.display =='block'){
    document.getElementById('spoilerGitHub-id').style.display='none';
  }
  else {
  document.getElementById('spoilerGitHub-id').style.display='block';
  document.getElementById('spoilerBrave-id').style.display='none';
  }
}

function mostrarSpoilerBrave() {
  if(document.getElementById('spoilerBrave-id').style.display =='block') {
    document.getElementById('spoilerBrave-id').style.display='none';
  }
  else {
  document.getElementById('spoilerBrave-id').style.display='block';
  document.getElementById('spoilerGitHub-id').style.display='none';
  }
}

//Funcion para hacer la pagina hacia arriba
document.getElementById("irArriba").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("irArriba");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}
