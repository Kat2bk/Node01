const express = require('express');
const database = require('./users/model');

const server = express();
server.use(express.json());

//root

server.get('/', (req, res) => {
    res.json({message: "welcome to the API"})
})

// find



// find by id

//insert (create user)


//update 


// delete



module.exports = server; // EXPORT YOUR SERVER instead of {}
