var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
let number = 0;

app.get('/', function(req, res){
    res.render("../views/home", {number});
})

app.post('/update', (req, res) => {
    number = parseInt(req.body.number);
    res.send(number.toString());
});

app.listen(3000, function(){
    console.log("Executing on port 3000");
})