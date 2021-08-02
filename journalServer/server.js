const express = require('express')
const app = express()

app.use(express.json())

let entries = [
    {
        id: 0,
        date: 'January 1',
        content: 'Hello world'
    },
    {
        id: 1, 
        date: 'January 2',
        content: 'Two days in a row!'
    }, 
    {
        id: 2, 
        date: 'June 12',
        content: 'Whoops'
    }
]

let globalId = 3

app.get('/', function(req, res) {
    res.status(200).send(`<h1>Jurrni</h1><h2>Journaling your journies</h2>`)
})

app.get('/entries', function(req, res) {
    res.status(200).send(entries)
})

app.post('/entry', function(req, res) {
    let newEntry = {
        id: globalId, 
        date: req.body.date, 
        content: req.body.content
    }
    entries.push(newEntry)
    globalId++
    res.status(200).send(entries)
})

app.listen(4500, function() {
    console.log('serving up port 4500')
})