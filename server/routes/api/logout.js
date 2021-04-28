const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
    app.get('/api/account/logout', (req, res, next) => {
        const { query } = req; 
        const { token } = query;
        
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false,
        }, {
            $set: {
                isDeleted: true,
            }
        }, null, (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Logged Out',
                });
            }
        }); 





        UserSession.desactivateAndUpdate({
            _id: token,
            isActivated: user.isActivated,
        }, {
            $set: {
                isActivated: !user.isActivated,
            }
        }, null, (err) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Logged Ou',
                });
            }
        }); 





        
    });
};