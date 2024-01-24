require('dotenv').config()

const express = require('express');

//Express app
app = express();

//Middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req,res) =>{
    req.json({msg: 'Welcome to the server'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})