var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user

  let products=[{
    price:"1,39,900 Rs",
    name:"iPhone 13 Pro Max",
    description:"Apple iPhone 13 Pro Max (Alphine Green, 256 GB)",
    Image:"https://rukminim1.flixcart.com/image/832/832/l0igvww0/mobile/2/g/r/-original-imagca5kqvhuscnv.jpeg?q=70"
  },
  {
    price:"1,09,999 Rs",
    name:"Galaxy S22 Ultra",
    description:"SAMSUNG Galaxy S22 Ultra 5G (Phantom White, 256 GB)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/y/c/t/-original-imaggj699hhujaqe.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  },
  {
    price:"56,990 Rs",
    name:"iQOO 9T 5G",
    description:"iQOO 9T 5G (ALPHA, 256 GB)  (12 GB RAM)",
    Image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/k/9t-5g-i2201-iqoo-original-imaghv89yteth3g5.jpeg?q=70"
  }
]
if(req.session.loggedIn){
  res.render('index',{products,user});
  console.log(user)
}else{
  res.render('login')
}
});



module.exports = router;
