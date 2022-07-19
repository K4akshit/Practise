const xml2js = require('xml2js');
const fs = require('fs');
//const Rl = require('readline').createInterface(process.stdin,process.stdout);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const parseString = xml2js.parseString;

// fs.readFile('sample1.xml','utf8',(err,content)=>{
//     if(err) console.log(err);

//     parseString(content,(err,result)=>{
//         if(err) console.log(err);

//         const 
//     })
// })

const xmlParser = function(data){
    parseString(data,(err,result)=>{
        if(err) console.log(err);
        console.log(result);
    })
}



const readFile = function(path){
    fs.access(path,(err)=>{
        if(err) console.log('no such file is present');

        fs.readFile(path,'utf8',(err,content)=>{
            if(err) console.log('error with the file');

        xmlParser(content);
        //console.log(resultData);
        })

        
    })
}

readFile('sample1.xml');

  
//   readline.question('Who are you?', name => {
//         readFile(`"${name}"`)
//     readline.close();
//   });



