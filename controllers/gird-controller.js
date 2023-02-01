const gridDal = require('../dal/gird-dal');
const { changeNextTo } = require('../GameLogic/GameLogic');

const addGrid = async (req, res) => {
  const { email } = req.body;
  try {
    const oldGrid = await gridDal.getUserGrid(email);
    if (oldGrid) {
      console.log('oldgrid', oldGrid);
      res.json(oldGrid);
      return;
    }
    const newGrid = await gridDal.createNewGrid(email);
    console.log('newGrid', newGrid);
    res.json(newGrid);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const click = async (req, res) => {
  const { id, email } = req.body;
  console.log(id, email);
  try {
    const grid = await gridDal.userClick(email, id);
    res.json(grid);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const gridController = { addGrid, click };

module.exports = gridController;
