const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

/* GET users. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/* POST user */
router.post('/', async function(req, res, next) {
  console.log(req.body);  
  try {
      res.json(await users.create(req.body));
    } catch (err) {
      console.error(`Error while registering new user`, err.message);
      next(err);
    }
  });

/* UPDATE user */
router.post('/:id', async function(req, res, next) {
  try {
    res.json(await users.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

/* DELETE user */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await users.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

/* LOGIN user. */
router.post('/:username', async function(req, res, next) {
  try {
    res.json(await users.login(req.query.username, req.body));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});
  

module.exports = router;
