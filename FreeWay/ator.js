//Ator
let yAtor = 366;
let xAtor = 100;
let colidiu = false;
let placar = 0;

function mostraPlacar(){
  if(yAtor < 15){
     placar += 1
    voltaAtorParaPosicaoInicial()
    somPonto.play();
     }
  
  textSize(25);
  text(placar, 110, 30)
}

function verificaColisao(){
//.collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
   colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor,15);
  if(colidiu){
  console.log("Colidiu")
    voltaAtorParaPosicaoInicial();
    somColidiu.play();
    if(placar > 0){placar -= 1;}
  }
  
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 368;
}

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(87)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor > 5)
      yAtor -= 3;
  }  
  if (keyIsDown(83)) {
    if(yAtor < 366)
      yAtor += 3;
  }
}