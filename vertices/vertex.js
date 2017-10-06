function Vertex () {

    this.x = random(vertexRad, width-vertexRad);
    this.y = random(vertexRad, height-vertexRad);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);

    this.connections = [];

    this.update = function () {
        this.vx *= friction;
        this.vy *= friction;

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
