const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const { dbconnect } = require('./controller/mongodbconnect')
const login = require('./Route/Login/login')
const place = require('./Route/Places/place')
const manageAdd = require('./Route/ManageAdd/mangeAdd')
const booknow = require('./Route/Booknow/booknow')
const { registercontroll, servedata } = require('./controller/authcontroller');
const { authMiddleware } = require('./controller/jwt');
const getDocuments = require('./controller/searchcontroller');
const checkavailability = require('./controller/checkAvailability');

const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


//mongodb cnnection 
dbconnect();
app.post('/checkavailability',checkavailability)
app.use('/login', login)
app.use('/addplaces', place)
app.use('/postadd', manageAdd)
app.use('/booknow', booknow)
app.post('/signup', registercontroll)
app.get('/search',getDocuments)
// app.post('/getdata',authMiddleware,servedata)



app.listen(PORT, () => {
    console.log(`server listening on port :${PORT}`)
})