class TelaInicial extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.APRESENTACAO);
    this.estados.push(estadoFase.FINALIZADA);
  }
  
  iniciar() {			   
	this.inicializarObjetos();
  }
  
  inicializarObjetos() {
	this.background = loadImage('assets/fases/tela_inicial.jpg');
  }

  definirProximaFase(){
    this.proximaFase=new FasePapel();
  }
}