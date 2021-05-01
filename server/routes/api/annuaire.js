

const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
     
    app.post('/api/ateliertype', (req, res, next) => { 
        const atelierTypeReq = req.body.atelierType;
 User.find({
    atelierType :  atelierTypeReq
}, (err, userss) => {
    if(err) {
        console.log('err2:', err);
        return res.send({
            success: false,
            message: 'Error: server error',
            respId: 'LIE3',
        });
    } else {
        


        res.send({
            users : userss
        })


    }  } 
    )



}   )}    