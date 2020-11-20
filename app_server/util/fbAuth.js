const {admin, db} = require('./admin');

module.exports = (req, res, next) => {
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        console.error('Not token found');
        return res.status(403).json({ error: 'Unathorized'});
    }

    admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken;
            req.token = idToken;
            return next();
        })
        .catch(err => {
            console.error('Error while verifying token');
            return res.status(403).json({ error: "Unathorized" });
        });
}