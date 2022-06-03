const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({
  _id: String,
  fullName: String,
  email: String,
  mobile: Number,
  city: String,
  gender: Number,
  username: String,
  password: String,
  isAdmin: Boolean
})

module.exports = mongoose.model('admin',adminSchema, 'admin')
