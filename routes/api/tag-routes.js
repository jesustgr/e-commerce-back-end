const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  }
  catch (error){
    res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(tagById);
  }
  catch (error){
    res.status(400).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }
  catch (error){
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagUpdated = await Tag.update(req.body,{
      where:{
        id: req.params.id
      }
    });
    res.status(200).json(tagUpdated);
  }
  catch(error){
    res.status(400).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
