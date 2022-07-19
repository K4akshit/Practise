const http = require('http');
const fs = require('fs');

var options = {
    host: "www.google.com",
    port: 80,
    path: "/"
};

//non stream saving part
var body = '';
var res = http.request(options,(res)=>{
    res.on('data',(data)=>{
        body+=data;
    })

    res.on('end',(result)=>{
        fs.writeFile('nobuff.txt',body,(err)=>{
            if(err) return console.log(err);

            console.log('file is written');
        })
    })
})

res.end();

//this is the stream saving part
var buffStream = fs.createWriteStream('buff.txt');
var resBuff = http.request(options,(res)=>{
    res.on('data',(data)=>{
        buffStream.write(data);
    })

    res.on('end',(result)=>{
        buffStream.end();
    })
})

resBuff.end();