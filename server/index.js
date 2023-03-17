const express = require('express');
const path = require('path');
const {getCows,addCow,updateCow,deleteCow} = require('../database/index.js')
const cors = require('cors')
const PORT = 3000;
const app = express();

//app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(cors())
app.get('/api/cows', (req, res) => {
  getCows((error, results) =>{
    if(error){
      res.send(error)
    }
    else{
      res.json(results) 
    }
  })
})

app.post('/api/cows',(req,res) => {
  addCow(req.body.id,req.body.name,req.body.description,(error, results) =>{
    if(error){
      res.send(error)
    }
    else{
      res.send("data added successfully")
    }
  })
})

app.put('/api/cows/:id',(req,res) => {
  updateCow(req.params.id,req.body.name,(error,results) =>{
    if(error){
      res.send(error)
    }
    else{
      res.json(results) 
    }
  })
})

app.delete('/api/cows/:id',(req,res) => {
  deleteCow(req.params.id,(error,results) =>{
    if(error){
      res.send(error)
    }
    else{
      res.send("data deleted successfully")
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
