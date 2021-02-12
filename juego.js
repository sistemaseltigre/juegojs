var nave = '';
var arma = '';
var spriteWidth = 0;
var spriteHeight = 0;
var pixelsTop = 0;
var pixelsLeft = 0;
var canvasPosX = 0;
var canvasPosY = 0;
var e_spriteWidth = 0;
var e_spriteHeight = 0;
var e_pixelsTop = 0;
var e_pixelsLeft = 0;
var e_canvasPosX = 0;
var e_canvasPosY = 0;
var dot = 0;
var disparo = '';
var armaPosY = 490;

canvasNave = document.getElementById('baseNave');
contextNave = canvasNave.getContext('2d');
nave = new Image();
nave.src = 'nave.png';
nave.onload = function(){
  spriteWidth = 80,
  spriteHeight = 90,
  pixelsLeft = 2,
  pixelsTop = 2,
  canvasPosX = 130,
  canvasPosY = 500;
  contextNave.drawImage(nave,pixelsLeft,pixelsTop,spriteWidth,spriteHeight,canvasPosX,canvasPosY,spriteWidth,spriteHeight);
}

//Definimos el canvas armasNave
canvasArmas = document.getElementById('armasNave');
contextArmas = canvasArmas.getContext('2d');
arma = new Image();
arma.src = 'dot1.png';

//Definimos el canvas de los capaEnemigos
canvasEnemigos = document.getElementById('navesEnemigas');
contextEnemigos = canvasEnemigos.getContext('2d');
enemigos = new Image();
enemigos.src = 'naveEnemiga1.png';
enemigos.onload = function(){
  e_spriteWidth = 100,
  e_spriteHeight = 100,
  e_pixelsLeft = 0,
  e_pixelsTop = 0,
  e_canvasPosX = 200,
  e_canvasPosY = 20;
  contextEnemigos.drawImage(enemigos,e_pixelsLeft,e_pixelsTop,e_spriteWidth,e_spriteHeight,e_canvasPosX,e_canvasPosY,e_spriteWidth,e_spriteHeight);
}




document.onkeydown = presionoTecla;

function presionoTecla(e){

  e = e || window.event;
  if ( (e.keyCode=='37') || (e.keyCode=='65')) {
    console.log('izquierda');
    contextNave.clearRect(canvasPosX,canvasPosY,spriteWidth,spriteHeight);
    canvasPosX = canvasPosX-1;
    contextNave.drawImage(nave,pixelsLeft,pixelsTop,spriteWidth,spriteHeight,canvasPosX,canvasPosY,spriteWidth,spriteHeight);
  }

  if ( (e.keyCode=='39') || (e.keyCode=='68')) {
    console.log('derecha');
    contextNave.clearRect(canvasPosX,canvasPosY,spriteWidth,spriteHeight);
    canvasPosX = canvasPosX+1;
    contextNave.drawImage(nave,pixelsLeft,pixelsTop,spriteWidth,spriteHeight,canvasPosX,canvasPosY,spriteWidth,spriteHeight);
  }

  if (e.keyCode=='32')  {
    if (dot==0) {

      var armaPosX = canvasPosX+55;


      disparo =  setInterval(function() {
          contextArmas.clearRect(0,0,400,600);
          contextArmas.drawImage(arma,0,0,10,10,armaPosX,armaPosY--,10,10);
        }, 10);



      dot = 1;
    }else{
      console.log('el punto esta viajando');
    }
    console.log('dispara');
  }


}

setInterval(function(){
  if (armaPosY<=80) {
    clearInterval(disparo);
  }
},10);
