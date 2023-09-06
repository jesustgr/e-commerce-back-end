const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      include: [{ model: Product }] 
    });
    res.status(200).json(categoryData);
  }
  catch (error){
    res.status(404).send(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryDataById = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    res.status(200).json(categoryDataById);
  }
  catch (error) {
    res.status(400).send(error);
  }
  
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCategory = req.body;
    await Category.create(newCategory);
    res.status(200).json(newCategory);
  }
  catch (error){
    res.status(400).send(error);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatedCategory);
  }
  catch (error){
    res.status(400).send(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
