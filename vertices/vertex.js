function Vertex () {

    this.x = random(vertexRad, width-vertexRad);
    this.y = random(vertexRad, height-vertexRad);
    this.vx = random(-1.5, 1.5);
    this.vy = random(-1.5, 1.5);

    this.force = { x: 0; y: 0 };

    this.update = function () {
        this.vx += this.force.x * vertexMass;
        this.vy += this.force.y * vertexMass;

        if (this.x < vertexRad) this.vx = abs(this.vx);
        else if (width - vertexRad < this.x) this.vx = -abs(this.vx);
        if (this.y < vertexRad) this.vy = abs(this.vy);
        else if (height - vertexRad < this.y) this.vy = -abs(this.vy);

        this.x += this.vx;
        this.y += this.vy;
    };

    this.show = function () {
        push();
        stroke(255);
        fill(255);
        ellipse(this.x, this.y, vertexRad, vertexRad);
        pop();
    };

}
