class Inimigo {
  constructor(x,y,img) {
    this.sprite = createSprite();
    this.sprite.position.x = x
    this.sprite.position.y = y;
    this.sprite.addAnimation('normal', inimigoAnimation[img]())
  }
 
  getSprite() {
    return this.sprite;
  }
}

let inimigoAnimation = {
  azul : function() {
    return loadAnimation (
      'assets/sprites/inimigo/azul/frame-1.png',
      'assets/sprites/inimigo/azul/frame-2.png'
	  );
  },
  olhudo : function() {
    return loadAnimation (
      'assets/sprites/inimigo/olhudo/1.png',
      'assets/sprites/inimigo/olhudo/2.png',
      'assets/sprites/inimigo/olhudo/3.png',
      'assets/sprites/inimigo/olhudo/4.png',
      'assets/sprites/inimigo/olhudo/5.png',
      'assets/sprites/inimigo/olhudo/6.png',
	  );
  },
  verde : function() {
    let inimigoAnimation = loadAnimation (
      'assets/sprites/inimigo/verde/frame-1.png',
      'assets/sprites/inimigo/verde/frame-2.png',
      'assets/sprites/inimigo/verde/frame-3.png',
      'assets/sprites/inimigo/verde/frame-4.png',
      'assets/sprites/inimigo/verde/frame-5.png',
      'assets/sprites/inimigo/verde/frame-6.png',
	  );
    inimigoAnimation.frameDelay = 6;
    return inimigoAnimation;
  }
}