const express = require('express')
const db = require('./config/mongoose')
const bodyParser = require('body-parser');

const port = 300;
const app = express();

app.use(bodyParser.urlencoded())
app.use(express.static('./assets'));

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function (error) {
    if (error) {
        console.log(`Error on running the server`);
    }

    console.log(`Server is running at port ${port}`)
})