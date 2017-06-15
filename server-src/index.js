const express = require('express')
const app = express()
var knex = require('knex')({
    client: 'pg',
    //version: '7.2',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'test'
    }
});
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var body = require('body-parser') 


app.use('/static', express.static('public'))
app.use(body.urlencoded())
// console.log(
// knex('rory_table')
// .select()
// .toString()
// )

app.post('/avatar', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    knex('students')
        .update({
            image_url: req.file.path
        })
        .where('id', 2)
        .then(function (qwer) {
            res.send('qwer')
        })
})

app.post('/first', function (req, res) {
       console.log(req.body)
       knex('students')
       .insert({ first_name: req.body.first_name })
       .then(function (qwer){
           res.send('qwer')
       })
})

// app.post('/info',(req,res)=>{
//     res.send('ok')
// })

app.post('/last', function (req, res) {
       console.log(req.body)
       knex('students')
       .insert({ last_name: req.body.last_name })
       .then(function (qwer){
           res.send('qwer')
       })
})


// appc

app.get('/analytics/:id', function (req, res) {
    let id = req.params.id
    knex('analytics')
        .where('id', id)
        .then(function (rows) {
            res.send(rows)
        })
})

app.get('/student', function (req, res) {
    knex('students')
        .select()
        .then(function (rows) {
            res.send(rows)
        })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

