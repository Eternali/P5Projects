function Player (startX, startY) {

    this.pos = { x: startX, y: startY };
    this.vel = { x: 0, y: 0 };
    this.size = 25;

    this.update = function () {
        this.vel.y += gravity;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    };

    this.show = function () {
        push();
        stroke(200);
        fill(100);
        rect(this.pos.x, this.pos.y, this.size, this.size);
        pop();
    };

    this.reset = function () {
        this.pos.x = startX;
        this.pos.y = startY;
        this.vel.x = 0;
        this.vel.y = 0;
    };
}
