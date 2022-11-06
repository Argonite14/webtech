var http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if(req.url==='/'){
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream('index.html').pipe(res);
  }
  else if(req.url ==='/server' && req.method == 'POST'){
    var rawData = '';
    req.on('data',function(data){
       rawData += data;
    })
    req.on('end',function(){
        var inputdata = new URLSearchParams(rawData);
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write('<style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style>')
        res.write('<table style="width:20%">')
        res.write('</tr>' + '<th> Name </th>' + '<td>' + inputdata.get('Pname') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Password </th>' + '<td>' + inputdata.get('Ppass') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Age </th>' + '<td>' + inputdata.get('Page') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Mobile Number </th>' + '<td>' + inputdata.get('Pnum') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Email </th>' + '<td>' + inputdata.get('Pmail') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Gender </th>' + '<td>' + inputdata.get('Pgender') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> State </th>' + '<td>' + inputdata.get('Pstate') + '</td>' + '</tr>');
        res.write('</tr>' + '<th> Skill </th>' + '<td>' + inputdata.get('Pskill') + '</td>' + '</tr>');
        res.end();
    });
  }
});

server.listen(2001,function(){
  console.log('listening at 2001')
}); 