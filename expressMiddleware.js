const express = require("express")
const expressMiddleware=express()
const port= 3000
const hostname= '127.0.0.1'

expressMiddleware.use((req,res,next)=>{
  res.send("Middleware Çalıştı.")
  //next();
});
expressMiddleware.get("/",(req,res)=>{
  res.send("Route Çalıştı...")

});

expressMiddleware.listen(port,hostname,()=>{
  console.log(`Server çalışıyor, http://${hostname}${port}/`)
})
