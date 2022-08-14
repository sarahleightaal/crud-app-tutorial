const express = require("express");
const { collection, ObjectId } = require("../config/database");
const router = express.Router()
// const { collection, ObjectId } = require("../config/database")

//router set up
//show list of user
router.get("/", (req, res) => {
    // res.send("User List")
    //projection
    const project = { projection: {_id: 0, username: 1}}
    
    collection.find().toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})
//form for creating a new user 
router.post("/", (req, res) => {
    // res.send("Create New User")
    collection.insertOne(req.body, (err, res) => {
        if (err) throw err;
    })
    res.send("1 document inserted. ")
})

router
    .route("/:id")
    .get((req, res) => {
        // res.send(`Get a user with ID: ${req.params.id}`)
        const query = {
        //long number goes below (postman)
         _id: ObjectId(req.params.id)  
        }
        collection.findOne(query, (err, result) => {
        if (err) throw err;
        res.send(result)
        })
    })
    .put((req, res) => {
        // res.send(`Update a user with ID: ${req.params.id}`)
        const query = {_id: ObjectId(req.params.id)}
        const newvalue = {
            $set: {
                "username": "ekin",
                "email": "ekin@gmail.com",
                "imageUrl": "abc"
            }
        }
        collection.updateOne(query, newvalue, (err, result) => {
            if (err) throw err;
        })
        res.send("1 document updatesd. ")

    })
    .delete((req,res) => {
        // res.send(`Delete a user with ID: ${req.params.id}`)
        const query = {_id: ObjectId(req.params.id)}
        collection.deleteOne(query, (err, result) => {
            if (err) throw err;
        })
        res.send("1 document deleted. ")
    })

module.exports = router