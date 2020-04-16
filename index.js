const express = require('express');
const path = require('path')

const logger = require('./middleware/logger')
const data = require('./data')

const app = express();
const port = process.env.PORT || 5000

// Initialise midelware
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// make a static folder
app.use(express.static(path.join(__dirname,'views')))
// app.get('/',(req,res)=>{
//    res.sendFile(path.join(__dirname,'views','welcome.html'))
// })

// api call for member
app.use('/api/members',require('./routes/api/members'))



app.listen(port,()=>{
   console.log(`listening on port: ${port}`)
})