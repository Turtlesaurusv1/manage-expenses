const categortService = require("./category.service");

async function create(req, res, next) {
  try {
    res.json(await categortService.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

module.exports = {
  create,
};
