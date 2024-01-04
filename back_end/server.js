const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login',function( req, res) {

    let username = req.body.username
    let pswd = req.body.password
    if(username === 'user1' && pswd === 'abcd123'){
        res.status(200).json({
            "response":"Success",
            "status":"logged_in"
        })
    }else{
        res.status(400).json({
            "response":"Failed",
            "status":"login_failed"
        })
    }
})

app.listen(3000)