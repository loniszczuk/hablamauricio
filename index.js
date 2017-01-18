var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    fs.readFile('phrases.txt', 'utf8', function (err,data) {
        var phrases = data.split('\n').filter(str => str.trim());
        var random_line = Math.floor(Math.random() * phrases.length);
        response.render('pages/index', {
            phrase: phrases[random_line]
        });
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
