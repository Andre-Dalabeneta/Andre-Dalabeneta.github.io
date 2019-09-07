//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [150,150,150];
let velocidadeX = 10;
let velocidadeY = 10;

//Variáveis Raquetes
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [150, 150, 150];

//Variáveis Raquete Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [150, 150, 150];

//Placar
let pontosMeus = 0;
let pontosOponente = 0;

let ponto;
let raquetada;

function preload(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3')
}


//Canfiguração Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+" Altura: "+altura);
}

//Desenha - Looping infinito while()
function draw() {
  background(0,255,255);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaquetes();
  colisaoRaqueteOponente();  
  marcaPontos();
  mostrarPlacar();
  ganhei();
  perdi();
  cabosse();
  
}



function perdi(){
  if(pontosOponente > 9){
  fill(0);
  text('Lado esquerdo ganhou!', 200, 200);
  }
}

function cabosse(){
  if(pontosMeus > 9 || pontosOponente > 9){
    xBolinha = 300
    yBolinha = 200
  }
}

function ganhei(){
  if(pontosMeus > 9){
  fill(0);
  text('Lado direito ganhou!', 200, 200);  
  }
  
  
}

function mostrarPlacar(){
  textSize(30);
  
  fill(0);
  rect(429,5,60,30,10);
  
  fill(0);
  rect(128,5,60,30,10);
  
  fill(150,150,150);
  text(pontosMeus, 450, 30);
  text(pontosOponente, 150, 30);
}

function marcaPontos(){
 if(xBolinha < 12){
   pontosMeus += 1
   ponto.play();
 }
 if(xBolinha > 588){
   pontosOponente+= 1; 
   ponto.play();
  }
  
}

function colisaoRaqueteOponente(){
  if(xBolinha - raio < xRaqueteOponente + larguraRaquete && 
     yBolinha - raio < yRaqueteOponente + alturaRaquete &&              yBolinha + raio > yRaqueteOponente)
    
  if(!(xBolinha < 300 && velocidadeX > 0 || 
      xBolinha > 300 && velocidadeX < 0)){
      velocidadeX *= -1;
      raquetada.play();
       }   
 }

function colisaoRaquetes(){
  if(xBolinha + raio > xMinhaRaquete && 
     yBolinha - raio < yMinhaRaquete + alturaRaquete && 
     yBolinha + raio > yMinhaRaquete)
  if(!(xBolinha < 300 && velocidadeX > 0 || 
       xBolinha > 300 && velocidadeX < 0)){
       velocidadeX *= -1;
       raquetada.play();
       }   
}

  

function movimentaRaqueteOponente(){
  if(yRaqueteOponente < 0){
    yRaqueteOponente = 0;
    }else{
  if(keyIsDown(87)){
    yRaqueteOponente -=10;
  }
  }
  
  if(keyIsDown(83)){
    if(yRaqueteOponente > 300){
    yRaqueteOponente = 300;
    }else{
    yRaqueteOponente +=10;
    }
  }
}

function mostraRaqueteOponente(){
  fill(corRaqueteOponente);
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete,           alturaRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    if(yMinhaRaquete < 0){
      yMinhaRaquete = 0;
    }else{
    yMinhaRaquete -=10;
    }
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yMinhaRaquete > 300){
    yMinhaRaquete = 300;
    }else{
    yMinhaRaquete +=10;
    }
  }
}

function mostraRaquete(){
  fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete,                 alturaRaquete);
}


function mostraBolinha(){
  noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
   
  //velocidade horizontal
  xBolinha += velocidadeX;//Incremento de x
  //velocidade vertical
  yBolinha += velocidadeY;//Incremento de y
}

function verificaColisao(){
  //Colisao nas bordas laterais
  if (xBolinha + raio > largura || xBolinha - raio < 0){
    //velocidade x = velocidadex * -1 
    velocidadeX *= -1
  }
  
  //Colisao nas bordas superiores e inferiores
  if (yBolinha + raio > altura || yBolinha - raio < 0){
    velocidadeY *= -1;
  }
}