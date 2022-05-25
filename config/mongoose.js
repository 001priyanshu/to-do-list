const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Priuyanshu:Priyanshu@cluster0.ufwtd.mongodb.net/TO-DO_LIST_LAST');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error on connecting to database'));

db.once('open', function () {
    console.log(`Successfully connected to database`);
})