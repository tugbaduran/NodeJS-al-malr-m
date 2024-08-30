const mongoose = require('mongoose')
const Post= require('./models/Post')

 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db');

Post.findByIdAndDelete('6194cc736a9d4ff3bbcc603a', (error, post)=>{
  console.log(error, post)
})


/* Post.findByIdAndUpdate('6194ca383139f377ec7c8966',{
  title:'Benim 1. Postum'
},(error, post)=>{
  console.log(error, post)
}) */

/* Post.findById('6194ca383139f377ec7c8966', (error,post)=>{
  console.log(error,post)
}) */

 /* Post.find({ },(error,post)=>{
  console.log(error,post)
}) */
 
/* Post.find({
  title:'İkinci Post Başlığım'
},(error,post)=>{
  console.log(error,post)
})
 */
/* Post.create({
  title: 'İkinci Post Başlığım',
  content:'İkinci Post İçeriği, lorem ipsum text'
}, (error, post)=>{
  console.log(error, post)
}) */