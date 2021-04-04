class Fase {
  constructor() {
	  this.estado = estadoFase.APRESENTACAO;
  }
  
  iniciar() {
	this.posicaoInicialJogador = {};
	this.spritesObstaculos = new Group();
	this.spritesColetaveis = new Group();
	this.spritesInimigos = new Group();
		   
	this.inicializarObjetos();
		    
	this.definirSpritesObstaculos();
	this.definirSpritesColetaveis();
	this.definirSpritesInimigos();
  }
  
  reiniciar() {
	  this.spritesObstaculos.removeSprites();
	  this.spritesColetaveis.removeSprites();
	  this.spritesInimigos.removeSprites();
	  
	  this.iniciar();
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
  
  inicializarObjetos(){}
  
  definirSpritesObstaculos(){}
  definirSpritesColetaveis(){}
  definirSpritesInimigos(){}
  
  getEstado() {
	  return this.estado;
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
}