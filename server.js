const mongoose = require('mongoose');
const app = require('./app');

const mongodb = process.env.mongodb || 'mongodb://localhost/User';
const port = process.env.port || 3000;

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(`ERROR. Conectando con base de datos ${err}`);
  }

  app.listen(port, console.log('Node server running on port 3000'));
});

module.export = app;
