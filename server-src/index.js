const express = require('express')
const app = express()
var knex = require('knex')({
  client: 'pg',
  //version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'test'
  }
});

console.log(
knex('rory_table')
.select()
.toString()
)

app.use('/static', express.static('public'))

app.get('/', function(req, res){
    res.send('Hello World!')
    console.log(req.params.id)
})

app.get('/table', function(req, res){
    knex('students')
    .select()
    .then(function(rows){
        res.send(rows)
    })
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

