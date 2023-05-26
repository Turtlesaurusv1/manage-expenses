const express = require('express');
const router = express.Router();
const categoryController = require('../api/expense-category/category.controller');


/* GET programming languages. */
// router.get('/', categoryController.get);
  
/* POST programming language */
router.post('/', categoryController.create);

// /* PUT programming language */
// router.put('/:id', categoryController.update);

// /* DELETE programming language */
// router.delete('/:id', categoryController.remove);

module.exports = router;
