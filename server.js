let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

const unitRoutes = require('./routes/unit.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected')},
  err => { console.log('cannot connect to database '+err)}
);
const app = express();
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 4000;

app.use('/units', unitRoutes)
var server = app.listen(function(){
  console.log("Listening on port "+port);
})
