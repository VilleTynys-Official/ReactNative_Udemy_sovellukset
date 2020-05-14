const mongoose = require('mongoose');



//schema karttta pisteille. Luodaan tänne koska täs tapauksessa makes sense.
const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});


//schema trackille.
const trackSchema =new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    name: {
        type: String,
        default: '',
    },
    locations: [pointSchema]
});

mongoose.model('Track', trackSchema);

