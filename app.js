var express = require('express');
var app = express();
const fs = require('fs');
const filePath = './file/testfile.txt';
const readLastLines = require('read-last-lines');

// app.get('/', function (req, res) {
//   file = fs.readFileSync(filePath);
//   console.log('File content at First Time : ' + new Date() + ' is \n' + file);
//   // res.send('Codalyze Assignment!');
//   console.log("Codalyze Assignment");
//   fs.watch(filePath, function(eventName, filename) {
//     if(filename){
//       console.log('Event : ' + eventName);
//       console.log(filename + ' file Changed ...');
//       res.write(filename + ' file Changed ...')
//       file = fs.readFileSync(filePath);
//       console.log('File content at : ' + new Date() + ' is \n' + file);
//     }
//     else{
//       console.log('filename not provided or check file access permissions')
//     }
//   });
// });
// app.get('/FileWatch', function (req, res) {
//   const file = fs.readFileSync(filePath);
//   // res.write( console.log('Initial File content: ' + file.toString()));
//   fs.watch(filePath, function(eventName, filename) {
//     if(filename){
//       console.log('Event : ' + eventName);
//       console.log(filename + ' file Changed ...');
//       res.write(filename + ' file Changed ...')
//       file = fs.readFileSync(filePath);
//       console.log('File content at : ' + new Date() + ' is \n' + file);
//     }
//     else{
//       console.log('filename not provided or check file access permissions')
//     }
//   });

// })
app.listen(3000, function () {
  console.log("Codalyze Assignment\n");
  var lines = 0;
  process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
    console.log(array);
    lines = array[3]
  });

  setTimeout(() => {
    console.log('File content at First Time : ' + new Date() + "\n");
    readLastLines.read(filePath, lines)
      .then((files_lines) => console.log("Last " + lines + " Lines Of Files:\n\n" + files_lines));
    fs.watch(filePath, function (eventName, filename) {
      if (filename) {
        console.log('File content at First Time : ' + new Date() + "\n");
        readLastLines.read(filePath, lines)
          .then((files_lines) => console.log("Last " + lines + " Lines Of Files:\n\n" + files_lines));
      }
      else {
        console.log('filename not provided or check file access permissions')
      }
    });
  }, 1000);
});










