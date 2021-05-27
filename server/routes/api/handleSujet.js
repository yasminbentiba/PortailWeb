const User = require('../../models/User');
const Room = require('../../models/Forum');
const Message = require('../../models/Commentaire');
const UserSession = require('../../models/UserSession');


module.exports = (app) => {

    app.post('/api/add/sujet', (req, res, next) => {
        // console.log(req.body);


        // name: { type: String, lowercase: true, unique: true },
        // topic: String,
        // owner : User,
        // users: [User],
        // messages: [Message],
        // created_at: Date,
        // updated_at: { type: Date, default: Date.now },


        var room1 = new Room()
        room1.name = req.body.sujet
        room1.topic = req.body.description
        room1.logo_id = req.body.logo_id
        var user = new User()


        room1.ownerId = req.body.ownerId
        console.log();
        room1.save((err, room1) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: 'Error: Server Error',
                });
            }
            else {


                return res.status(200).send({
                    message: "Sujet addded Successfully",
                });
            }
        })
    })

    app.post('/api/getUser', (req, res, next) => {
        console.log(req.body.userId);
        User.findById(req.body.userId, (err, targetUser) => {
            console.log(targetUser);
            console.log(err);
            return res.send({
                success: true,
                message: 'get',
                user: targetUser,
            });

        })

    })


    // Room.find({}).sort([['date', -1]]).exec(function(err, docs) { ... });

    app.get('/api/sujets/getAllSujet', (async (req, res) => {
        Room.find({}).sort([['created_at', -1]]).exec(function(err, sujets) { 
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                    respId: 'LIE6',
                });
            } else {
                console.log(sujets);
                return res.send({
                    success: true,
                    message: 'get',
                    sujets: sujets,
                });
            }

        });
    }



    ))

    app.post('/api/getRoom', (req, res, next) => {
        console.log(req.body.roomId);
        Room.findById(req.body.roomId, (err, targetRoom) => {
            console.log(targetRoom);
            console.log(err);
            return res.send({
                success: true,
                message: 'get',
                room: targetRoom,
            });

        })

    })



    //    var Message = Schema({
    //     room: {type: Schema.Types.ObjectId, ref: 'Room'},
    //     user: {type: Schema.Types.ObjectId, ref: 'User'},
    //     message_body: String,
    //     message_status:{type: Boolean, default: false},
    //     created_at: { type: Date, default: Date.now },
    //   });

    app.post('/api/add/comment', (req, res, next) => {

        const newComment = new Message();

        newComment.room = req.body.room
        newComment.user = req.body.userId
        newComment.message_status = false
        newComment.message_body = req.body.message_body

        newComment.save((err, message) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error: Server Error',
                });
            }
            else {

                Room.findByIdAndUpdate(message.room,
                    { "$push": { "messages": message._id, "users": req.body.userId } },
                    function (err, Updatedroom) {
                        if (err) throw err;
                        console.log(Updatedroom);
                    }
                );

                return res.status(200).send({
                    message: message,
                });

            }
        });      
    });


    app.post('/api/getmessage', (req, res, next) => {
        Message.find({ _id: req.body.messageId }, (err, currentMessage) => {
            // console.log(targetRoom);
            console.log(err);

            if (currentMessage.length != 1) {
                return res.send({
                    success: false,
                    message: 'get',
                    message: currentMessage[0],
                });
            } else {
                return res.send({
                    success: true,
                    message: 'get',
                    message: currentMessage[0],
                });
            }

        })
    })





    app.post('/api/add/like', (req, res, next) => {

       

        Room.findByIdAndUpdate(req.body.room_id,
            { "$push": { "likes": req.body.user_id  } },
            function (err, Updatedroom) {
                if (err) throw err;
                console.log(Updatedroom);
            }
        );

        return res.status(200).send({
            message: "message added succesfully",
        });
    })



    app.post('/api/delete/comment', (req, res, next) => {

        Message.findByIdAndRemove(req.body.comment_id, function(err,data)
        {
            if(!err){
                console.log("Deleted");
            }
        });

        Room.findByIdAndUpdate(req.body.room_id,
            { "$pull": { "messages":  req.body.comment_id } },
            function (err, Updatedroom) {
                if (err) throw err;
                console.log(Updatedroom);
            }
        );

        return res.status(200).send({
            message: "message added succesfully",
        });
    })


    app.post('/api/delete/sujet', (req, res, next) => {

        Room.findByIdAndRemove(req.body.room_id, function(err,data)
        {
            if(!err){
                console.log("Deleted");
            }
        });
        
        return res.status(200).send({
            message: "message added succesfully",
        });
    })



}