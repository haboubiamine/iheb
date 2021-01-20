const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = express.Router();
var cors = require('cors')

dotenv.config();
app.use(cors())

const UserRouter = require('./Router/UserRouter')


// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))



// DB Config
mongoose.connect(process.env.DB, {useNewUrlParser: true , useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("we're connected!");

    });


//Router 




app.use('/user', UserRouter);
          
          


const server = app.listen(process.env.Port, () => {console.log("server is running on "+process.env.Port)})





