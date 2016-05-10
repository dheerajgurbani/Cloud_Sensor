
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

var AlreadyUser = require('./routes/AlreadyUser');
var vendorHome = require('./routes/AlreadyUser');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/AlreadyUser' , AlreadyUser.alreadyUser);
app.post('/vendor_homepage' , AlreadyUser.signin);
app.post('/hello',AlreadyUser.alreadyUser);
app.get('/VendorSignUp',AlreadyUser.vendorSignUp);
app.post('/vendorDetails',AlreadyUser.vendorDetails)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
