const express=require('express');
const app=express();
const port=3000;
const fs = require("fs");
const cors=require('cors');

app.use(cors())

const detail={
    "user9":{
        "id":9,
        "name":"aaaa",
        "role":"intern",
        "profession":"developer"
      }
};

/*app.post('/addsuser',(req,res)=>{
  var jsonContent = JSON.stringify(detail);
  console.log(jsonContent);
   
 fs.writeFile("./data.json", jsonContent, function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to json File.");
      }
   data["user6"]=detail["user6"];
   console.log(data);

  });
  res.send('hello world !')
});
  /*fs.appendFile("./data.json",jsonContent, 'utf8',
	function(err) {		
		if (err) {
      console.log("An error occured while appending  JSON Object to json File.");
    }
    data["user7"]=detail["user7"];
    console.log(data);
});
res.send('hello world !')
});*/



app.post('/adduser',(req,res)=>{
    fs.readFile("data.json", 'utf8',(err, data) =>{
        data=JSON.parse(data);
        console.log("data",data);
        data["user9"]=detail["user9"];
       // data["user6"]=detail;
        console.log(data);
        fs.writeFile("./data.json", JSON.stringify(data), function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to json File.");
          }
});
res.send(JSON.stringify(data));  
});
});

const server=app.listen(8081,function(){
    console.log("server",server.address());
    const host=server.address().address
    const port=server.address().port
    console.log(`example app listening on port ${port}`)
})