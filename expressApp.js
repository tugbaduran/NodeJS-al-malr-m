const path = require("path")
const express = require("express")
const expressApp=express()
const port= 3000
const hostname= '127.0.0.1'

expressApp.use(express.static('public'))

expressApp.get('/',(req,res)=> {
  res.sendFile(path.resolve(__dirname,'expressİndex.html'))
})

expressApp.get('/expressAbout',(req,res)=> {
  res.sendFile(path.resolve(__dirname,'expressAbout.html'))
})
expressApp.get('/expressContact',(req,res)=> {
  res.sendFile(path.resolve(__dirname,'expressContact.html'))
})

expressApp.get('/users/:userID/movies/:moviesID',(req,res)=>{
  res.send(
    `
    <h1>Kullanıcı Adı: ${req.params.userID}</h1>
    <h1>Film Adı: ${req.params.moviesID}</h1>
    `
  )
})
expressApp.listen(port,hostname,()=>{
  console.log(`Server çalışıyor, http://${hostname}${port}/`)
})
