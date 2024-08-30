const express= require("express");
 
let app= express()
const bodyParser= require("body-parser")

let urlEndcodedParser= bodyParser.urlencoded({extended: false})

app.get('/', function(request, response){

  response.send("Merhaba...")

})


app.get('/admin', function(request, response){

  response.send("Merhaba admin...")

})


app.get('/product', function(request, response){
  console.log("ID: " + request.query.id)
  console.log("Category ID: " + request.query.categoryid)

  response.send("Merhaba product...")

})

app.post('/product', urlEndcodedParser,function(request, response){
  console.log(request.body.isim)
  response.send("post isteği alındı.")
})

app.delete('/product', function(request, response){
  response.send("delete isteği alındı.")
})

app.put('/product', function(request, response){
  response.send("put isteği alındı.")
})

app.get('/*customer*', function(request, response){
  response.send("Müşteriler listelendi.")
})

let server= app.listen(8080);