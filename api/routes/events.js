const express = require('express');
const router = express.Router();
const events = require('../services/events');

/* GET events. */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await events.getEach(req.params.id));
  } catch (err) {
    console.error(`Error while getting events `, err.message);
    next(err);
  }
});

/* POST event */
router.post('/', async function(req, res, next) {
    try {
      res.json(await events.create(req.body));
    } catch (err) {
      console.error(`Error while adding new event`, err.message);
      next(err);
    }
  });

/* PUT event */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await events.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating event`, err.message);
    next(err);
  }
});

/* DELETE event */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await events.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting event`, err.message);
    next(err);
  }
});
  

module.exports = router;
