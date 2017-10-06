let width, height, fps;
let vertexRad, vertexMass, lineWidth, connDist, dist, mouseDist;
let maxRestSpeed, friction;

let mouseVec = { x: 0, y: 0 };
let vertices = [];
let connections = [];

function setup () {
    width = document.documentElement.clientWidth;
    height = 500;
    fps = 30;

    vertexRad = 1;
    vertexMass = 0.5;
    lineWidth = 3;
    connDist = 150;
    maxRestSpeed = 2;
    friction = 0.9;
    mouseDist = 150;

    for (let i = 0; i < 100; i ++) vertices.push(new Vertex(i));
    for (let v1 = 0; v1 < vertices.length; v1 ++)
        for (let v2 = v1 + 1; v2 < vertices.length; v2 ++)
            connections.push([vertices[v1], vertices[v2]]);

    createCanvas(width, height);
    smooth();
    ellipseMode(RADIUS);
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(lineWidth);
    fill(255);
}


function draw () {
    frameRate(fps);

    mouseVec.x = winMouseX - pwinMouseX;
    mouseVec.y = winMouseY - pwinMouseY;

    background(0);

    push();
    for (let conn of connections) {
        dist = sqrt(pow(conn[0].pos.x-conn[1].pos.x, 2) + pow(conn[0].pos.y-conn[1].pos.y, 2));
        stroke(
            0,
            map(conn[0].pos.x, vertexRad, width - vertexRad, 0, 255),
            map(conn[0].pos.y, vertexRad, height - vertexRad, 0, 255),
            (dist <= connDist) ? 1 - map(dist, 0, connDist, 0, 1) : 0
        );
        line(conn[0].pos.x, conn[0].pos.y, conn[1].pos.x, conn[1].pos.y);
    }
    pop();

    for (let vertex of vertices) {
        vertex.update();
        vertex.show();
    }

}
