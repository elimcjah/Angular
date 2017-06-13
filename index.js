const express = require('express')//setting express to store require express
const app = express();  //initation an instance of express called app



//app.use('/static', express.static('public')) //

app.get('/', function(req, res) {  //get request 
    res.send('Hello World!');
    //console.log(req.params.id)
})


app.listen(3000, function() {    //telling where to listen
    console.log('listening on port 3000!')
})
