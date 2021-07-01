


import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import studentRoutes from './routes/student.js'; 
import studentRoutes1 from './routes/student1.js'; 
import studentRoutes2 from './routes/student2.js'; 
import studentRoutes3 from './routes/student3.js'; 





const app = express(); 
app.use(bodyParser.json({limit: "20mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "20mb", extended: true})); 


const app1 = express(); 
app1.use(bodyParser.json({limit: "20mb", extended: true})); 
app1.use(bodyParser.urlencoded({limit: "20mb", extended: true})); 



const app2 = express(); 
app2.use(bodyParser.json({limit: "20mb", extended: true})); 
app2.use(bodyParser.urlencoded({limit: "20mb", extended: true})); 



const app3 = express(); 



app3.use(bodyParser.json({limit: "20mb", extended: true})); 
app3.use(bodyParser.urlencoded({limit: "20mb", extended: true})); 




app.use(cors()); 
app1.use(cors());
app2.use(cors());
app3.use(cors());
app.use('/students', studentRoutes); 
app1.use('/students1', studentRoutes1); 
app2.use('/students2', studentRoutes2); 
app3.use('/students3', studentRoutes3); 
 


const CONNECTION_URL= "mongodb://ahmednasser345:Ahmedmoody2001@cluster0-shard-00-00.d9kjt.mongodb.net:27017,cluster0-shard-00-01.d9kjt.mongodb.net:27017,cluster0-shard-00-02.d9kjt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-a11wg5-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT= process.env.PORT || 5000; 




mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message)); 
















