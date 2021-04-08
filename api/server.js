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
    server.get('/users/:id', async (req, res) => {
        try {
            const user = await database.findById(req.params.id);
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: "User not found"
                })
                
            }
        } catch (error) {
            res.status(500).json({
                error: "Uh oh, something went wrong"
            })
        }

    })



//insert (create user)
    server.post('/users', async (req, res) => {
        const name = req.body.name;
        const bio = req.body.bio;

        try {
            if (name && bio) {
                const newUser = await database.insert({
                   name,
                   bio
                })
                res.status(201).json(newUser)
            } else if (!req.body.name && !req.body.bio) {
                res.status(400).json({
                    message: "please fill out all required fields"
                })
            }

        } catch (error) {
            res.status(500).json({
                error: "Uh oh, something happened"
            })
        }


    })

//update 
server.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {name, bio} = req.body;

    try {
        if (!id) {
            return res.status(404).json({
                message: "User not found"
            })
        } else if (!name || !bio) {
            return res.status(400).json({
                message: "please fill out all required fields"
            })
        } else {
            await database.update(id, {name, bio})
            const updatedUser = await database.findById(id)
            return res.status(200).json(updatedUser)
        }


    } catch (error) {
        res.status(500).json({
            error: "Uh oh, user could not be updated"
        })
    }

})

// delete



module.exports = server; // EXPORT YOUR SERVER instead of {}
