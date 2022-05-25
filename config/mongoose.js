const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ritikpatil:ritikpatil@cluster.ao7ly.mongodb.net/ToDO-db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error on connecting to database'));

db.once('open', function () {
    console.log(`Successfully connected to database`);
})