const express = require("express");
// const morgan = require("morgan")
const app = express();

// Application level middleware
// that it is middleware that enacts itself on ALL incoming REQ's
app.use(express.json());
// app.use(morgan('dev')) // ???
//

// const exampleExpressRouter = require('./express-router-example') // Make require a variable (complex version)

// All Req's serialize of deserialize the shim (turn into  JSON or turn from JSON)
app.use('/recycled', require('./ExpressRouter') ) // simple version
// URL + /recycled + Router Info

// if process.env.PORT exits use that otherwise use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log("Success")});





/*
// middleware that enacts itslf on all incoming requests to the URL /recycaled
// app.use('/recycled', require('./ExpressRouter') )// All Req's serialize of deserialize the shim (turn into  JSON or turn from JSON)

// a singular route
// app.get('/', (req,res, next) => {})

app.listen(9000, () => {console.log("Success")});
*/