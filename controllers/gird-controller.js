const gridDal = require('../dal/gird-dal');
const { changeNextTo } = require('../GameLogic/GameLogic');

const addGrid = async (req, res) => {
  try {
    const {email} = req.body;
    const newGrid = await gridDal.createNewGrid(email);
    res.json(newGrid);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const click = async (req, res) => {
     const { id, email } = req.body;
     try {
          const grid = await gridDal.userClick(email, id);
          console.log('grid', grid);
          res.json(grid);
     } catch (err) {
             console.log(err);
             return res.status(400).send({ message: err.message });
     }
}

const gridController = { addGrid, click };

module.exports =  gridController ;
