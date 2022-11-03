// variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 13
let raio = diametro / 2

// velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

// variaveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90

// variaveis do oponente
let xRaquete2 = 580;
let yRaquete2 = 150;
let velocidadeYOponente;

let colidiu = false;

// placar do jogo
let meusPontos = 0
let pontosDoOponente = 0

//sons do jogo
let raquetada;
let ponto;
let trilha; 

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  mostraRaqueteOponente(xRaquete2,yRaquete2);
  movimentaRaqueteOponente(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;    
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaqueteOponente(x,y){
    fill(color(0,0,139))
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaquete (x,y){
  fill(color(255,215,0))
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(87))
    yRaquete -= 10;

 if (keyIsDown(83))
    yRaquete += 10;
   } 

function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW))
    yRaquete2 -= 10;

 if (keyIsDown(DOWN_ARROW))
    yRaquete2 += 10;
}

function verificaColisaoRaquete(x, y){
    colidiu = collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255)
  
  textAlign(CENTER)
  textSize(16)
  
  fill(color(0,100,0)) // Cor
  rect(240,10,40,20)
  fill(255)
  text(meusPontos, 260, 26)
 
  fill(color(0,100,0))
  rect(320,10,40,20)
  fill(255)
  text(pontosDoOponente, 340, 26)
}
  
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play()
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play()
  }   
}
  
  
  
  
  
  
  
  
  
