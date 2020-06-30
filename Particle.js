class Particle {
  constructor(playerX, playerY, shipRotation, xOffset, yOffset) {
    this.x = playerX;
    this.y = playerY;
    this.maxLife = Math.random() * 200 + 100;
    this.remainingLife = this.maxLife;
    this.rotation = shipRotation;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.xSpeed = (Math.random() > 0.5 ? Math.random() : -Math.random()) / 4;
    this.ySpeed = (Math.random() > 0.5 ? Math.random() : -Math.random()) / 4;

    this.display = function () {
      translate(this.x, this.y);
      rotate(this.rotation);
      fill(0, Math.random() * 150, 255);
      ellipse(
        this.xOffset,
        this.yOffset,
        (Math.random() * 7 + 3) * (this.remainingLife / this.maxLife) + 0.5,
        (Math.random() * 7 + 3) * (this.remainingLife / this.maxLife) + 0.5
      );

      this.remainingLife -= 1;
      this.moveParticle();

      resetMatrix();
    };

    this.moveParticle = function () {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    };
  }
}
