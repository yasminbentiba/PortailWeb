const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    //id du message
    
    userId: {
        type: String

    },
    
    date: {
        type: Date,
        value: Date.now()
    },

    msg:{
        type:String
    }

});

//pour exporter le modéle :besh nasen3oulou methode
module.exports = mongoose.model('Message', MessageSchema);