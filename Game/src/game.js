var main = main || {};

main.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

main.game.state.add('Preload', preload);
main.game.state.add('Menu', menu);
main.game.state.add('MainTown', mainTown);

main.game.state.start('Preload');