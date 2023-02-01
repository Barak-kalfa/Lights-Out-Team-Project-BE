const { Grid } = require('../model/grid-model');
const { startGame, changeNextTo } = require('../GameLogic/GameLogic');

async function createNewGrid(email) {
  const grid = startGame();
  grid.player1 = email;
  await Grid.create(grid);
  return Grid.findOne({ email: email });
}

async function getUserGrid(email) {
  return Grid.findOne({ email: email });
}

async function userClick(email, id) {
     const grid = await Grid.findOne({ player1: email });
     // console.log('playerGrid', grid);
     const newGrid = changeNextTo(id, grid);
     // console.log('newGrid', newGrid);
     // Grid.findOneAndUpdate({ email: email }, newGrid);
     return newGrid;
}

module.exports = { createNewGrid, getUserGrid, userClick };
