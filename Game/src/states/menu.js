var menu = function(game) {
    this.game = game;
};
var background;
var startBtn;

menu.prototype = {
    create: function() {
        //Adding the menu background
        background = this.game.add.tileSprite(0, 0, 800, 600, 'MenuBackground');
        background.scale.set(1.3, 1.5);
        
        //Setting up the start button
        startBtn = this.game.add.button(400,500, 'MenuStart', this.startGame, this);
        startBtn.anchor.set(0.5);
        startBtn.events.onInputOver.add(this.over, this);
        startBtn.events.onInputOut.add(this.out, this);
    },
    update: function() {
        
    },
    
    startGame: function(){
        this.game.sound.play('StartGameSound');
        this.state.start('MainTown');
    },
    over: function(){
        this.game.sound.play('MenuMouseOver');
        startBtn.scale.set(1.1, 1.1);
    },
    out: function() {
        startBtn.scale.set(1, 1);
    }
};