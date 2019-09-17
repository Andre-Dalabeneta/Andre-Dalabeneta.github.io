function setup() { //Preparação
  createCanvas(500, 400);
  //trilhaSonora.play();
}

function draw() { //Desenha o Jogo
  background(imagemDaEstrada);    
  mostraAtor();
  mostraAtor2();
  movimentaAtor();
  movimentaAtor2();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  verificaColisao2();
  mostraPlacar();
  mostraPlacar2();
  fimDeJogo();
  fimDeJogo2();
}//Fim do Draw
