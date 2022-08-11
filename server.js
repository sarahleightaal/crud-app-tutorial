const express = require("express")

const app = express()

app.listen(3000)
//anon function - request and result
app.get("/", (req, res) => (
    console.log("abc")
    res.send("something")
))