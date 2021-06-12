var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req: any, res:any, next: any) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function(req: any, res:any, next: any){
  console.log('get route', req.testing);
  res.end();
});

app.get('/temp', function(req: any, res:any, next: any){
  console.log('get temp', req.testing);
  res.end();
});

app.ws('/', function(ws: any, req: any) {
  ws.on('message', function(msg: any) {
    console.log('from client', msg);
  });
  
  const sendMessage = () => {
    const time = new Date().getMinutes();
    console.log('time', time);
    ws.send(time);  
  }
  
  setInterval(sendMessage, 5000);
  
});

app.listen(3000, () => {
  console.log('started');
});