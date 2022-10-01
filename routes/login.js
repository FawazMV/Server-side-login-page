mail = [{
  email: "mvfawazmfz@gmail.com",
  password: "9072"
},
{
  email: "mvf@gmail.com",
  password: "9072"
}
]




const { response } = require('express');
var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  if (req.session.loggedIn) {
    res.render('index')
  } else {
    res.render('login', { status, pop });
  }
});
let status = false
let pop;
router.post('/', (req, res) => {
  let ress = doLogin(req.body).then((response) => {

    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('index')
      console.log(response.response)
      status = false
    }
    else {
      res.redirect('/')
      status = true
      pop = response.response
      console.log(response.response)
    }
  })
})



router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})



function doLogin(userdata) {
  return new Promise((resolve, reject) => {
    let response = {};
    for (let i = 0; i < mail.length; i++) {
      if (mail[i].email == userdata.email) {
        if (mail[i].password === userdata.password) {
          response.status = true
          response.response = "successfully login"
          response.user = userdata.email
          console.log(response)
          resolve(response)
          break;
        } else {

          response.status = false
          response.response = "Password is incorrect"
          console.log(response)
          resolve(response)
          break;
        }
      }
      else {

        response.status = false
        response.response = "Invalid valid email address"
        console.log(response)
        resolve(response)
      }
    }
  })
}



module.exports = router;
