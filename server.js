const express = require('express')
const path = require('path')

const app = express()

const db = {
    'ivan': {age: 20, color: '#f00'},
    'shusanta': {age: 12, color: '#00f'},
    likes: [{liker: 'ivan', likee: 'shusanta'}]
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./dist/index.html'))
})

app.use('/', express.static('./dist'))

app.get('/user/:id', (req, res) => {
    res.json(db[req.params.id])
})

app.get('/like/:id', (req, res) => {
    res.json(db[req.params.id])
})


app.get('/report/:id/:reason', (req, res) => {
    res.json(db[req.params.id])
})

app.listen(3000, function () {
    console.log('ok')
})

console.log('ass')
