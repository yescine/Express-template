const express = require('express')
const app = express();
const data = require('../../data')
const uuid = require('uuid')

app.get('/',(req,res)=>{
   res.json(data);
})

app.get('/:id',(req,res)=>{
   const found = data.some(member=>member.id===parseInt(req.params.id))

   found?
   res.json(data.filter(member=>member.id===parseInt(req.params.id))):
   res.status(400).json({msg: `member with id ${req.params.id} not found`})
})

app.post('/',(req,res)=>{
   const newMember={
      id:uuid.v4(),
      name:req.body.name,
      email:req.body.email,
      status:'active'
   }
   
   // !(newMember.name||newMember.email)?res.status(400).json({msg:'include all data'}):null
   data.push(newMember)

   res.json(data)

})

module.exports = app;
