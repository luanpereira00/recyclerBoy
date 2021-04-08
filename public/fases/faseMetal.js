class FaseMetal extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.ANDAMENTO);
    this.estados.push(estadoFase.FINALIZADA);
    
    this.background = loadImage('assets/fases/fmetal_bg.jpg');
	this.posicaoInicialJogador.x = 20;
	this.posicaoInicialJogador.y = 200;
	
	this.lata_laranjaImage = loadImage('assets/sprites/coletavel/metal/lata_laranja.png');
    this.lata01Image = loadImage('assets/sprites/coletavel/metal/lata01.png');
    this.lata_vermelhaImage = loadImage('assets/sprites/coletavel/metal/lata_vermelha.png');
    this.lata02Image = loadImage('assets/sprites/coletavel/metal/lata02.png');
    this.lata_verdeImage = loadImage('assets/sprites/coletavel/metal/lata_verde.png');
    
    this.objetivoImage = loadImage('assets/sprites/objetivo/metal.png');
  }
  
  inicializarObjetos() {    
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
    
    this.inimigos.push(new Inimigo(650,425,TipoInimigo.VERDE,false,170,2));
    this.inimigos.push(new Inimigo(1370,505,TipoInimigo.OLHUDO,false,100,2));
    this.inimigos.push(new Inimigo(1770,315,TipoInimigo.AZUL,false,80,2));
    
    this.inimigos.push(new Inimigo(2200,512,TipoInimigo.VERDE,true,180,3));
    this.inimigos.push(new Inimigo(2240,512,TipoInimigo.OLHUDO,false,230,4));
    
    this.inimigos.push(new Inimigo(2473,40,TipoInimigo.VOADOR_VERMELHO,false,1000,3));
    this.inimigos.push(new Inimigo(2510,130,TipoInimigo.AZUL,true,230,2));
    
    this.inimigos.push(new Inimigo(3000,300,TipoInimigo.VOADOR_VERDE,false,300,5));
    
    this.inimigos.push(new Inimigo(3706,510,TipoInimigo.OLHUDO,true,230,3));
    this.inimigos.push(new Inimigo(3706,510,TipoInimigo.VERDE,false,230,3));
    //Quando for implementado um nível de dificuldade
    //this.inimigos.push(new Inimigo(3800,510,TipoInimigo.AZUL,false,150,3));
  }
  
  inicializarColetaveis() {
    this.coletaveis = [];
    
    this.coletaveis.push(new Coletavel(30,75,this.lata_laranjaImage));
    this.coletaveis.push(new Coletavel(2012,520,this.lata01Image));
    this.coletaveis.push(new Coletavel(2240,521,this.lata_laranjaImage));
    this.coletaveis.push(new Coletavel(2420,521,this.lata_vermelhaImage));
    this.coletaveis.push(new Coletavel(2545,143,this.lata_verdeImage));
    this.coletaveis.push(new Coletavel(2830,375,this.lata02Image));
  }
  
  inicializarObjetivo() {
	  this.objetivo = new Objetivo(3960,470,this.objetivoImage);
  }
}
 