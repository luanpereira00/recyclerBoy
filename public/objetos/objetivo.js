class Objetivo {
  constructor(x,y,img) {
	this.x = x + 16;
	this.y = y + 30;
    this.sprite = createSprite();
    this.sprite.position.x = this.x;
    this.sprite.position.y = this.y;
    this.sprite.addImage(img);
  }
 
  getSprite() {
    return this.sprite;
  }
}