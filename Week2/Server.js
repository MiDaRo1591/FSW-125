const express = require("express");
const app = express();

var iList1 = ["Thing" , "Stuff", "Items"];
var iList2 = ["Moveis" , "Shows", "Music"];
var iList3 = ["Cars" , "Trucks", "Semi's"];

app.get("/red", (req, res)=> {
    res.send(iList1)
});
app.get("/blue", (req, res)=> {
    res.send(iList3)
});
app.get("/green", (req, res)=> {
    res.send(iList2)
});
app.listen(9000, () => {console.log("Success")});
