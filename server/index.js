'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/environment');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ${err}');
    process.exit(-1);
});

// Start server
const startServer = () => {
    app.listen(config.port, () => console.log('Example Application listening on %d, in %s mode', config.port, config.env));
}

setImmediate(startServer);


module.exports = app;