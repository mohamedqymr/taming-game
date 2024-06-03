const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let resources;
let animals;
let score = 0;
let scoreText;

function preload() {
    this.load.image('player', 'https://example.com/path/to/player.png'); // قم بتحديث المسار
    this.load.image('resource', 'https://example.com/path/to/resource.png'); // قم بتحديث المسار
    this.load.image('animal', 'https://example.com/path/to/animal.png'); // قم بتحديث المسار
}

function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);

    resources = this.physics.add.group({
        key: 'resource',
        repeat: 10,
        setXY: { x: 12, y: 12, stepX: 70 }
    });

    animals = this.physics.add.group({
        key: 'animal',
        repeat: 5,
        setXY: { x: 100, y: 100, stepX: 100 }
    });

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.overlap(player, resources, collectResource, null, this);
    this.physics.add.overlap(player, animals, tameAnimal, null, this);

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}

function collectResource(player, resource) {
    resource.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);
}

function tameAnimal(player, animal) {
    animal.disableBody(true, true);
    score += 20;
    scoreText.setText('Score: ' + score);
}
