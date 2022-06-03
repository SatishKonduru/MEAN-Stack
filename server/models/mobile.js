const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mobileSchema = new Schema({
  _id:String,
  mobileName: String,
  mobileModel: String,
  price: Number,
  color: String,
  img: String,
  quantity: Number
})

module.exports = mongoose.model('mobile', mobileSchema, 'mobiles')
