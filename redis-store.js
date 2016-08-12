/*
  $ npm install cookie-parser express-session connect-redis
  $ node redis-store.js and access localhost:5000 in browser
  
  $ redis-cli: to run redis cli
  127.0.0.1:6379> keys sess* : to list all sessions
  127.0.0.1:6379> get sess:<id>
*/

var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');
var session=require('express-session');
var RedisStore=require('connect-redis')(session);

app.use(cookieParser());

app.use(session({
  resave:true,
  saveUninitialized:true,
  store:new RedisStore({host:'localhost',port:6379}),
  secret:'HELLO-WORLD',
  cookie:{path:'/',maxAge:3600000}
}));

app.get('/',function(req,res){
  console.log('Session ID:',req.sessionID);

  if(!req.session.counter) 
    req.session.counter=0;

  req.session.counter++;

  res.send('Counter:'+req.session.counter);
});

app.listen(5000);