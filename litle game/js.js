let coordinateArray = [...Array(gBArrayHeight)].map((e) =>
  Array(gBArrayWidth).fill(0)
);

let gameBoardArray = [...Array(gBArrayHeight)].map((e) =>
  Array(gBArrayWidth).fill(0)
);

function DrawTetromino() {
  for (let i = 0; i < curTetromino.length; i++) {
    let x = curTetromino[i][0] + startX;
    let y = curTetromino[i][1] + startY;

    gameBoardArray[x][y] = 1;

    let coorX = coordinateArray[x][y].x;
    let coorY = coordinateArray[x][y].y;

    ctx.fillStyle = curTetrominoColor;
    ctx.fillRect(coorX, coorY, 21, 21);
  }
}
