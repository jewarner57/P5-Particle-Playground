let player;
let asteroid;
let xSpeed = 0;
let ySpeed = 0;
let scrollX = 0;
let scrollY = 0;

function setup() {
  createCanvas(800, 600);

  player = new Player(500, 300, 50, 20, 0);
  asteroid = new Asteroid(100, 100, 200);
  asteroid.createChunks();
}

function draw() {
  declareCanvasOptions(DEGREES, CENTER, 0);

  asteroid.display();
  player.display();
  player.drawParticles();

  trackKeyEvents();
}

function declareCanvasOptions(angleUnit, rectOrigin, backgroundColor) {
  document.getElementById('canvasLeftPos').style.width =
    window.innerWidth / 2 - 410 + 'px';

  angleMode(angleUnit);
  rectMode(rectOrigin);
  background(backgroundColor);
}

function trackKeyEvents() {
  if (keyIsDown(UP_ARROW) && player.speed < 5) {
    player.spawnParticles();
    player.speed += 0.1;
  } else {
    if (player.speed > 0) {
      player.speed -= 0.1;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.rotation += 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.rotation -= 3;
  }
}
