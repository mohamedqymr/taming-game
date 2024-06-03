# taming-game
TamingIO/
│
├── index.html
├── main.js
├── style.css
└── assets/
    ├── images/
    │   ├── player.png
    │   ├── animal1.png
    │   ├── animal2.png
    │   └── ...
    └── sounds/
        ├── background.mp3
        ├── attack.wav
        ├── eat.wav
        └── ...
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TamingIO - Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.65.1/dist/phaser.js"></script>
    <script src="main.js"></script>
</body>
</html>
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // تحميل الصور والأصوات الخاصة باللعبة
    this.load.image('player', 'assets/images/player.png');
    // قم بتحميل المزيد من الصور والأصوات هنا...
}

function create() {
    // إنشاء المشهد والكائنات الأساسية
    this.add.image(400, 300, 'player');
    // إضافة المزيد من الكائنات هنا...
}

function update() {
    // تحديث حالة اللعبة بشكل مستمر
    // يمكنك إضافة التفاعلات والحركة هنا...
}
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #222;
}

canvas {
    display: block;
    margin: auto;
    background-color: #fff;
    border: 1px solid #ccc;
}
git clone https://github.com/اسم-المستودع/TamingIO.git
git add .
git commit -m "تحديث اللعبة"
git push origin main
