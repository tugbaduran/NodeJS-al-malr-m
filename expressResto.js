const http = require('http');
const fs= require('fs');
 http.createServer(function(istek,cevap){
   cevap.setHeader("content-type","text/html; charset=utf-8");
   consol.log(istek.url);
   if(istek.url=="/") istek.url="/index.html";
   fs.readFile(`resto${istek.url}`,function(err,data){
     if(err) statusCode=404;
     else{
       statusCode=200;
       cevap.write(data.toString());
     }
     cevap.end();
   });
 }).listen(80);
