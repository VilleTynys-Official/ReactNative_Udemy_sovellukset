const express = require('express');
const mongoose = require('mongoose');
const authRoutes =require('../routes/authRoutes');




const app = express();

//otetaan reititin käyttöön
app.use(authRoutes);






const mongoUri = 'mongodb+srv://admin:Vitunsalasana666@cluster0-nlbxp.mongodb.net/test?retryWrites=true&w=majority'

//otetaan mongoose käyttöön
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


//testataan et mongoose on yhdistetty
mongoose.connection.on('connected', () =>{
    console.log('Connected to Mongo instance');
})

mongoose.connection.on('error', (err) => {
    console.error('mongoose error');
});



app.get('/', (req, res)=>{
    res.send('hi there');
});


app.listen(3000,()=>{
    console.log('listening port 3000')
});
