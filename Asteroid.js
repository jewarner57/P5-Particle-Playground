class Asteroid {
  constructor(x, y, chunkCount) {
    this.x = x;
    this.y = y;
    this.chunks = [];

    this.display = function () {
      for (let i = 0; i < this.chunks.length; i++) {
        this.chunks[i].display();
      }
    };

    this.createChunks = function () {
      for (let i = 0; i < chunkCount; i++) {
        this.chunks.push(new RockChunk(0, 0));
      }
    };
  }
}
