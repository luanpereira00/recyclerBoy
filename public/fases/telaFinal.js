class TelaFinal extends Fase {
  constructor() {
    super();
    
    this.estados.push(estadoFase.FINALIZADA);
  }
  
  iniciar() {			   
	this.inicializarObjetos();
  }
  
  inicializarObjetos() {
	this.background = loadImage('assets/fases/tela_final.jpg');
  }
}