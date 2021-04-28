const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
    app.post('/api/account/signin', (req, res, next) => { 
        const email = req.body.email;
        const password = req.body.password;
        console.log('email', email)
        if(!email) {
            return res.status(300).send({
                message: 'Error: Email cannot be blank.',    
                respId: 'LIE1'});
        }
        
        if(!password) {
            return res.send({
                success: false,
                message: 'Error Password cannot be blank.',
                respId: 'LIE2',
            });
        }
        
        // email = email.toLowerCase();
        // email = email.trim();
        
        User.find({
            email: email
        }, (err, users) => {
            if(err) {
                console.log('err2:', err);
                return res.send({
                    success: false,
                    message: 'Error: server error',
                    respId: 'LIE3',
                });
            } 
            
            if (users.length != 1) {
                return res.send({
                    success:false,
                    message: 'Error: Invalid',
                    respId: 'LIE4',              
                });
            } else { 
                const user = users[0];
                // console.log(password, user.password);
                // if(!user.validPassword(password)) {
                //     return res.send({
                //         success: false,
                //         message: 'Error: Wrong Email or Password',
                //         respId: 'LIE5',
                //     });
                // } else {
             
             
             
                const userSession = new UserSession();
                    userSession.userId = user._id;
                    userSession.save((err, doc) => { 
                        if (err) {
                            console.log(err);
                            return res.send({
                                success: false,
                                message: 'Error: Server Error',
                                respId: 'LIE6',
                            });
                        } else {
                            console.log('doc', doc)
                            return res.send({
                                success: true,
                                message: 'Valid sign in',
                                token: doc._id,
                                name: user.name,
                                firstName : user.firstName,
                                role : user.role,
                                respId: 'LIS',
                            });
                        }
                        
                    });
                }
            }
            
            
            
        );
        
    });
};