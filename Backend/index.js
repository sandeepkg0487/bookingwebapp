const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const { dbconnect } = require('./controller/mongodbconnect')
const login = require('./Route/Login/login')
const booknow = require('./Route/Booknow/booknow')
const user = require('./Route/User/user')
const { registercontroll } = require('./controller/authcontroller');
const HotelOperations  =require('./Route/ManageHotel/HotelOperations')
const getDocuments = require('./controller/searchcontroller');
const Search = require('./Route/Search/Search')


const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


//mongodb cnnection 
dbconnect();
app.use('/login', login)
app.use('/hotel', HotelOperations)
app.use('/booknow', booknow)
app.use('/user', user)
app.post('/signup', registercontroll)
app.use('/search',Search)
// app.get('/search',getDocuments)
// app.post('/getdata',authMiddleware,servedata)



app.listen(PORT, () => {
    console.log(`server listening on port :${PORT}`)
})