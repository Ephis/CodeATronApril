var mainTown = function(game) {
    this.game = game;
}

var hud;

var map;
var background;
var collision;
var foreground;
var water;

var player;

var mapGroup;

mainTown.prototype = {
    preload: function(){
        
    },
    create: function(){
        mapGroup = this.game.add.group();
        
        map = this.game.add.tilemap('Map');
        map.addTilesetImage('16 x 16 rpg tiles final', 'Tileset');
        map.addTilesetImage('Water', 'WaterTileset');
        background = map.createLayer('Background');
        water = map.createLayer('Water');
        collision = map.createLayer('Obstacles');
        foreground = map.createLayer('Foreground');
        
        mapGroup.add(background);
        mapGroup.add(water);
        mapGroup.add(collision);
        mapGroup.add(foreground);
        
        background.resizeWorld();
        
        //mapGroup.scale.set(3);
        
        
        //Setting up the player
        var playerSprite = this.game.add.sprite(100, 100, 'David');
        playerSprite.frame = 0;
        player = new Player(playerSprite);
        player.sprite.anchor.set(0.5);
        
        //Physics
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        
        //Physics engine create collision bodies from the tiles
        this.game.physics.enable(player.sprite);
        this.game.physics.arcade.enable(map);
        
        //Player physics and scaling
        player.sprite.body.collideWorldBounds = true;
        player.sprite.scale.set(5);
        
        //Setting up the camera
        this.game.camera.follow(player.sprite);
        
        
        //Controls
        cursors = this.game.input.keyboard.createCursorKeys();
        self.shift = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
        self.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        self.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        self.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        self.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        
        //Setting up HUD
        hud = new HUD(this.game);
        hud.drawHud();
        hud.updateHpBar(player);
    },
    update: function() {
        var movingX = true;
        var movingY = true;
        //Controll movement an player inputs
        if(self.rightKey.isDown) {
            player.moveRight();
        } else if(self.leftKey.isDown) {
            player.moveLeft();
        } else {
            movingX = false;
            player.sprite.body.velocity.x = 0;
        }
        
        if(self.upKey.isDown) {
            player.moveUp();
        } else if(self.downKey.isDown) {
            player.moveDown();
        } else {
            movingY = false;
            player.sprite.body.velocity.y = 0;
        }
        
        if(!movingX && !movingY){
            player.sprite.animations.currentAnim = null;
        }
    }
};