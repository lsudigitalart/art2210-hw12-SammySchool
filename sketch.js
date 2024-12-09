let crabRave;
let isPlaying = false;

function preload() {
  crabRave = loadSound('bigroom.mp3');
}

function setup() {
  createCanvas(600, 600);
  drawPrompt();
}

function draw() {
  if (isPlaying) {
    let bgFlash = map(sin(frameCount * 0.1), -1, 1, 0, 255);
    background(bgFlash, 0, bgFlash);

    for (let i = 50; i > 0; i--) {
      push();
      strokeWeight(0);
      translate(width / 2, height / 2);
      rotate(frameCount * 0.05 - i * 20);
      scale(i * 0.75);

      let brightness = map(sin(frameCount * 0.2 + i), -1, 1, 150, 255);
      switch (i % 5) {
        case 0:
          fill(0, 255, 255, brightness);
          break;
        case 1:
          fill(0, 255, 0, brightness);
          break;
        case 2:
          fill(255, 255, 0, brightness);
          break;
        case 3:
          fill(255, 0, 0, brightness);
          break;
        case 4:
          fill(255, 0, 255, brightness);
          break;
        default:
          break;
      }

      square(-10, -10, 20);
      pop();
    }

    if (frameCount % 30 < 15) {
      fill(255, 255, 255, 150);
      rect(0, 0, width, height);
    }
  }
}

function mousePressed() {
  if (!isPlaying) {
    crabRave.loop();
    crabRave.setVolume(0.5);
    isPlaying = true;
    clear();
  }
}

function drawPrompt() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("CLICK HERE TO RAVE", width / 2, height / 2);
}
