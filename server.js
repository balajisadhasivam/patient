const express = require('express')
const user = require('./policy')
const mongoose = require('mongoose')
const app = express()
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/policy.html')
})

function generatePolicyNo() {  
    var digits = '0123456789';
    let NO = '4639';
    for (let i = 0; i < 6; i++ ) {
        NO += digits[Math.floor(Math.random() * 10)];
    }
    return NO;
}

mongoose.connect('mongodb+srv://amrg_5612:Mongo_5612@botathon.8ytyjss.mongodb.net/Healthcare?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
.then((res)=>{
    app.listen(4000,()=>{
        console.log('Anya Bot')
})
console.log('Success')})
.catch((err)=>{console.log(err)})


app.post('/insert',(req,res)=>{
    console.log(req.body)
    user.create(req.body)
    res.send('user created')
})
