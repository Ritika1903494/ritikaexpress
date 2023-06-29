const express=require('express');
const app=express();
const port=3000;
const fs = require("fs");
const cors=require('cors');   
app.use(cors())


//app.get('/user/:id',(req,res)=>{
//     //req.params.id it take the value of id that present in id 
//     fs.readFile("data.json", 'utf8',function(err, data) {
//         if (err){
//             console.log("An error occured while reading  JSON Object to json File.");
//         } 
//        const users=JSON.parse(data);
//        const user=users["user"+req.params.id];
//        console.log("id",req.params);
//       // console.log(users);
//        console.log(user);
//        res.send(JSON.stringify(user));
// })
// });

app.delete('/deleteuser/:id',function(req,res){
    fs.readFile("data.json", 'utf8',function(err, data) {
        if (err){
            console.log("An error occured while reading  JSON Object to json File.");
        } 
        data=JSON.parse(data);
         delete data["user"+req.params.id];
        fs.writeFile("./data.json", JSON.stringify(data), function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to json File.");
            }
  });
     
        res.send(JSON.stringify(data));

})
});


app.post('/addusers',(req,res)=>{
    fs.readFile("data.json", 'utf8',(err, data) =>{
        data=JSON.parse(data);
        data["user10"]=new_data;
        fs.writeFile("./data.json", JSON.stringify(data), function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to json File.");
          }
});
res.send(JSON.stringify(data));  
});
});

 app.get('/user',(req,res)=>{
    fs.readFile("data.json", 'utf8',function(err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
           //req.params.id it take the value of id that present in id 
         console.log(data); 
         res.send((data));

     });
//     //console.log("ritika")
//    // res.send(JSON.stringify(data));

})

const server=app.listen(8081,function(){
    console.log("server",server.address());
    const host=server.address().address
    const port=server.address().port
    console.log(`example app listening on port ${port}`)
})