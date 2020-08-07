import express from 'express';
import mongoose from 'mongoose'; 
import morgan from 'morgan'; 
import bodyParser from 'body-parser'; 

import task from './task'; 

const app = express();

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(bodyParser.json()); 

mongoose.connect('mongodb://172.17.0.3/unit_tests', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 

app.post('/tasks', task.create); 
app.delete('/tasks/:id', task.remove);
app.get('/', (req, res) => {
    res.send('my route'); 
}); 

app.listen(3003, () => {
    console.log('Express started with success!!')
}); 
