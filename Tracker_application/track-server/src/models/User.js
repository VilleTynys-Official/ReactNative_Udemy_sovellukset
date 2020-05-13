const mongoose = require('mongoose');

//kerrotaan userin rakenne mongooselle.
//mongoose tekee myös suoraan collectionin MongoDB:hen.
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

//yhdistetään mongooseen User schema
mongoose.model('User', userSchema);
