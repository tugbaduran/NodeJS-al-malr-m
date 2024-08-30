 const fs= require('fs')

 fs.readFile("dosya.txt", "utf8",function(hata,data){
   if(hata){
    return data;
  }
   console.log(data);
 });

// fs.writeFile("dosya2.txt", "Tuğba Duran",function(hata)
// {
//   if(hata){
//     return hata;
//   }
// console.log("Yazıldı.");
// });

// fs.appendFile("dosya2.txt", "Tuğçe Duran",function(hata)
// {
//   if(hata){
//     return hata;
//   }
// console.log("Eklendi.");
// });

fs.unlink("dosya2.txt",function(hata)
{
  if(hata){
    return hata;
  }
console.log("Silindi.");
});