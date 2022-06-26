const express = require("express");
const bodyParser = require("body-parser");

var items = [];

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
    const date = new Date();
    var day="";
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    day = date.toLocaleDateString("en-us",options);

    res.render("list", {kindOfDay:day, newItem:items});
})

app.post("/",function(req,res){
    var item = req.body.item;

    items.push(item);
    res.redirect("/");
   // console.log(item);
})


app.listen(3000,function()
{
    console.log("Server is running on port 3000");
})