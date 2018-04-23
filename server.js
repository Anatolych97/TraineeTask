let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 3700;

let jsonParser = bodyParser.json();

let companyData =
app.set('views', __dirname + '/tpl');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);

app.get("/", function (req, res) {
    res.render("register-form");
});
app.get('/company', function (req, res) {
    res.render('company');
});
app.post('/', jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    res.json("Success");
});

app.use(express.static(__dirname));

app.listen(port, function() {
    console.log("Server start");
});
