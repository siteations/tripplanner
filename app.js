var express = require ('express');
var app = express();
var morgan= require('morgan');
var nunjucks = require('nunjucks');
var bParser = require('body-parser');
var Sequelize = require ('sequelize');

var routes = require('./routes/routes.js');
var model = require('./models/').db;

//nunjuck compile
var env = nunjucks.configure('./views', {noCache: true, express:app });
    // have res.render work with html files
    app.set('view engine', 'html');
    // when res.render works with html files, have it use nunjucks to do so
    app.engine('html', nunjucks.render);


//console.log(db);
var port=3000;

app.use(morgan('dev'));
app.use(bParser.urlencoded({ extended: false }));
app.use(bParser.json());
app.use(express.static('./public/'));
app.use(express.static('./public/stylesheets/'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));


app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use('/', (err, req, res, next) =>{
    console.log(err);
    var error={
        'message': err.message,
        'status':err.status,
        'stack':err.stack,
    }
    //res.send(error);
    res.render('error.html', {error:error});
});



model.sync({})
    .then(()=>{
       app.listen(port, () => {
        console.log('listening on 3000');
       })
}).catch(console.log);




