class Player {
  constructor(x, y, width, height, rotation) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.speed = 0.1;
    this.particles = [];

    this.display = function () {
      translate(this.x, this.y);
      angleMode(DEGREES);
      rotate(this.rotation);
      noStroke();

      rect(0, 0, this.width, this.height);
      rect(-20, 13, this.width / 2, this.height / 2);
      rect(-20, -13, this.width / 2, this.height / 2);

      if (this.speed > 0) {
        this.movePlayer();
      }
    };

    this.movePlayer = function () {
      this.getAngleSpeed();
      this.x += xSpeed;
      this.y += ySpeed;

      this.spawnParticles();
    };

    this.spawnParticles = function () {
      if (Math.random() * 10 > 5) {
        this.particles.push(
          new Particle(this.x, this.y, this.rotation, -40, 14)
        );
      } else {
        this.particles.push(
          new Particle(this.x, this.y, this.rotation, -40, -14)
        );
      }
    };

    this.getAngleSpeed = function () {
      xSpeed = this.speed * cos(this.rotation);
      ySpeed = this.speed * sin(this.rotation);
    };
  }
}
