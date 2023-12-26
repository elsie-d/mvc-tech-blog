const router = require('express').Router();
//const { User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  const message = 'success'
  res.render('homepage', {
    message
  })
});

router.get('/dashboard', (req,res) => {
  const message2 = 'dash success'
  res.render('homepage', {
    message2
  })
})

router.get('/login', (req, res) => {
 /*  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } */

  res.render('login works');
});

module.exports = router;
