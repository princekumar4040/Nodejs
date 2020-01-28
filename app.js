const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
var cors = require('cors');
const {User,connectDb} = require('./models');
const passport = require('passport');
const jwt=require('jsonwebtoken');
const auth=require('./middleware/middleware.js')()
require('./env');
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
app.post('/login', (req, res, next) => {

    User.User.find({email:req.body.email})
    .exec()
    .then(user=>{  
      console.log(user) 
     if(user.length<1)
     {
      return res.status(401).json(

        {
           message: "Auth failed"

        }
      ) }

//       bcrypt.compare(req.body.password,  user[0].password, (err,result)=>{

//           if(err){
//         return res.status(402).json(
//         {
//           message: "Auth failed"

//         }
//          ) }

//        if(result){

//         return res.status(200).json({

//           message:"Auth successfull"
//         })
//        }
       
//        res.status(403).json({message: 'Auth failed'})
// })


if(req.body.password==user[0].password)
     {
     const token=jwt.sign({

         email:user[0].email,
         userId:user[0]._id
        },
        process.env.JWT_KEY,
        {
          expiresIn:'1h'

        }
       

       )


      return res.status(200).json(

        {  
           message: "Auth successfull",
           token:token
        }
      ) }


      res.status(403).json({message: 'Auth failed'})


    }     )
    .catch(err=> {     
   console.log(err);
   res.status(500).json({

    error: err
   })


    } )
        
   
  })



app.post('/register', (req,  res) => {
    console.log(req.body)
    res.send("data get");
})

app.get('/data',auth, (req,res,next )=>{

User.User.find().then(user=>{

  res.send(user);
})


 console.log(req.header('Authorization'))
 next();
}
)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const createUsersWithMessages = async (req,res) => {

  };
  module.exports ={


 }