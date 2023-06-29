const express=require('express');
const app=express();
const port=3000;
const fs = require("fs");
const cors=require('cors');   
app.use(cors())

//put method 
app.put('/updateuser/:id/:name',function(req,res){
 //first read existing users.
 fs.readFile("data.json",'utf8',function(err,data){
    const users=JSON.parse(data);
    users["user"+req.params.id].name=req.params.name;
    console.log(users);
    fs.writeFile("data.json", JSON.stringify(users), function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to json File.");
        }
    });
    res.send(JSON.stringify(users));
  })
})


app.put('/update/:id/:profession',function(req,res){
    fs.readFile("data.json",'utf8',function(err,data){
       const users=JSON.parse(data);
       const user_id=req.params.id;
       const prof=req.params.profession;
       for(const i in users){
            if(users[i].id==parseInt(user_id)){
                users[i].profession=prof;
                    fs.writeFile("data.json", JSON.stringify(users), function (err) {
                        if (err) {
                            console.log("An error occured while writing JSON Object to json File.");
                        }

                        console.log(users);
                    });
            }
       }
          res.send(JSON.stringify(users));
     })
})

const server=app.listen(8081,function(){
    console.log("server",server.address());
    const host=server.address().address
    const port=server.address().port
    console.log(`example app listening on port ${port}`)
})