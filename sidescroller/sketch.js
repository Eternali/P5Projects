let width, height, fps, gravity;
let player;

let floors = {};


function setup () {
    width = 800;
    height = 400;
    fps = 60;
    gravity = 0.2;

    player = new Player(150, 150);
    for (let f = 0; f < 10; f ++)
        floors.push(new Floor());

    createCanvas(width, height);
    smooth();
    ellipseMode(RADIUS);
    rectMode(CENTER);
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(2);
}


function draw () {
    frameRate(fps);

    player.update();
    if (player.pos.y - player.size > height) player.reset();

    background(51);

    player.show();
}


function windowResized () {
    width = window.innerWidth;
    height = window.innerHeight;
}
