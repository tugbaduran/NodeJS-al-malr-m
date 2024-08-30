const path= require("path");

//Normalization
console.log('normalization:'+ path.normalize('/sssit/javatpoint/node/newfolder/tab/..'));
//Join
console.log('join path:'+ path.join('/sssit,','javatpoint','node/newfolder','tab','..'));
//Resolve
console.log('resolve:'+ path.resolve('pathModulu.js'));
//Extension
console.log('extension:'+ path.extname('pathModulu.js'));