let width, height, fps;
let vertexRad, lineWidth, connDist;
let friction;

let vertices = [];
let connections = [];

function setup () {
    width = window.innerWidth - 16;
    height = window.innerHeight - 16;
    fps = 60;

    friction = 1;
    vertexRad = 2;
    lineWidth = 3;
    connDist = 100;

    for (let i = 0; i < 100; i ++) vertices.push(new Vertex());

    createCanvas(width, height);
    smooth();
    ellipseMode(RADIUS);
    strokeWeight(lineWidth);
    fill(255);
}


function draw () {
    frameRate(fps);

    background(0);

    for (let conn of connections) {
        stroke(
            map(conn[0].x, vertexRad, width - vertexRad, 0, 255),
            map(conn[0].y, vertexRad, height - vertexRad, 0, 255),
            map(conn[0].x*conn[0].y, vertexRad*vertexRad, (width-vertexRad)*(height-vertexRad), 0, 255),
            map(sqrt(pow(conn[0].x-conn[1].x, 2) + pow(conn[0].y-conn[1].y, 2)), 0, 50, 0, 1)
        );
        line(conn[0].x, conn[0].y, conn[1].x, conn[1].y);
        if (sqrt(pow(conn[0].x-conn[1].x, 2) + pow(conn[0].y-conn[1].y, 2)) > connDist)
            connections.splice(conn, 1);
    }

    for (let v1 of vertices) {
        for (let v2 of vertices) {
            if (sqrt(pow(v1.x-v2.x, 2) + pow(v1.y-v2.y, 2)) <= connDist &&
                (connections.indexOf([v1, v2]) < 0 || connections.indexOf([v2, v1]) < 0))
                connections.push([v1, v2]);
        }
        v1.update();
        v1.show();
    }

    displayText(20, 20, frameRate());

}

function displayText (x, y, msg) {
    push();
    noStroke();
    fill(255);
    text(msg, x, y);
    pop();
}
