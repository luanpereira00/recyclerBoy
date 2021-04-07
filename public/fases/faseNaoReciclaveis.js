class FaseNaoReciclaveis extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.ANDAMENTO);
    this.estados.push(estadoFase.FINALIZADA);
    
    this.background = loadImage('assets/fases/f1_bg.jpg');
	this.posicaoInicialJogador.x = 100;
	this.posicaoInicialJogador.y = 100;
	
	this.caixa_pizzaImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/caixa_pizza.png');
    this.cupom_fiscalImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/cupom_fiscal.png');
    
    this.espelhoImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/espelho.png');
    this.fita_crepeImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/fita_crepe.png');
    this.papel_higienicoImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/papel_higienico.png');
    
    this.esponjaImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/esponja.png');
    this.papel_carbonoImage = loadImage('assets/sprites/coletavel/nao_reciclaveis/papel_carbono_2.png');
    
    this.objetivoImage = loadImage('assets/sprites/objetivo/nao_reciclaveis.png');
  }
  
  inicializarObjetos() {    
    this.inicializarObstaculos();
    this.inicializarColetaveis();
    this.inicializarInimigos();
    this.inicializarObjetivo();
  }
  
  inicializarInimigos() {
    this.inimigos = [];
    
    this.inimigos.push(new Inimigo(1044,505,'verde',false,300,2));
    
    this.inimigos.push(new Inimigo(1995,375,'azul',false,150,2));
    this.inimigos.push(new Inimigo(2190,502,'olhudo',true,150,2));
    this.inimigos.push(new Inimigo(2415,255,'verde',false,100,2));
    this.inimigos.push(new Inimigo(2787,350,'voador_verde',false,300,3));
    
    this.inimigos.push(new Inimigo(3200,90,'voador_vermelho',false,500,4));
    
    this.inimigos.push(new Inimigo(4125,503,'verde',false,180,2));
    this.inimigos.push(new Inimigo(4125,502,'olhudo',true,180,2));
    
    this.inimigos.push(new Inimigo(4740,505,'azul',true,180,2));
  }
  
  inicializarColetaveis() {
    this.coletaveis = [];
    
    this.coletaveis.push(new Coletavel(680,385,this.caixa_pizzaImage));
    this.coletaveis.push(new Coletavel(1100,520,this.cupom_fiscalImage));
    
    this.coletaveis.push(new Coletavel(2100,367,this.espelhoImage));
    this.coletaveis.push(new Coletavel(2370,508,this.fita_crepeImage));
    this.coletaveis.push(new Coletavel(2520,257,this.papel_higienicoImage));
    
    this.coletaveis.push(new Coletavel(4047,515,this.esponjaImage));
    this.coletaveis.push(new Coletavel(4203,515,this.papel_carbonoImage));    
  }
  
  inicializarObstaculos() {
    this.obstaculos = [];
    
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
    
    this.obstaculos.push(new Obstaculo(2962,254,121,13));
    this.obstaculos.push(new Obstaculo(3157,137,180,13));
    
    this.obstaculos.push(new Obstaculo(3776,410,117,125));
    this.obstaculos.push(new Obstaculo(4349,410,117,125));
  }
  
  inicializarObjetivo() {
	  this.objetivo = new Objetivo(4942,471,this.objetivoImage);
  }
}
 