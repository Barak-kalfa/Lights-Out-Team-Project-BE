const randomBoolean = () => Math.random() > 0.5;

function startGame() {
  const newGrid = {
    player1: null,
    player2: null,
    A1: randomBoolean(),
    A2: randomBoolean(),
    A3: randomBoolean(),
    A4: randomBoolean(),
    A5: randomBoolean(),
    B1: randomBoolean(),
    B2: randomBoolean(),
    B3: randomBoolean(),
    B4: randomBoolean(),
    B5: randomBoolean(),
    C1: randomBoolean(),
    C2: randomBoolean(),
    C3: randomBoolean(),
    C4: randomBoolean(),
    C5: randomBoolean(),
    D1: randomBoolean(),
    D2: randomBoolean(),
    D3: randomBoolean(),
    D4: randomBoolean(),
    D5: randomBoolean(),
    E1: randomBoolean(),
    E2: randomBoolean(),
    E3: randomBoolean(),
    E4: randomBoolean(),
    E5: randomBoolean(),
  };
  return newGrid;
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
function prevChar(c) {
  return String.fromCharCode(c.charCodeAt(0) - 1);
}

function changeNextTo(id, grid) {
  const newGrid = grid;
  for (let light in grid) {
    if (light === id) {
      const L = id[0];
      const N = Number(id[1]);
            console.log('?x?x?x', grid[light]);

      grid[light] = (grid[light] );
      console.log('???', grid[light] == 1);
      const up = prevChar(L) + N;
      const down = nextChar(L) + N;
      const right = L + (N + 1);
      const left = L + (N - 1);
      grid[down] = !!grid[down];
      grid[up] = !!grid[up];
      grid[left] = !!grid[left];
      grid[right] = !!grid[right];
    }
  }
  // console.log('grid', grid);
  // const newGrid = {
  //   ...grid,
  //   [id]: !grid[id],
  // };
  // // console.log('newgrid', newGrid);
  // return newGrid;
}

module.exports = { randomBoolean, startGame, changeNextTo };
