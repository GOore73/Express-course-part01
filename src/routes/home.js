const {Router} = require('express');
const axios = require('axios');
const router = Router();

router.get('/', (req,res)=>{
  const title = "Aplicación principal";
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "ryan",
      lastname: "perez"
    },
    {
      id: 2,
      name: "jose",
      lastname: "mc millan"
    }
  ];

  res.render('index',{
    title,
    isActive,
    users});
});

router.get("/about", (req,res)=>{
  // con render puedo enviar datos variables al view
  const title = "A cerca de";

  res.render('about');
});

router.get("/posts", async (req,res)=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  res.render('posts.ejs', { 
    posts: response.data
  });
});

router.get("/dashboard", (req,res)=>{
  res.render('dashboard');
});

module.exports = router;

