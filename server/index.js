import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import studentRoutes from './routes/schedule.js'; 



const app = express(); 


app.use(bodyParser.json({limit: "20mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "20mb", extended: true})); 


app.use(cors()); 
app.use('/students', studentRoutes); 


const CONNECTION_URL= "mongodb+srv://helbawy:Adhamx12@cluster0.s49hk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT= process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message)); 


mongoose.set('useFindAndModify', false);