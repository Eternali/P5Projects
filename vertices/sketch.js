let width, height, fps;
let vertexRad, vertexMass, lineWidth, connDist, dist;
let friction;

let mouseVec = { x: 0, y: 0 };
let vertices = [];
let connections = [];

function setup () {
    width = window.innerWidth - 16;
    height = window.innerHeight - 16;
    fps = 30;

    friction = 1;
    vertexRad = 2;
    vertexMass = 0.5;
    lineWidth = 3;
    connDist = 150;

    for (let i = 0; i < 50; i ++) vertices.push(new Vertex());
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
        dist = sqrt(pow(conn[0].x-conn[1].x, 2) + pow(conn[0].y-conn[1].y, 2));
        stroke(
            0,
            map(conn[0].x, vertexRad, width - vertexRad, 0, 255),
            map(conn[0].y, vertexRad, height - vertexRad, 0, 255),
            (dist <= connDist) ? 1 - map(dist, 0, connDist, 0, 1) : 0
        );
        line(conn[0].x, conn[0].y, conn[1].x, conn[1].y);
    }
    pop();

    for (let vertex of vertices) {
        vertex.update();
        vertex.show();
    }

}
