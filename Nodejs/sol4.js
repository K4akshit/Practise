var fs = require('fs');
var http = require('http');
var https = require('https');
var request = require('request');
var url = require('url');
var async = require("async");
var zipFolder = require('zip-folder');

const fileList = ['https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg','https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg'];

var download = function(uri, callback){
    // var client = http;
    // if (uri.toString().indexOf("https") === 0){
    //   client = https;
    //  }
    // client.request(uri,(res)=>{
    //     res.pipe(fs.createWriteStream(filename)).on('close', callback);
    // })
    var q = url.parse(uri, true);
    request(uri).pipe(fs.createWriteStream(`/Users/akshit/Desktop/PRACTISE/Nodejs/images/${q.host}.jpg`)).on('close', callback);
  };

async.each(fileList, download, function(err) {
    if( err ) {
        console.log(err);
    } else {
        console.log('All files have been saved successfully');
    }
});


zipFolder('/Users/akshit/Desktop/PRACTISE/Nodejs/images', '/Users/akshit/Desktop/PRACTISE/Nodejs/images.zip', function(err) {
    if(err) {
        console.log('Oh no! Error!', err);
    } else {
        console.log('Nice! :)');
    }
});

    

    // const directoryPath = path.join(__dirname, 'images');
    // //passsing directoryPath and callback function
    // fs.readdir(directoryPath, function (err, files) {
    //     //handling error
    //     if (err) {
    //         return console.log('Unable to scan directory: ' + err);
    //     } 
    //     //listing all files using forEach
    //     files.forEach(function (file) {
    //         for (const image of images) {
    //             const imageData = fs.readFileSync(image);
    //     img.file(image, imageData);
    //         }
    //         console.log(file); 
    //     });

    //     zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    //     .pipe(fs.createWriteStream('sample.zip'))
    //     .on('finish', function () {
    //         console.log("sample.zip written.");
    //     });
    // });


// download('https://www.google.com/images/srpr/logo3w.png', function(){
//   console.log('done');})

