const express = require('express')
const app = express()


app.get('/', (request,response) => {
    response.status(200).send({message: 'Hello World!'})
})


const port = 3003
app.listen(port, () => {
    console.log('server express on: http://localhost:3003')
})