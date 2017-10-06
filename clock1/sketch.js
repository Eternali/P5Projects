let width, height, fps;
let hr, mn, sc;
let endHr, endMn, endSc;

function setup () {
    width = document.documentElement.clientWidth - 20;
    height = document.documentElement.clientHeight - 20;
    fps = 60;

    createCanvas(width, height);
    angleMode(DEGREES);
}

function draw () {
    frameRate(fps);

    hr = hour();
    mn = minute();
    sc = second();

    endHr = map(hr % 12 , 0, 12, 0, 360);
    endMn = map(mn, 0, 60, 0, 360);
    endSc = map(sc, 0, 60, 0, 360);

    background(52);

    translate(width / 2, height / 2);
    rotate(-90);
    strokeWeight(15);
    noFill();
    ellipseMode(RADIUS);

    stroke(255, 100, 150);
    arc(0, 0, 300, 300, 0, endSc);

    /*
    push();
    rotate(endSc);
    stroke(200);
    line(0, 0, 200, 0);
    pop();
    */

    stroke(100, 255, 150);
    arc(0, 0, 270, 270, 0, endMn);

    stroke(150, 100, 255);
    arc(0, 0, 240, 240, 0, endHr);
}
