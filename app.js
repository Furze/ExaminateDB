
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var submit = require('./routes/submit.js');
var getRoute = require('./routes/get.js');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/getcourses', getRoute.courses);
app.get('/getexams', getRoute.exams);
app.get('/getanswers', getRoute.answers);

app.get('/submitanswer', submit.answer);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
