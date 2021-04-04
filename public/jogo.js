let player;
let faseAtual;
let vidaRuimImg;
let vidaMediaImg;
let vidaBoaImg;

function setup() {
  faseAtual = new Fase1();
  createCanvas(1000, 657);
  
  player = new Player(faseAtual);
  
  vidaRuimImg = loadImage('assets/tela/vidaRuim.png');
  vidaMediaImg = loadImage('assets/tela/vidaMedia.png');
  vidaBoaImg = loadImage('assets/tela/vidaBoa.png');
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.pular();
  }
}

function draw() {
  background(0);
  
  image(faseAtual.getBackground(), 0, 0);
  drawSprites();
  player.atualizar();
  
  faseAtual.atualizarInimigos();
  
  if(player.morto()) {
	  faseAtual.reiniciar();
	  player.nascer(faseAtual);
  }

  camera.position.x = player.getPosicao().x;
  
  desenharItensTela();
}

function desenharItensTela() {
	desenharVidas();
}

function desenharVidas() {
	let img;
	if(player.getVidas() == 1)
		img = vidaRuimImg;
	if(player.getVidas() == 2)
		img = vidaMediaImg;
	if(player.getVidas() >= 3)
		img = vidaBoaImg;
	
	for(let i = 0; i < player.getVidas(); i++) {
		let menorPosicaoTela = constrain(camera.position.x - width/2+30, 30, width);
		image(img, menorPosicaoTela + 60*i, 20);
	}
}