class FasePapel extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.ANDAMENTO);
    this.estados.push(estadoFase.FINALIZADA);
    
    this.background = loadImage('assets/fases/f_papel.png');
	this.posicaoInicialJogador.x = 100;
	this.posicaoInicialJogador.y = 200;
	
	this.papelImage = loadImage('assets/sprites/coletavel/papel/papel.png');
	this.objetivoImage = loadImage('assets/sprites/objetivo/papel.png')
  }
  
  inicializarObjetos() {    
    this.inicializarObstaculos();
    this.inicializarColetaveis();
    this.inicializarInimigos();
    this.inicializarObjetivo();
  }

  inicializarObstaculos() {
	this.obstaculos = [];
	    
    this.obstaculos.push(new Obstaculo(0,0,880,1));
    this.obstaculos.push(new Obstaculo(-30,0,30,700));
    this.obstaculos.push(new Obstaculo(875,0,30,700));
    
    this.obstaculos.push(new Obstaculo(0,130,223,110));
    this.obstaculos.push(new Obstaculo(710,132,170,18));
    
    this.obstaculos.push(new Obstaculo(495,158,109,9));
    this.obstaculos.push(new Obstaculo(336,225,109,9));
    
    this.obstaculos.push(new Obstaculo(128,345,164,9));
    this.obstaculos.push(new Obstaculo(414,378,220,11));
    
    this.obstaculos.push(new Obstaculo(0,545,225,131));
    this.obstaculos.push(new Obstaculo(338,492,373,190));
    this.obstaculos.push(new Obstaculo(676,547,108,108));
  }
  
  inicializarInimigos() {
    this.inimigos = [];
    
    this.inimigos.push(new Inimigo(505,460,TipoInimigo.OLHUDO,false,136,1));
  }
	  
  inicializarColetaveis() {
    this.coletaveis = [];
    
    this.coletaveis.push(new Coletavel(470,478,this.papelImage));
    this.coletaveis.push(new Coletavel(555,359,this.papelImage));
    this.coletaveis.push(new Coletavel(760,530,this.papelImage));
    this.coletaveis.push(new Coletavel(186,120,this.papelImage));
    
    this.coletaveis.push(new Coletavel(35,120,this.papelImage));
  }
  
  inicializarObjetivo() {
	  this.objetivo = new Objetivo(843,70,this.objetivoImage);
  }
}
 