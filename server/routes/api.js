const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const Mobile = require('../models/mobile')

const db = "mongodb+srv://Batch11:Batch11@cluster0.7pq6o.mongodb.net/Batch11?retryWrites=true&w=majority"

router.get('/', (req, res)=> {
  res.send("This message is from Routes")
})

mongoose.connect(db, err => {
  if(err){
    console.log("Error while connecting DB"+ err)
  }
  else{
    console.log("Connection Established SUCCESSFULLY!")
  }
})

//Registration API  - URL : localhost:3000/api/register
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if(err){
      console.log(`Error while registering user data under USER Collection: ${err}`)
    }
    else{
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload,'mySecretKey')
      //res.status(200).send(registeredUser)
      res.status(200).send({token})
    }
  })

})

function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send("UnAuthorized Request")
  }
  let token = req.headers.authorization.split(' ')[1]

  if(token === 'null'){
    return res.status(401).send("UnAuthorized Request")
  }

  let payload = jwt.verify(token,'mySecretKey')

  if(!payload){
    return res.status(401).send("UnAuthorized Request")
  }

  req._id = payload.subject
  next()



}

router.get('/dashboard', verifyToken, (req, res) => {
  let dashboard =[
    {
      "_id": "1",
      "name": "Mobiles",
      "url" : "assets/CategoryImages/Mobiles.png"
    },
    {
      "_id": "2",
      "name": "Electronics",
      "url" : "assets/CategoryImages/Electronics.png"
    },
    {
      "_id": "3",
      "name": "Fashion",
      "url" : "assets/CategoryImages/Fashion.png"
    },
    {
      "_id": "4",
      "name": "TVs",
      "url" : "assets/CategoryImages/TV.png"
    },
    {
      "_id": "5",
      "name": "Home & Furnitures",
      "url" : "assets/CategoryImages/Home.png"
    },
    {
      "_id": "6",
      "name": "Beauty",
      "url" : "assets/CategoryImages/Beauty.png"
    }

  ]
  res.json(dashboard)
})

router.get('/mobiles', (req, res)=>{
  prodArray = [
    {
      pId: "1",
      img: '../../../assets/mobiles/m1.png',
      amt: 10000,
      quantity: 1
    },
    {
      pId: "2",
      img: "../../../assets/mobiles/m2.png",
      amt: 5000,
      quantity: 1
    },
    {
      pId: "3",
      img: "../../../assets/mobiles/m3.png",
      amt: 20000,
      quantity: 1
    },
    {
      pId: "4",
      img: "../../../assets/mobiles/m4.png",
      amt: 25000,
      quantity: 1
    }
  ]
  res.json(prodArray)
})


router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({username: userData.username}, (err, user) =>{
    if(err){
      console.log("Error while finding the document: "+err)
    }
    else{
      if(!user){
        res.status(401).send("Invalid Username")
      }
      else if(user.password !== userData.password){
        res.status(401).send("Invalid Password")
      }
      else{
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'mySecretKey')
        res.status(200).send({token})
      }

    }
  } )

})


router.get('/home', (req, res) => {
  let homePage =[
    {
      "_id": "1",
      "name": "Mobiles",
      "url" : "assets/CategoryImages/Mobiles.png"
    },
    {
      "_id": "2",
      "name": "Electronics",
      "url" : "assets/CategoryImages/Electronics.png"
    },
    {
      "_id": "3",
      "name": "Fashion",
      "url" : "assets/CategoryImages/Fashion.png"
    },
    {
      "_id": "4",
      "name": "TVs",
      "url" : "assets/CategoryImages/TV.png"
    },
    {
      "_id": "5",
      "name": "Home & Furnitures",
      "url" : "assets/CategoryImages/Home.png"
    },
    {
      "_id": "6",
      "name": "Beauty",
      "url" : "assets/CategoryImages/Beauty.png"
    }

  ]
  res.json(homePage)
})


router.post('/adminRegister',(req, res) => {
  let adminData = req.body
  let admin = new Admin(adminData)
  admin.save((err, registeredAdmin) => {
    if(err){
      console.log("Error while saving document in DB: "+err)
    }
    else{
      let payload = {subject: registeredAdmin._id}
      let token = jwt.sign(payload, 'adminKey')
      res.status(200).send({token})
    }
  })
})

router.post('/adminLogin',(req, res)=> {
  let adminData = req.body
  Admin.findOne({username: adminData.username}, (err, admin)=> {
if(err){
  console.log("Error"+err)
}
else{
  if(!admin){
    res.status(401).send('Invalid Username')
  }
  else if(admin.password !== adminData.password){
    res.status(401).send('Invalid Password')
  }
  else{
    let payload = {subject: admin._id}
    let token = jwt.sign(payload, 'adminKey')
    res.status(200).send({token})
  }
}
  })
})


function verifyAdminToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send("UnAuthorized Request")
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token == 'null'){
    return res.status(401).send("UnAuthorized Request")
  }
  let payload = jwt.verify(token, 'adminKey')
  if(!payload){
    return res.status(401).send("UnAuthorized Request")
  }
  req._id = payload.subject
  next()
}

router.get('/adminDashboard', verifyAdminToken, (req, res)=> {

})

router.post('/insertMobile',(req, res) => {
  let mobileData = req.body
  let mobile = new Mobile(mobileData)
  mobile.save((err, existedMobile) => {
    if(err){
      console.log('Error: '+err)
    }
    else{
      res.status(200).send(existedMobile)
    }
  })
})


router.get('/getMobiles', (req, res) => {
  Mobile.find({}).exec((err, list)=>{
    if(err){
      console.log("Error" +err)
    }
    else{
      res.json(list)
    }
  })
})

router.patch('/updateMobile', (req, res) => {
  let mModel = req.body.mobileModel
  let filter = {mobileModel: mModel}
  Mobile.updateOne(filter, {
    $set: {
      mobileName: req.body.mobileName,
      price : req.body.price,
      color: req.body.color
    }
  }).catch(err => {
    console.log("Error while updating: "+err)
  })
} )

router.post('/deleteMobile', (req, res)=>{
  let mModel = req.body.mobileModel
  Mobile.deleteOne({mobileModel: mModel},
    (err, data)=>{
      if(err){
        console.log("Error While deleting document: "+err)
      }
      else{
        res.json(data)
      }
    })
})
module.exports = router
