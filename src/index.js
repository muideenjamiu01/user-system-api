const express = require('express')
require('./db/mongoose')

const userRouter = require('./router/user')

//creating new express application
const app = express()
 //definig port to be used wen deployin to heroku
 const port = process.env.PORT 



 app.use(express.json())
 app.use(userRouter)





//now listen on port 3000
app.listen(port, () => {
    console.log('server is up on port ' + port)
})

