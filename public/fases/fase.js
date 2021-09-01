class Fase {
  constructor() {
	  this.estados = [];
	  this.posicaoInicialJogador = {};
  }
  
  iniciar() {
	this.spritesObstaculos = new Group();
	this.spritesColetaveis = new Group();
	this.spritesInimigos = new Group();
  this.proximaFase = null;
		   
	this.inicializarObjetos();
		    
	this.definirSpritesObstaculos();
	this.definirSpritesColetaveis();
	this.definirSpritesInimigos();
  }
  
  reiniciar() {
	  this.destruir();	  
	  this.iniciar();
  }
  
  destruir() {
	  if(this.spritesObstaculos)
		  this.spritesObstaculos.removeSprites();
	  if(this.spritesColetaveis)
		  this.spritesColetaveis.removeSprites();
	  if(this.spritesInimigos)
		  this.spritesInimigos.removeSprites();
	  if(this.objetivo && this.objetivo.getSprite())
		  this.objetivo.getSprite().remove();
  }
  
  atualizarInimigos() {
	for(let i = 0; i < this.inimigos.length; i++) {
		this.inimigos[i].atualizar();
	}
  }
  
  definirSpritesObstaculos() {    
    for(let i = 0; i < this.obstaculos.length; i++) {
      this.spritesObstaculos.add(this.obstaculos[i].getSprite());
    }
  }
  
  definirSpritesColetaveis() {
    for(let i = 0; i < this.coletaveis.length; i++) {
      this.spritesColetaveis.add(this.coletaveis[i].getSprite());
    }
  }
  
  definirSpritesInimigos() {
    for(let i = 0; i < this.inimigos.length; i++) {
      this.spritesInimigos.add(this.inimigos[i].getSprite());
    }
  }

  definirProximaFase(){
    return;
  }
  
  emApresentacao() {
	  return this.getEstado() == estadoFase.APRESENTACAO;
  }
  
  emAndamento() {
	  return this.getEstado() == estadoFase.ANDAMENTO;
  }
  
  finalizada() {
	  return this.getEstado() == estadoFase.FINALIZADA;
  }
  
  avancar() {
	  if(this.estados.length >= 0)
		  this.estados.shift();
  }
  
  getEstado() {
	  return this.estados[0];
  }
  
  getPosicaoInicialJogador() {
    return this.posicaoInicialJogador;
  }
  
  getBackground() {
    return this.background;
  }
  
  getObstaculos() {
    return this.spritesObstaculos;
  }
  
  getInimigos() {
    return this.spritesInimigos;
  }
  
  getColetaveis() {
    return this.spritesColetaveis;
  }
  
  getObjetivo() {
	  return this.objetivo.getSprite();
  }

  getProximaFase(){
    return this.proximaFase;
  }
}