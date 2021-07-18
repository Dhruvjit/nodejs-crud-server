const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    
    pregunta: {
        type:String,
        required: 'Please enter the question',
        index: true,
        unique: true
    },

    // multi choice answers should be stored in the form of arrays
    respuestas: [
        {
            type: String,
            required: 'Please enter the answer',
        }
    ],

    correcta: {
        type: Number,
        required: 'Please mention the number of correct answer e.g. 0 is chosen by default'
    }
})

// assign shape of document into schema and load it into constant variable
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;