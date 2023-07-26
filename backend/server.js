require('dotenv').config();
const express = require('express');
const app = express();
const workoutRoutes = require('./routes/workouts.js');

//middleware
//looks for data to send to server
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//request listener
app.listen(process.env.PORT, () =>{
    console.log('listening on port 4k')
}); 