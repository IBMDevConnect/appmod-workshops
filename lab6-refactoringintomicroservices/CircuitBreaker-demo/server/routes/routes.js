const boom = require('boom');
const inquirer = require('inquirer')

var delay=0;
var questions = [{
  type: 'input',
  name: 'name',
  message: " ",
}]

var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send("Hello!");
  });

  app.post("/signup", function (req, res) {
    setTimeout(function() {
      if(delay >0) {
        boom.locked('');
      } else {
        if (req.body.username != "" && req.body.pass != "") {
          return res.status(200).send({
            success: req.body.username,
            message: 'Success'
          });
        } else {
          return res.status(503).send({
            success: req.body.pass,
            message: req.body.username
          });
    
        }
      }
     
      
  }, delay);
   

  });
}


function recur() {
  inquirer.prompt(questions).then(answers => {


    if (`${answers['name']}` == "lock") {
      
      delay=5000;
      console.log("Server is locked");

    }
    else
    if(`${answers['name']}` == "reset")
    {
      delay=0;
      console.log("Server is unlocked");
    }
    else {
      console.log("Invalid command");
    }



    recur();


  })
}

recur();
module.exports = appRouter;
