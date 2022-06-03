const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const api = require('./routes/api')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', api) //localhost:3000/api

// For Server testing only
app.get('/', (req, res) => {
  res.send('Hi Satish, This message is from SERVER')
})

app.listen(PORT, ()=>{
  console.log(`SERVER is Running at PORT No: ${PORT}`)
} )


