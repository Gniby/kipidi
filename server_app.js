
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var engines = require('consolidate');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/user',routes.getUser);
app.post('/user',routes.createUser);
app.get('/user/:id',routes.getUserById);
app.put('/user',routes.updateUser);


app.get('/admin',routes.getAdmin);
app.post('/admin',routes.createAdmin);
app.get('/admin/:id',routes.getAdminById);
app.put('/admin',routes.updateAdmin);

app.get('/ts',routes.getTs);
app.post('/ts',routes.createTs);
app.get('/ts/:id',routes.getTsById);
app.put('/ts',routes.updateTs);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
