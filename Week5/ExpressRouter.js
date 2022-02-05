const express = require('express');
const exampleRouter = express.Router();

// uuidv4(); // = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const {v4: uuidv4} = require('uuid');

// ID = Unique Itentifacation Data

const exampleArray = [
    {
        name: 'first',
        description: 'example descrition here',
        price: 4,
        recyclable: false
    },
    {
        name: 'second',
        description: 'another example descrition here',
        price: 5,
        recyclable: false
    }
]

// Get All
exampleRouter.get('/test', (req, res, next) => {
    res.send(exampleArray);
}); // URL/recycaled/test

// GET one


// POST
exampleRouter.post('/addNew', (req, res, next) => {
    const newLength = exampleArray.push(req.body);
    res.send(newLength)
    console.log(req.body);
});

// PUT


//DELETE

module.exports = exampleRouter;