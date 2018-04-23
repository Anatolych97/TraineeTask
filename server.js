let express = require('express');
let app = express();
let port = 3700;

app.set('views', __dirname + '/tpl');
app.set('view engine', 'pug');

app.engine('pug', require('pug').__express);

app.get("/", function (req, res) {
    res.render("register-form");
});

app.use(express.static(__dirname));

app.listen(port, function() {
    console.log("Server start");
});
