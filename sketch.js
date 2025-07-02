let altura = 0; // Altura inicial da planta
let velocidadeCrescimento = 0.5; // Velocidade do crescimento
let folhas = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // Desenhando o solo
  fill(0, 200, 0);
  rect(0, height - 50, width, 50);

  // Desenhando o caule
  fill(139, 69, 19); // Cor de marrom para o caule
  rect(width / 2 - 10, height - 50 - altura, 20, altura);

  // Desenhando as folhas
  for (let i = 0; i < folhas.length; i++) {
    fill(34, 139, 34);
    ellipse(folhas[i].x, folhas[i].y, 30, 15);
  }

  // Fazendo a planta crescer
  if (altura < height - 100) {
    altura += velocidadeCrescimento;
  }

  // Adicionando folhas
  if (frameCount % 60 == 0 && folhas.length < 5) {
    let xOffset = random(-30, 30);
    let yOffset = height - 50 - altura + random(-10, 10);
    folhas.push(createVector(width / 2 + xOffset, yOffset));
  }
}