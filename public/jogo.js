let player;
let faseAtual;

function setup() {
  faseAtual = new Fase1();
  createCanvas(1000, 657);
  
  player = new Player(faseAtual);
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

  camera.position.x = player.getPosicao().x;
}