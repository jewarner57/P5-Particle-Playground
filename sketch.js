let player;
let asteroid;
let xSpeed = 0;
let ySpeed = 0;

function setup() {
  createCanvas(800, 600);

  player = new Player(500, 300, 50, 20, 0);
  asteroid = new Asteroid(100, 100, 1);
  asteroid.createChunks()
}

function draw() {
  document.getElementById('canvasLeftPos').style.width =
    window.innerWidth / 2 - 410 + 'px';

  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);

  for (let i = 0; i < player.particles.length; i++) {
    player.particles[i].display();
    if (player.particles[i].remainingLife < 0) {
      player.particles.splice(i, 1);
    }
  }

  asteroid.display()

  fill(255);
  player.display();

  if (keyIsDown(UP_ARROW) && player.speed < 5) {
    player.speed += 0.1;
  } else {
    if (player.speed > 0) {
      player.speed -= 0.1;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.rotation += 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.rotation -= 2;
  }
}
