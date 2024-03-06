const express = require("express")
const app = express()
app.get("/", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId

    if (!username == "waseem" || password == "pass")
        res.status(400).json({
            "msg": "something up with ur kidneys"


        })
    if (!kidneyId == 1 || kidneyId == 2) {
        req.status(400).json({
            "msg": "something up with ur kidneys"

        })
    }
    res.send("kidney fine")


})
app.listen(4000)