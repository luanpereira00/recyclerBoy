class Fase {
  constructor() {
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
	  this.definirSpritesColetaveis();
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