require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts.js');

const app = express();
//middleware
//looks for data to send to server
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//database connection

mongoose.connect(process.env.MONGO_URI)
    .then(( )=>{
        //request listener
        app.listen(process.env.PORT, () =>{
            console.log('connected to database, listening on port 4000')
        }); 
    })
    .catch((error) =>{
        console.log(error)
    })

