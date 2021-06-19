const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM genres JOIN movies_genres ON genre_id = genres.id WHERE movie_id=$1';
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get genre details', err);
      res.sendStatus(500)
    })
});

module.exports = router;