const express = require('express');
const app = express();
const fs= require('fs')



// app.get('/:id',(req,res) => {
//   fs.readFile('./data.json','utf-8',(err,data)=>{
//     if(err) return res.status(500).send(err.message)
//     const id = req.params.id
//     const parsedData = JSON.parse(data)
   
//   })
// })