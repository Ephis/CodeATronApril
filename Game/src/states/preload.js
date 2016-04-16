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
        
        //Load images
        this.game.load.image('MenuStart', 'assets/menu/Menu_Red_03.png');
        this.game.load.image('MenuBackground', 'assets/menu/Background.jpg');
        
        //Load sounds
        this.game.load.audio('MenuMouseOver', 'assets/sounds/menu/mouse_over_item.wav');
        this.game.load.audio('StartGameSound', 'assets/sounds/menu/start_game_sound.wav');
    },
    create: function() {
        this.state.start('Menu');
    }
    
};