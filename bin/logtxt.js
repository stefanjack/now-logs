var express = require('express');
var app     = express();

var fs=require("fs");

app.set('port', (process.env.PORT || 8090));
app.get('/', function(request, response) {
    var result = 'App is running<br><a href="./logs">logs</a>';
    response.send(result);
})
app.get('/logs', function(request, response) {
    var result="";
	/*
	if(fs.existsSync("./log.txt")){
		//load
		var logsReader = require('readline').createInterface({
			input: fs.createReadStream('./log.txt')
		});
		logsReader.on('line', function (line) {
			result+=line+"\n";
		});
		//console.log("Data loaded!");
		logsReader.on('close',function(){response.send("<pre>"+result+"</pre>");});
	}
	//else console.log("Save data not found!");
	*/
	result=logtext;
	response.send("<pre>"+result+"</pre>");
})

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

var logtext="";

function saveLogs(savetext){
	logtext+=savetext+"\n";
	var fs=require("fs");
	savetext+="\r\n";
	fs.appendFile('./log.txt', savetext,  function(err) {
		if (err) return console.error(err);
		//console.log("Data saved!");
	});
}

module.exports=saveLogs;