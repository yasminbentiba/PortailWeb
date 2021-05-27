const mongoose = require('mongoose');
const Commentaire = require('./Commentaire');

const Sujet = require('./Sujet');

const Room = require('./Forum');
const User = require('./User');
const Message = require('./Commentaire')
let Schema = mongoose.Schema;

// const ForumSchema = new mongoose.Schema({

//     _id: {type: String},
    
//     sujet: {
//         type: ""
//     },

//     description:{
//         type:""
//     }

// })



var  RoomSchema = Schema({
    name: String ,
    topic: String,
    likes : [{type: Schema.Types.ObjectId, ref: 'User'}],
    ownerId : {type: Schema.Types.ObjectId, ref: 'User'},
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    logo_id : Number
  });
  
//   var Message = new mongoose.Schema({
//     room: Room,
//     user: User,
//     message_body: String,
//     message_status:{type: Boolean, default: false},
//     created_at: { type: Date, default: Date.now },
//   });
  
  
//   module.exports = mongoose.model("User", Message);
//   module.exports = mongoose.model("Roo", Room);
//   module.exports = mongoose.model("User", User);
  


module.exports = mongoose.model('Room', RoomSchema);