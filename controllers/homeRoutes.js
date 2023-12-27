const router = require('express').Router();
const { User , Blog } = require('../models');
//const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs
      //logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




/* 
// Initial test
router.get('/', (req, res) => {
  const message = 'success'
  res.render('homepage', {
    message
  })
}); */

router.get('/dashboard', (req,res) => {
  const message2 = 'dash success'
  res.render('homepage', {
    message2
  })
})

/* //Initial test
router.get('/blog', (req,res) => {
  const message3= 'blog success'
  res.render('homepage', {
    message3
  })
}) */

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog
     // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/login', (req, res) => {
 /*  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } */

  res.render('login works');
});

module.exports = router;
