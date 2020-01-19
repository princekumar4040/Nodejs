const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
var cors = require('cors');
const {User,connectDb} = require('./models');
const passport = require('passport');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require('./config/passport')(passport);

connectDb().then(rs=>{
    console.log("db connected")
})
//passport middleware



app.post('/adduser',(req,res)=>{
    const user1 = new User.User({
        firstName: req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        password:req.body.password
      });
      user1.save().then(response=>{
          console.log(response);
      });
      res.send("data save successfully")
})

/*app.post('/add', (req, res,) => {
  username = req.body.email,
  passcode = req.body.password,
  console.log(req)
res.send("data get");
}
)*/
//let flag=true;
app.post('/add', (req, res,) => {
  if (flag)
    {
        console.log("Success!");
       // res.redirect('/Home');
       res.send("data get")
    }
    else
    {
        console.log("Error!");
    }
  })



app.post('/register', (req,  res) => {
    console.log(req.body)
    res.send("data get");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const createUsersWithMessages = async (req,res) => {

  };
  module.exports ={


 }