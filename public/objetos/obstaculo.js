class Obstaculo {
  constructor(x,y,largura,altura) {
    this.x = x + largura/2;
    this.y = y + altura/2;
    this.largura = largura;
    this.altura = altura;
    this.sprite = createSprite(this.x, this.y, this.largura, this.altura);
    //this.sprite.shapeColor = color(0,0,0,0);
  }
  
  getSprite() {
    return this.sprite;
  }
}