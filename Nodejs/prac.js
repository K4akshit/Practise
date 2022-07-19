var https = require('https');
var fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/todos";


https.get(url,(res)=>{
    res.setEncoding('utf8');
    
    let body = '';

    res.on('data',data =>{
        body+=data;
    });

    res.on('end',()=>{
        fs.writeFile('data.json',body,'utf8',(err)=>{
            console.log(err);
        });
    });
})






























// const events = require('events');
// const emitter = new events.EventEmitter();

// emitter.on('newEvent',(message)=>{
//     console.log(`message: ${message}`);
// })

// emitter.emit('newEvent',"hi there akshit");

// var ff = function(name){
//     console.log(name.toString());
// }

// module.exports = {ff};

// const fs = require('fs');

// fs.readdir('./',(err,content)=>{
//     if(err) return err;
//     console.log(content);
// })

// fs.readFile('sample.xml','utf-8',(err,content)=>{
//     if(err) return err;
//     console.log(content);
// })

// var fs = require('fs');

// fs.unlink('hehe.js',(err,msg)=>{
//     if(err) console.log(err);
//     console.log(msg);
// })

