let operaciona;
let operacionb;
let operaciont;

function init() {
    let resultado = document.getElementById ('resultado');
    let igual = document.getElementById('igual');
    let restart = document.getElementById('reiniciar');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
}

uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reiniciar.onclick = function(e){
    restart();
}

suma.onclick = function(e){
    operaciona = resultado.textContent;
    operaciont = "+";
    limpiar();
}
resta.onclick = function(e){
    operaciona = resultado.textContent;
    operaciont = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operaciona = resultado.textContent;
    operaciont = "*";
    limpiar();
}
division.onclick = function(e){
    operaciona = resultado.textContent;
    operaciont = "/";
    limpiar();
}
igual.onclick = function(e){
    operacionb = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}

function restart(){
    resultado.textContent = "";
    operaciona = 0;
    operacionb = 0;
    operaciont = "";
}

function resolver() {
    let res = 0;
    switch(operaciont){
      case "+":
        res = parseFloat(operaciona) + parseFloat(operacionb);
        break;
  
      case "-":
          res = parseFloat(operaciona) - parseFloat(operacionb);
          break;
  
      case "*":
        res = parseFloat(operaciona) * parseFloat(operacionb);
        break;
  
      case "/":
        res = parseFloat(operaciona) / parseFloat(operacionb);
        break;
}
 restart();
    resultado.textContent = res;
}