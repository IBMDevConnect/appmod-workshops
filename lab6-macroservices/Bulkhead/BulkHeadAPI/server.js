const express = require('express')
const app = express()
const port = 5000
const delay = require('delay');
var sem = require('semaphore')(2); //Capacity
const cors = require('cors')

app.use(cors());
var count=0;
var flag=0;
app.get('/getMongo', function(req, res){



      res.write("In the queue ... ");

      sem.take(function() {

           count+=1;
           res.write("Under execution ... ");
           console.log("Currently serving request number "+count);

           setTimeout(leave,15000);

           function leave()
           {
             sem.leave();
             res.end("Executed");
             flag+=1;

             console.log("Served request number "+flag);
           }
           //console.log(sem.available());




//})();







      });




} )

app.listen(port, () => console.log(`The database server started`))


//count-=1;
//console.log("Currently  serving "+count+" requests");
//console.log("Served "+count+" requests");
