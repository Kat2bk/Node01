const express = require('express');
const database = require('./users/model');

const server = express();
server.use(express.json());

//root

server.get('/', (req, res) => {
    res.json({message: "welcome to the API"})
})

// find
server.get('/users', async (req, res) => {
    try {
        const users = await database.find();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({
                message: "Unable to get users"
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "Uh oh, something happened, try again"
        })
    }
})



// find by id

//insert (create user)


//update 


// delete



module.exports = server; // EXPORT YOUR SERVER instead of {}
