const express = require("express");
const app = express();
/*
app.get("/recycled", (req, res)=> {
    res.send(recycledItems)
});
*/

app.use('/recycled', require('./ExpressRouter') )

app.listen(9000, () => {console.log("Success")});