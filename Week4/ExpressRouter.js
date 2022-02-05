const express = require('express');
const exampleRouter = express.Router();

// uuidv4(); // = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' (this is how it works)
const {v4: uuidv4} = require('uuid');

// ID = Unique Identification Data

const exampleArray = [
    {
        name: 'first',
        description: 'example descrition here',
        price: 4,
        recyclable: false,
        _id: uuidv4()
    },
    {
        name: 'second',
        description: 'another example descrition here',
        price: 5,
        recyclable: false,
        _id: uuidv4()
    }
]

// Get All
exampleRouter.get('/itemsIntake', (req, res, next) => {
    res.send(exampleArray);
}); // URL + ServerInfo + /test

// GET one



// POST
    exampleRouter.post('/itemsIntake', (req, res, next) => {
    req.body._id = uuidv4(); // Make new ID for new item
    exampleArray.push(req.body); // Add the body to the array
    res.status(201); // Send / Set the status.
    res.send(req.body); // Sending the code that is being sent back.
});

// PUT

exampleRouter.put('/itemsIntake/:id', (req, res, next) => {
    console.log(req.params.id); // Log ID
    var exampleArrayItem = exampleArray.findIndex(function (item){ // Function Get the Item
        if(item._id == req.params.id){ // If the ID matches
            return item; // return the Item as the var
        }
    });
    console.log(exampleArrayItem) // log the var
    Object.assign(exampleArray[exampleArrayItem], req.body);
    // Default method object change the old item to new item.
    res.send(exampleArray[exampleArrayItem]); // Send code back
});

//DELETE

exampleRouter.delete('/itemsIntake/:id', (req, res, next) => {
    console.log(req.params.id); // Log ID
    var exampleArrayItem = exampleArray.findIndex(function (item){ // Function Get the Item
        if(item._id == req.params.id){ // If the ID matches
            return item; // return the Item as the var
        }
    });

    console.log(exampleArrayItem) // log the var
    exampleArray.splice(exampleArrayItem, 1);
    // Grab the array and splice the item from it.
    res.send(exampleArray[exampleArrayItem]); // Send code back
});

module.exports = exampleRouter;



// What I did before
/*
const express = require("express");
const router = express.Router();
const UUID = require('uuid');
var recycledItems = [
    {Name: "Newspaper", Desc : "Old Newspapers", Quantity : 3, PPU: 2.56, id: UUID.v4()},
    {},
    {}
];

const express = require("express");
const router = express.Router();

router.get('/', (req, res)=> {
    res.send(recycledItems)
});

router.post('/', (req, res) => 
{const Items = req.body;
    Items.id = UUID.v4();
recycledItems.push(Items);

console.log(Items)
res.send('Post Posted');
});

module.exports = router;
*/