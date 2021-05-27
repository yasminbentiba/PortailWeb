const mongoose = require('mongoose');
const Room = require('./Forum');
const User = require('./User');
let Schema = mongoose.Schema;
// const Message = require('../Mesage');

// const MessageSchema = new mongoose.Schema({
//     //id du message
    
//     userId: {
//         type: String

//     },
    
//     date: {
//         type: Date,
//         value: Date.now()
//     },

//     msg:{
//         type:String
//     }

// });



  var Message = Schema({
    room: {type: Schema.Types.ObjectId, ref: 'Room'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    message_body: String,
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
  });


//pour exporter le modéle :besh nasen3oulou methode
module.exports = mongoose.model('Message', Message);