const express=require('express');
const app=express();
const fs = require("fs");
const cors=require('cors');   
app.use(cors())

//api
app.get('/users',(req,res)=>{
    fs.readFile("arrayofobj.json", 'utf8',function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
           //req.params.id it take the value of id that present in id 
         console.log(data); 
         res.send((users));

     });
//     //console.log("ritika")
//    // res.send(JSON.stringify(data));

})

const server=app.listen(8085,function(){
    console.log("server",server.address());
    const host=server.address().address
    const port=server.address().port
    console.log(`example app listening on port ${port}`)
})