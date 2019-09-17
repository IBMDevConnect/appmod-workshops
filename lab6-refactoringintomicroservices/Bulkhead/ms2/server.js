var http=require('http');
const inquirer = require('inquirer')

var result="none";

const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require("jquery")(dom.window);
const circuitBreaker = require('opossum');

var questions = [{
  type: 'input',
  name: 'name',
  message: "Command :  ",
}]

http.createServer(function (request, response)
{
  //function called when request is received
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //send this response
  response.end(result);
}).listen(3400, '127.0.0.1');











function tryagin()
{
  //Request the API
  var request1=http.request({
    'host': 'localhost',
    'port': 5000,
    'path': '/getMongo',
    'method': 'GET'
  });

  //assign callbacks
  request1.on('response', function(response) {
    // console.log('Response status code:'+response.statusCode);

       response.on('data', function(data) {
         console.log(''+data);
       });



  }).on('error', function(e) {
    //console.error("ms2 : I am Dead");
  });
  request1.end();

}



function recur(){

  inquirer.prompt(questions).then(answers => {


  if(`${answers['name']}` == "requestdb")
  {
    tryagin();

  }



  recur();


})
}




  recur();

//setInterval(check, 1000);
