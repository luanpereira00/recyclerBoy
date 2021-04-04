class Coletavel {
  constructor(x,y,img) {
    this.sprite = createSprite();
    this.sprite.position.x = x
    this.sprite.position.y = y;
    this.sprite.addImage(img);
  }
 
  getSprite() {
    return this.sprite;
  }
}