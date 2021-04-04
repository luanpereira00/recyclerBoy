class Fase1 extends Fase {
  constructor() {
    super();
  }
  
  inicializarObjetos() {
    this.posicaoInicialJogador.x = 700;
    this.posicaoInicialJogador.y = 400;
    
    this.inicializarObstaculos();
    this.inicializarColetaveis();
    this.inicializarInimigos();
    
    this.background = loadImage('assets/fases/f1_bg.jpg');
  }
  
  inicializarInimigos() {
    this.inimigos = [];
    
    this.inimigos.push(new Inimigo(1044,505,'verde',false,300,2));
  }
  
  inicializarColetaveis() {
    this.coletaveis = [];
    
    let cascaOvoImg = loadImage('assets/sprites/coletavel/nao_reciclaveis/espelho.png');
    
    this.coletaveis.push(new Coletavel(700,307,cascaOvoImg));
  }
  
  inicializarObstaculos() {
    this.obstaculos = [];
    //this.obstaculos.push(new Obstaculo(0,211,163,80));
    
    //this.obstaculos.push(new Obstaculo(122,335,188,13));
    
    //this.obstaculos.push(new Obstaculo(260,436,188,13));
    
    this.obstaculos.push(new Obstaculo(0,0,5000,1));
    this.obstaculos.push(new Obstaculo(-30,0,30,750));
    this.obstaculos.push(new Obstaculo(4995,0,30,750));
    
    this.obstaculos.push(new Obstaculo(0,532,1344,131));
    this.obstaculos.push(new Obstaculo(512,403,315,13));
    
    this.obstaculos.push(new Obstaculo(1531,534,1613,124));
    this.obstaculos.push(new Obstaculo(1837,403,315,13));
    this.obstaculos.push(new Obstaculo(2009,278,569,13));
    
    this.obstaculos.push(new Obstaculo(2399,404,745,260));
    
    this.obstaculos.push(new Obstaculo(3410,532,1585,131));
    
    this.obstaculos.push(new Obstaculo(2962,252,121,13));
    this.obstaculos.push(new Obstaculo(3157,137,180,13));
    
    this.obstaculos.push(new Obstaculo(3776,410,117,125));
    this.obstaculos.push(new Obstaculo(4349,410,117,125));
    
    //this.obstaculos.push(new Obstaculo(460,545,393,99));
  }
}
 