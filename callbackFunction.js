/* function makeFile(){
  console.log("Dosya oluştur.")
}
makeFile() */

function makeFile(callback){
  console.log("Dosya oluştur.")
  let file={
    name:'JSFİLE'
  }
  callback(file)
}


makeFile (function (myFile){
  console.log(`${myFile.name} oluşturulmaya başlandı.`)
})