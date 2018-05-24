    //required modules
var express = require( "express" );
var http    = require( "http" );

//dependency injection
var config   = require( "./config.js" );
var myRoutes = require( "./routes/myRoutes.js" );

var app      = express();
// Middleware to load static files
app.use( express.static( __dirname  + '/../Login' ) );
console.log(__dirname);
//routing logic
app.get('/test',function(req,res){
    res.send('hello world');
})
app.get('test1',function(req,res){
    res.send('hello world 1');
})
app.get('/login/:username/:password', myRoutes.login);
app.get('/signup/:fname/:lname/:email/:pswd/:cpswd', myRoutes.signup);
app.get('/home', myRoutes.home);
app.get('*', myRoutes.defaultPage);

//server listening in port
app.listen(config.port, function() {
   console.log('Express server listening on port ' , config.port);
} );
