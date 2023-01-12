function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  
  //i para que afecte tanto como mayuscalas como minusculas
  //g es para toda la linea u oracion
  //m es para que afecte multiples lineas o parrafors
  var textcifrado = texto.replace(/e/igm, "enter")
  var textcifrado = textcifrado.replace(/o/igm, "ober")
  var textcifrado = textcifrado.replace(/i/igm, "imes")
  var textcifrado = textcifrado.replace(/a/igm, "ai")
  var textcifrado = textcifrado.replace(/u/igm, "ufat")

  document.getElementById("imagendoll").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textcifrado;
  document.getElementById("buttoncopiar").style.display = "show";
  document.getElementById("buttoncopiar").style.display = "inherit";

}

function desencriptar() {
  var texto= document.getElementById("inputTexto").value.toLowerCase();
  
  //i para que afecte tanto como mayuscalas como minusculas
  //g es para toda la linea u oracion
  //m es para que afecte multiples lineas o parrafors
  var textcifrado = texto.replace(/enter/igm, "e")
  var textcifrado = textcifrado.replace(/ober/igm, "o")
  var textcifrado = textcifrado.replace(/imes/igm, "i")
  var textcifrado = textcifrado.replace(/ai/igm, "a")
  var textcifrado = textcifrado.replace(/ufat/igm, "u")

  document.getElementById("imagendoll").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textcifrado;  
  document.getElementById("buttoncopiar").style.display = "show";
  document.getElementById("buttoncopiar").style.display = "inherit";

}

function copy() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");

}