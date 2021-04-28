const User = require('../../models/User');

module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {

    
        // if (!email) {
        //   return res.send({
        //     success: false,
        //     message: 'Error: Email cannot be blank.'
        //   });
        // }
        // if (!password) {
        //   return res.send({
        //     success: false,
        //     message: 'Error: Password cannot be blank.'
        //   });
        // }
        
        // email = email.toLowerCase();
        // email = email.trim();
        
        // User.find(
        //     {
        //         email: email,
        //     },
        //     (err, prevUsers) => {
        //         if(err) {
        //             return res.status(500).send({
        //                 message: 'Error: Server Error',
        //             });
        //         }
        //         else if(prevUsers.length!= 0) {
        //             return res.status(200).send({
        //                 message: 'Error: Account Already Exists'
        //             })
        //         }
        //         else {
                    const newUser = new User();
                    newUser.email = req.body.email;
                    newUser.password = req.body.password; 
                    // newUser.generateHash(password);
                    newUser.name = req.body.name;
                    newUser.firstName = req.body.firstName;
                    newUser.lastName = req.body.lastName;
                    newUser.url=req.body.url;
                    newUser.role = req.body.role;
                    newUser.atelierType = req.body.atelierType;
                    newUser.isActivated=req.body.isActivated;

                    newUser.save((err, user) => {
                        if(err) {
                            return res.status(500).send({
                                message: 'Error: Server Error',
                            });
                        }
                        else {
                            return res.status(200).send({
                                message: "Signed Up",
                            });
                        }
                        
                    });
                // }
            // });       
    });
};