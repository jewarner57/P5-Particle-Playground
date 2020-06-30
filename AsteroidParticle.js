class AsteroidParticle {
  constructor(asteroidX, asteroidY, isPointedUp, usedSide) {
    this.x = asteroidX;
    this.y = asteroidY;

    this.width = Math.random() * 10 + 10;
    this.height = Math.random() * 10 + 10;

    //find inner height of an equilateral triangle
    this.shapeHeight = Math.tan((60 * Math.PI) / 180) * 12.5;

    this.p1 = { x: this.x, y: this.y };
    this.p2 = {
      x: this.x + 12.5,
      y: isPointedUp ? this.y - this.shapeHeight : this.y + this.shapeHeight,
    };
    this.p3 = { x: this.x + 25, y: this.y };

    this.p1Connect = { x: this.p1.x, y: this.p1.y };
    this.p2Connect = { x: this.p2.x, y: this.p2.y };
    this.p3Connect = { x: this.p2.x - 25, y: this.p2.y };

    this.emptyEdges = [];

    this.usedSide = usedSide;

    switch (this.usedSide) {
      case 0:
        this.emptyEdges.push({
          x: this.p1Connect.x,
          y: this.p1Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 1,
        });
        this.emptyEdges.push({
          x: this.p2Connect.x,
          y: this.p2Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 2,
        });
        this.emptyEdges.push({
          x: this.p3Connect.x,
          y: this.p3Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 3,
        });
        break;
      case 1:
        this.emptyEdges.push({
          x: this.p3Connect.x,
          y: this.p3Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 3,
        });
        this.emptyEdges.push({
          x: this.p2Connect.x,
          y: this.p2Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 2,
        });
        break;
      case 2:
        this.emptyEdges.push({
          x: this.p3Connect.x,
          y: this.p3Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 3,
        });
        this.emptyEdges.push({
          x: this.p1Connect.x,
          y: this.p1Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 1,
        });
        break;
      case 3:
        this.emptyEdges.push({
          x: this.p2Connect.x,
          y: this.p2Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 2,
        });
        this.emptyEdges.push({
          x: this.p1Connect.x,
          y: this.p1Connect.y,
          isPointedUp: !isPointedUp,
          usedSide: 1,
        });
        break;
    }

    this.display = function () {
      stroke(110, 71, 24);
      fill(110, 71, 24);

      triangle(
        this.p1.x,
        this.p1.y,
        this.p2.x,
        this.p2.y,
        this.p3.x,
        this.p3.y
      );
    };
  }
}
