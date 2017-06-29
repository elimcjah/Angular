const express = require('express')
const app = express()
let logger = require('morgan');
let util = require('util');
let cookieParser = require('cookie-parser');
// let bodyParser = require('body-parser');
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
var expressValidator = require('express-validator');
let expressSession = require('express-session');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var body = require('body-parser')

app.use(logger('dev'));
app.use(body.urlencoded({ extended: false }));
app.use(body.json())
app.use(expressValidator());
app.use(expressSession({ secret: 'sasaGoat', saveUnitialized: false, resave: false }));

app.use('/', express.static('dist'))
app.use('/www/', express.static('www'))
// console.log(
// knex('rory_table')
// .select()
// .toString()
// 

////////SESSIONS////////
 app.get('/', function (req, res, next) {
     res.render('/', { title: 'Form Validation', success: true, errors: req.session.errors });
     res.session.errors = null;
 })

////////////// LOGIN PAGE///////////////////
app.post('/login', function (req, res) {
    console.log(req.body);
    //res.send('okay');
     req.checkBody('username', 'Invalid Username').notEmpty();
     req.checkBody('password', 'Invalid Password').isLength({ min: 4 });
     req.sanitizeBody('username').toBoolean();
     req.sanitizeBody('password').toBoolean();
     req.getValidationResult().then(function (result) {
         if (!result.isEmpty()) {
             res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
             return;
         }
        res.json({
            username: req.body.username,
            password: req.body.password

        });
    });
    // if(errors){
    //     console.log('theres sum errs');
    //     req.session.errors=errors;
    //     req.session.success =false;
    //     console.log(errors);
    // } else{
    //   req.session.success =true;
    //   console.log('success');
    // }
    // knex('users')
    // .insert({ username: req.body.username,
    //           password: req.body.password })
    // .then(function (qwer){
    //     res.send('qwer')
    // })
    //res.redirect('/');
})



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
        .then(function (qwer) {
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
        .then(function (qwer) {
            res.send('qwer')
        })
})
////////////////////////Log Out///////////////////////////////////////////
app.post('/logout', function (req, res) {
    console.log('frannyout')
    //  knex('analytics')
    //  .insert({ type: req.body.keyword })
    //  .then(function (lalala){
    //      res.send('lalala')
    // })
})


////////////////////////SIGNUP PAGE////////////////////////////////////////
app.post('/signup', function (req, res) {
    console.log(req.body)
    knex('users')
        .insert({
            username: req.body.username, password: req.body.password,
            first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email
        })
        .then(function (qwer) {
            res.send('qwer')
        })
})



app.post('/user_pass', function (req, res) {
    console.log(req.body)
    //.insert({ })

    res.send('qwer')

})


// appc
// app.get('/users', function(req, res) {
//    let users=  {
//         fname: 'Sasa',
//         last_name: '',
//         nkname: 'loosing',
//         dob: 'his',
//         stid: 'mojo!!!',
//         age: 'Ohhh Shit!'
//     }

//     res.send(users)
// })

app.get('/ping', function (req, res) {
    res.send('ping')
})

app.get('/analytics/:id', function (req, res) {
    let id = req.params.id
    knex('analytics')
        .where('id', id)
        .then(function (rows) {
            res.send(rows)
        })
})

app.get('/kids', function (req, res) {
    res.send([{ name: 'John Cena', img: 'https://s-media-cache-ak0.pinimg.com/originals/2f/41/d5/2f41d5e49987c9fa9a4df9046c1ef8e9.jpg' },
    { name: 'Oliver McClendon', img: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2011/10/the-tough-guy.jpg' },
    { name: 'Billy Maddison', img: 'https://thumb1.shutterstock.com/display_pic_with_logo/531898/177207620/stock-photo-handsome-little-boy-demonstrating-his-muscles-177207620.jpg' },
    { name: 'Pop Eye', img: 'https://thumbs.dreamstime.com/x/peuter-jong-geitje-18227113.jpg' },
    { name: 'Bill Nye', img: 'https://thumbs.dreamstime.com/x/preschool-boy-holding-globe-16273023.jpg' },
    { name: 'Suzy Smiles', img: 'http://www.parentingnation.in/Resources/articleimages/actual/668.jpg' }]
    )
});


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

