
const express = require('express');
const app = express();
const port = 3000;
const ctrl=require('./controllers/ctrl')
// const val=require('./controllers/validate')
app.use(express.json())

regEvent1= [];

// app.post('/auth/register', authCtrl.registerUser)
// app.post('/api/emailEvent/:id',(req, res)=>{
  app.post('/api/emailEvent1', (req, res)=>{
// console.log(req.body)
  const {email} = req.body
  console.log(email)
  const {register} = req.body

  if (register){
    ctrl.registerForEvent(regEvent1, email)
  }
})

app.delete('/api/emailEvent1', (req, res)=>{
  const {email} = req.body
  const {cancel} = req.body
  if(cancel){
    ctrl.cancelReg(regEvent1,email)
  }
})
      
// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
})