const cors = require('cors');
const morgan = require('morgan');
const express = require("express");
const api = require("./Api/api");
require("./db");


const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello world')
})

//   API CALLS

app.post('/api/stuff', api.createStuff);
// GET call
app.get('/api/stuff', api.plainGetstuff);

//   email
app.get('/api/stuff/:id', api.getStuff);
// Put call-Update
app.put('/api/stuff/:mobile', api.putStuff);

// delete
app.delete('/api/stuff/:id', api.deleteStuff);


app.listen(3000, () => {
    console.log("Started on PORT 3000");
})
