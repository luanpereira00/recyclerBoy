class Fase5 extends Fase {
  constructor() {
    super();
  }

  inicializarObjetos() {
    this.posicaoInicialJogador.x = 80;
    this.posicaoInicialJogador.y = 400;
    
    this.obstaculos = [];
    
    this.obstaculos.push(new Obstaculo(0,0,1000,1));
    
    this.obstaculos.push(new Obstaculo(0,148,256,18));
    this.obstaculos.push(new Obstaculo(810,152,256,18));
    
    this.obstaculos.push(new Obstaculo(564,178,125,13));
    this.obstaculos.push(new Obstaculo(384,258,125,13));
    
    this.obstaculos.push(new Obstaculo(146,392,188,13));
    this.obstaculos.push(new Obstaculo(472,432,255,15));
    
    this.obstaculos.push(new Obstaculo(0,560,120,5));
    this.obstaculos.push(new Obstaculo(0,625,252,131));
    this.obstaculos.push(new Obstaculo(390,560,373,190));
    this.obstaculos.push(new Obstaculo(762,625,130,125));
    
    this.background = loadImage('assets/img/f5_bg.jpg');
  }
}
 