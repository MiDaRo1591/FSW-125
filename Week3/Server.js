const express = require("express");
const app = express();
app.use(express.json());

app.use('/recycled', require('./ExpressRouter') )

app.listen(9000, () => {console.log("Success")});