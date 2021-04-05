class FaseMetal extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.ANDAMENTO);
    this.estados.push(estadoFase.FINALIZADA);
  }
  
  inicializarObjetos() {
	this.background = loadImage('assets/fases/fmetal_bg.jpg');
	this.posicaoInicialJogador.x = 100;
    this.posicaoInicialJogador.y = 200;
    
    this.inicializarObstaculos();
    this.inicializarColetaveis();
    this.inicializarInimigos();
    this.inicializarObjetivo();
  }
  
  inicializarObstaculos() {
    this.obstaculos = [];
    
    //Limites da tela
    this.obstaculos.push(new Obstaculo(0,0,4000,1));
    this.obstaculos.push(new Obstaculo(-30,0,30,660));
    this.obstaculos.push(new Obstaculo(4000,0,30,660));
    
    // Primeiro piso
    this.obstaculos.push(new Obstaculo(0,530,1061,131));
    this.obstaculos.push(new Obstaculo(462,453,392,204));
    
    //Primeiros elevados
    this.obstaculos.push(new Obstaculo(261,343,186,6));
    this.obstaculos.push(new Obstaculo(125,242,186,13));
    this.obstaculos.push(new Obstaculo(0,90,161,79));
    
    //Grande Elevado
    this.obstaculos.push(new Obstaculo(1240,533,249,123));
    this.obstaculos.push(new Obstaculo(1490,470,186,92));
    this.obstaculos.push(new Obstaculo(1680,345,193,149));
    this.obstaculos.push(new Obstaculo(1867,220,120,437));
    
    //Três itens flutuantes
    this.obstaculos.push(new Obstaculo(2007,329,120,13));
    this.obstaculos.push(new Obstaculo(2054,159,120,13));
    this.obstaculos.push(new Obstaculo(2165,410,186,13));
    
    //Piso pós Grande Elevado
    this.obstaculos.push(new Obstaculo(1990,533,498,123));
    
    //Plataforma flutuante
    this.obstaculos.push(new Obstaculo(2265,159,490,120));
    
    //Três itens flutuantes pós plataforma
    this.obstaculos.push(new Obstaculo(2807,393,120,13));
    this.obstaculos.push(new Obstaculo(2977,240,120,13));
    this.obstaculos.push(new Obstaculo(3176,329,120,13));
    this.obstaculos.push(new Obstaculo(3328,434,120,13));
    
    //Último piso
    this.obstaculos.push(new Obstaculo(3417,533,583,123));
  }
  
  inicializarInimigos() {
    this.inimigos = [];
    
    this.inimigos.push(new Inimigo(650,425,'verde',false,170,2));
    this.inimigos.push(new Inimigo(1370,505,'olhudo',false,100,2));
    this.inimigos.push(new Inimigo(1770,315,'azul',false,80,2));
    
    this.inimigos.push(new Inimigo(2473,40,'voador_vermelho',false,1000,3));
    this.inimigos.push(new Inimigo(2510,130,'azul',true,230,2));
    
    this.inimigos.push(new Inimigo(3706,510,'olhudo',true,230,3));
  }
  
  inicializarColetaveis() {
    this.coletaveis = [];
    
    let lata_laranja = loadImage('assets/sprites/coletavel/metal/lata_laranja.png');
    let lata01 = loadImage('assets/sprites/coletavel/metal/lata01.png');
    let lata_vermelha = loadImage('assets/sprites/coletavel/metal/lata_vermelha.png');
    let lata02 = loadImage('assets/sprites/coletavel/metal/lata02.png');
    let lata_verde = loadImage('assets/sprites/coletavel/metal/lata_verde.png');
    
    this.coletaveis.push(new Coletavel(30,75,lata_laranja));
    this.coletaveis.push(new Coletavel(2012,520,lata01));
    this.coletaveis.push(new Coletavel(2420,521,lata_vermelha));
    this.coletaveis.push(new Coletavel(2545,143,lata_verde));
    this.coletaveis.push(new Coletavel(2830,375,lata02));
    
  }
  
  inicializarObjetivo() {
	  this.objetivo = new Objetivo(3960,470,loadImage('assets/sprites/objetivo/metal.png'));
  }
}
 