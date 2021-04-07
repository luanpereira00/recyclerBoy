let player;
let vidaRuimImg;
let vidaMediaImg;
let vidaBoaImg;

let tempo = 0;
let temporizadorIniciado = false;
let tempoEspera = 0;

let fases = [];

let trilhaSonora;

function preload() {
	trilhaSonora = loadSound('assets/sounds/trilha.wav');
	
	vidaRuimImg = loadImage('assets/tela/vidaRuim.png');
	vidaMediaImg = loadImage('assets/tela/vidaMedia.png');
	vidaBoaImg = loadImage('assets/tela/vidaBoa.png');
	
	fases.push(new TelaInicial());
	fases.push(new FasePapel());
	fases.push(new FaseNaoReciclaveis());
	fases.push(new FaseMetal());
	fases.push(new TelaFinal());
}

function setup() {	
	iniciarFase();
	createCanvas(1000, 657);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.pular();
  }
  
  if(getFaseAtual().emApresentacao()) {
	  if (keyCode == ENTER) {
		  trilhaSonora.loop();
		  avancarFase();
	  }
  }
}

function draw() {
  background(0);
  
  image(getFaseAtual().getBackground(), 0, 0);

  if(getFaseAtual().emApresentacao() || getFaseAtual().finalizada()) {
	  return;
  }
  
  if(player.getAtingiuObjetivo()) {
	  avancarFase();
	  return;
  }
  
  drawSprites();
  player.atualizar();
  
  getFaseAtual().atualizarInimigos();
  
  if(player.morto()) {
	  if(gameOver()) {
		  desenharGameOver();
	  } else {
		  iniciarTemporizador(2);
		  if(tempo == 2) {
			  getFaseAtual().reiniciar();
			  player.nascer(getFaseAtual());
		  }
	  }
  }
  contarTempo();

  camera.position.x = player.getPosicao().x;
  
  desenharItensTela();
}

function getFaseAtual() {
	return fases[0];
}

function iniciarFase() {
	getFaseAtual().iniciar();
	if(player == null && getFaseAtual().emAndamento()) {
		player = new Player(getFaseAtual());
	}
}

function avancarFase() {
	getFaseAtual().avancar();
	
	if(getFaseAtual().finalizada()) {
		iniciarNovaFase();
		if(getFaseAtual().emAndamento()) {
			player.nascer(getFaseAtual());
		}
	}
}

function iniciarNovaFase() {
	camera.position.x = 500;
	getFaseAtual().destruir();
	fases.shift();
	iniciarFase();
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
		let menorPosicaoTela = Math.max(camera.position.x - width/2+30, 30);
		image(img, menorPosicaoTela + 60*i, 20);
	}
}

function iniciarTemporizador(tempoTotal) {
	if(!temporizadorIniciado) {
		tempo = 0;
		temporizadorIniciado = true;
		tempoEspera = tempoTotal+1;
	}
}

function contarTempo() {
	if(temporizadorIniciado) {
		if(tempo < tempoEspera) {
			if(frameCount % 60 == 0) {
				tempo++;
			}
		} else {
			temporizadorIniciado = false;
		}
	}
}

function gameOver() {
	return player.getVidas() == 0;
}

function desenharGameOver() {
	fill('rgba(0,0,0, 0.75)');
	rect(camera.position.x - width/2, 0, width, height);
	fill(255);
	textSize(80);
	textAlign(CENTER);
	text("GAME OVER", camera.position.x, height/2);
}