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
      if (this.chunks.length === 0) {
        this.chunks.push(new TriangularParticle(this.x, this.y, true, 0));
      }

      while (this.chunks.length <= chunkCount) {
        let emptyEdge = this.findEmptyChunkEdge()
        this.chunks.push(new TriangularParticle(emptyEdge.x, emptyEdge.y, emptyEdge.isPointedUp, emptyEdge.usedSide))
      }

    };

    this.findEmptyChunkEdge = function () {

      let edge;
      while (edge === undefined) {
        let i = Math.floor(Math.random() * this.chunks.length)
        if (i < 0) {
          i++
        }
        console.log(i)
        console.log(this.chunks[i].emptyEdges)




        if (this.chunks[i].emptyEdges.length > 0) {

          edge = this.chunks[i].emptyEdges[0];
          this.chunks[i].emptyEdges.shift()

        }
      }
      return edge
    }
  }
}
