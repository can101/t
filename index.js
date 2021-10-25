import express from "express"
import yokatlas from 'yokatlas-api'

const app = express();

app.get('/',(req,res,next)=>{
res.json({message:'Well Done Server'})
});

app.get('/atlas',(req,res,next)=>{
new yokatlas({
    "uni_adi": "İstanbul",
    "length":1000
}).search(data=>res.json(data));

})

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
console.log(`Server working on the http://localhost:${PORT}`);
});