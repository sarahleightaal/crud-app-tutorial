const express = require("express")
const router = express.Router()
const { collection, ObjectId } = require("../config/database")

//router set up
//show list of user
router.get("/", (req, res) => {
    // res.send("User List")
    collection.find().toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})
//form for creating a new user 
router.post("/", (req, res) => {
    // res.send("Create New User")
})

router
    .route("/:id")
    .get((req, res) => {
        // res.send(`Get a user with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        // res.send(`Update a user with ID: ${req.params.id}`)
    })
    .delete((req,res) => {
        // res.send(`Delete a user with ID: ${req.params.id}`)
    })

module.exports = router