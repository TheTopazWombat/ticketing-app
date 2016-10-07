var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.js');
var connectionString = config.connectionString;
var app = module.exports = express();


app.use(session({
    secret: config.sessionSecret
}));

app.use(bodyParser.json());
// app.use(cors(corsOptions));




var massiveInstance = massive.connectSync({
    connectionString: connectionString
});

app.set('db', massiveInstance);

var db = app.get('db');

app.use(express.static(__dirname + '/../public'));
app.use("node_modules", express.static(__dirname + '/../node_modules'));

app.get('/api/jobs/all', function(req, res, next){
    db.get_all_jobs(function(err, response) {
        console.log(response);
        if (err) {
          console.log(err);
          res.set(401).send("There was an error getting the jobs");
        }
        else {
          res.set(200).json(response);
        }
    });
});

app.post('/api/jobs/new', function(req, res, next) {
  db.post_new_job([req.body.job_number, req.body.last_name, req.body.product, req.body.tech_assigned, req.body.time, req.body.checked_in, req.body.final_test, req.body.recharged, req.body.counter, req.body.customer_approval], function(err, response) {
    if (err) {
      console.log(err);
      res.set(401).send("There was an error posting the job");
    }
    else {
      res.set(200).json(response);
    }
  });
});

app.put('/api/jobs/update', function(req, res, next) {
  db.update_job_by_invoice([req.body.job_number, req.body.last_name, req.body.product, req.body.tech_assigned, req.body.time, req.body.checked_in, req.body.final_test, req.body.recharged, req.body.counter, req.body.customer_approval, req.body.archived], function(err, response) {
    console.log(req.body);
    if (err) {
      console.log(err);
      res.set(401).send("There was an error updating the job");
    }
    else {
      console.log(response);
      res.set(200).json(response);
    }
  });
});

var port = config.port;
app.listen(port, function() {
    console.log('listening on ', port);
});
