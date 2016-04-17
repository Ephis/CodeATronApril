function Player(sprite) {
    var self = this;
    self.walkSpeed = 100;
    self.sprite = sprite;
    self.health = 100;
    self.maxHealth = 100;
    
    self.walkRightAnimation = 'WalkRight';
    self.walkLeftAnimation = 'WalkLeft';
    self.walkUpAnimation = 'WalkUp';
    self.walkDownAnimation = 'WalkDown';
    
    self.sprite.animations.add(self.walkRightAnimation, [12,13,14,15]);
    self.sprite.animations.add(self.walkLeftAnimation, [8,9,10,11]);
    self.sprite.animations.add(self.walkDownAnimation, [0,1,2,3]);
    self.sprite.animations.add(self.walkUpAnimation, [4,5,6,7]);
    
    
    self.moveRight = function() {
        player.sprite.body.velocity.x = self.walkSpeed;
        
        if(self.sprite.animations.name != self.walkRightAnimation){
            self.sprite.frame = 12;
            self.sprite.animations.play(self.walkRightAnimation, 6, true);
        }
    };
    
    self.moveLeft = function() {
        player.sprite.body.velocity.x = -self.walkSpeed;
        
        if(self.sprite.animations.name != self.walkLeftAnimation){
            player.sprite.frame = 8;
            self.sprite.animations.play(self.walkLeftAnimation, 6, true);
        }
    };
    
    self.moveDown = function() {
        player.sprite.body.velocity.y = self.walkSpeed;
        if(self.sprite.animations.name != self.walkDownAnimation){
            player.sprite.frame = 0;
            self.sprite.animations.play(self.walkDownAnimation, 6, true);
        }
    };
    
    self.moveUp = function() {
        player.sprite.body.velocity.y = -self.walkSpeed;
        
        if(self.sprite.animations.name != self.walkUpAnimation){
            player.sprite.frame = 4;
            self.sprite.animations.play(self.walkUpAnimation, 6, true);
        }
    };
};