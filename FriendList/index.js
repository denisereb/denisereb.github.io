var express = require('express');
var app     = express();
var http    = require('http').Server(app);


//Tell node where to find static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3001, function(){
	console.log('listening on *:3001');
});