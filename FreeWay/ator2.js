let yAtor2 = 366;
let xAtor2 = 400;
let placar2 =0;

function verificaColisao2(){
//.collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
   colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor2, yAtor2,15);
  if(colidiu){
  console.log("Colidiu")
    voltaAtorParaPosicaoInicial2();
    somColidiu.play();
    if(placar2 > 0){placar2 -= 1;}
  }
  
  }
}

function voltaAtorParaPosicaoInicial2(){
  yAtor2 = 368;
}

function mostraPlacar2(){
  if(yAtor2 < 15){
     placar2 += 1
    voltaAtorParaPosicaoInicial2()
    somPonto.play();
     }
  
  textSize(25);
  text(placar2, 400, 30)
}

function mostraAtor2(){
  image(imagemDoAtor2,xAtor2, yAtor2, 30, 30);
}

function movimentaAtor2(){
  if (keyIsDown(UP_ARROW)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor2 > 5)
      yAtor2 -= 3;
  }  
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor2 < 366)
      yAtor2 += 3;
  }
}
