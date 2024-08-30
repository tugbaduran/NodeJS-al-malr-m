const http = require('http')
const log =require('./log.js')
//const city=require('./exportsDemo.js')
const sayHello =require('./exportsDemo.js')

http.createServer(function(request,response){
  console.log(request.url)
  if(request.url=="/admin"){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("<html><body><strong>Admin Sayfası</strong></body></html>")
  }
  else if (request.url=='/'){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("<html><body><strong>Anasayfa</strong></body></html>")
  }
  else if(request.url=='/customers'){
    response.writeHead(200,{'Content-Type':"application/json"})
    response.write(JSON.stringify({name:"Tuğba", lastname:"Duran" }))
  }

  response.end()
  response.setHeader('Content-Type','text/html')
  })
.listen(8080)

log.information("Sunucu yayına geçti.")
//console.log(city) 
console.log(sayHello())