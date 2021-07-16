const express = require('express')

const app = express()

app.use(() =>{
    console.log('Hello server...');
    console.log('Hello Lagi')
    console.log('Hello tiga')
})

app.listen(4000)