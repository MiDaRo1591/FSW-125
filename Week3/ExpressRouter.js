var recycledItems = [
    {Name: "Newspaper", Desc : "Old Newspapers", Quantity : 3, PPU: 2.56, ID: 875e0},
    {},
    {}
];

const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.send(recycledItems)
});

router.post('/', (req, res) => 
{const Items = req.body;
Items.push(Items);

console.log(Items)
res.send('Post Posted');
});

module.exports = router;