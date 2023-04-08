const {Router} = require ('express');
const router = Router();

router.get('/UserName', (req, res)=>{
  res.send("Username route");
});

router.get('/users', (req, res)=>{
  res.render('users');
});

module.exports = router;
