//console.log(__filename);
//console.log(__dirname);
 
/*setInterval(function(){
  console.log("setInterval: Merhaba! 1 milisaniye tamamlandı!..")
},1000);
*/

/*let i= 0;
console.log(i);
setInterval(function(){
  i++;
  console.log(i);
},1000);
*/

/*setTimeout(function(){
  console.log("setTimeout: Merhaba! 1 milisaniye tamamlandı!..");
},1000);
*/

/*let recursive= function(){
  console.log("Hey! 1000 milisaniye tamamlandı!..");
  setTimeout(recursive,1000);
}
recursive();
*/

/*function hosgeldiniz(){
  console.log("JavaTpoint'e hoş geldiniz!");
}
let id1= setTimeout(hosgeldiniz,1000);
let id2= setInterval(hosgeldiniz,1000);
clearTimeout(id1);
*/
function hosgeldiniz(){
  console.log("JavaTpoint'e hoş geldiniz!");
}
let id1= setTimeout(hosgeldiniz,1000);
let id2= setInterval(hosgeldiniz,1000);
clearInterval(id2);