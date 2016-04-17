var preload = function (game) {
    this.game = game;
};

preload.prototype = {
    preload: function() {
        //Setting up the game canvas
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#eee';
        
        //Loading assets for the menu
            //Load images
        this.game.load.image('MenuStart', 'assets/menu/Menu_Red_03.png');
        this.game.load.image('MenuBackground', 'assets/menu/Background.jpg');
        
            //Load sounds
        this.game.load.audio('MenuMouseOver', 'assets/sounds/menu/mouse_over_item.wav');
        this.game.load.audio('StartGameSound', 'assets/sounds/menu/start_game_sound.wav');
        
        
        //Loading assets for the Main map
        this.game.load.tilemap('Map', 'assets/world/map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('Tileset', 'assets/world/map_tileset.png');
        this.game.load.image('WaterTileset', 'assets/world/water_tileset.png');
        
        //Loading assets for the HUD
            //Load images
        this.game.load.image('HUDHeart', 'assets/HUD/Heart.png');
        
        //Loading assets for the player
            //Load images
        this.game.load.spritesheet('David', 'assets/player/david/David_Spritesheet.png', 64, 64);
        
        //Loading assets for the enermies
            //Loading images
        this.game.load.image('JournalistFront', 'assets/enermy/journalist/Journalist_front.png');
        
        
    },
    create: function() {
        this.state.start('Menu');
    }
    
};