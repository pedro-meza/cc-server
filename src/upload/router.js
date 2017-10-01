"use strict";

const express = require('express');
const router  = express.Router();

router.post('/', (req, res, next) => {
  if(auth.isValid(req.body)) {
    auth.getSession(req.app.locals.dcsUrl , req.body)
      .then(session => res.send(session))
      .then(null, (err) => res.send(err));
  } else {
    res.send('invalid parameters!');
  }
})


module.exports = router;