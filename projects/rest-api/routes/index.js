var express = require('express');
var router = express.Router();


let data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/items", (req, res) => {
  res.json(data);
});

router.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id === itemId);

  if (item) {
     res.json(item);
  } else {
     res.json({ message: `item ${itemId} doesn't exist`})
  }
});

router.post("/items", (req, res) => {
  const item = req.body;
  console.log('Adding new item: ', item);

  // add new item to array
  data.push(item)

  // return updated list
  res.json(data);
});

// update an item
router.put("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = req.body;
  console.log("Editing item: ", itemId, " to be ", item);

  const updatedListItems = [];
  // loop through list to find and replace one item
  data.forEach(oldItem => {
     if (oldItem.id === itemId) {
        updatedListItems.push(item);
     } else {
        updatedListItems.push(oldItem);
     }
  });

  // delete item from list
router.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;

  console.log("Delete item with id: ", itemId);

  // filter list copy, by excluding item to delete
  const filtered_list = data.filter(item => item.id !== itemId);

  // replace old list with new one
  data = filtered_list;

  res.json(data);
});

  // replace old list with new one
  ////data = updatedListItems;

  res.json(data);
});

module.exports = router;
