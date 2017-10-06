function Vertex () {

    this.pos = { x: random(vertexRad, width-vertexRad), y: random(vertexRad, height-vertexRad) };
    this.vel = { x: random(-1.5, 1.5), y: random(-1.5, 1.5) };
    this.acc = { x: 0, y: 0 };
    this.dmouse = 0;
    this.dmousereg = 0;

    this.update = function () {

        this.dmouse = sqrt(pow(this.pos.x-winMouseX, 2) + pow(this.pos.y-winMouseY, 2));
        this.dmousereg = map(this.dmouse, 0, sqrt(pow(width, 2) + pow(height, 2)), 0, 1);

        if (this.dmouse <= mouseDist) {
            this.acc.x = mouseVec.x * (1-this.dmousereg) * vertexMass;
            this.acc.y = mouseVec.y * (1-this.dmousereg) * vertexMass;
        } else {
            this.acc.x = 0;
            this.acc.y = 0;
            if (abs(this.vel.x) > maxRestSpeed) this.vel.x *= friction;
            if (abs(this.vel.y) > maxRestSpeed) this.vel.y *= friction;
        }

        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;

        if (this.pos.x < vertexRad) this.vel.x = abs(this.vel.x);
        else if (width - vertexRad < this.pos.x) this.vel.x = -abs(this.vel.x);
        if (this.pos.y < vertexRad) this.vel.y = abs(this.vel.y);
        else if (height - vertexRad < this.pos.y) this.vel.y = -abs(this.vel.y);

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    };

    this.show = function () {
        push();
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, vertexRad, vertexRad);
        pop();
    };

}
