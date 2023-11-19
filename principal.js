var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'area_juego');
var animacion;
var flappy;
var boton;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal = {
    preload: function () {
        juego.load.image('fondo', 'img/bg.jpeg');
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
    },
    create: function () {
        animacion = juego.add.tileSprite(0, 0, 370, 550, 'fondo');

        flappy = juego.add.sprite(juego.width / 2, juego.height / 2, 'pajaros');
        flappy.frame = 1;
        flappy.animations.add('vuelo', [0, 1, 2], 10, true);

        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    
        var style = {
            font: '20px Arial',
            fill: 'black',
            align: 'center'
        }; // para darle estilo al texto

        var nameText = juego.add.text(40, 10, 'Sergio Alexander Huayllas Tirado', style); // para mostrar el nombre
        nameText.fixedToCamera = true; // para que se mantenga en la pantalla

        var titleText = juego.add.text(60, 50, 'Flappy Bird-Semana14-1', style); // para mostrar el titulo
        titleText.fixedToCamera = true; // para que se mantenga en la pantalla
    },
    update: function () {
        animacion.tilePosition.x -= 1;
        flappy.animations.play('vuelo');

        if (teclaDerecha.isDown) {
            flappy.position.x++;
        } else if (teclaIzquierda.isDown) {
            flappy.position.x--;
        } else if (teclaArriba.isDown) {
            flappy.position.y--;
        } else if (teclaAbajo.isDown) {
            flappy.position.y++;
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
