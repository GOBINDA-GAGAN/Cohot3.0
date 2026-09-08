const express = require("express");

const app = express();

let user=[];

//create
app.post("/create",(req,res)=>{
  let data= req.body()
})


//get 
app.get("/", (req, res) => {
  res.status(200).json({
    message:" hello"
  });
});

app.listen(3000, () => {
  console.log("hello");
});
