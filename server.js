const express = require('express');
const app = express();
const routes = require('./app/routes');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/api', routes);

app.listen(app.get('port'), function() {
    console.log('App listening on port', app.get('port'));
});
