module.exports.authenticate = function(req, res, next) {
// console.log('authenticating')
require('../env');
 console.log(req.header('Authorization'))

  var token = req.header('Authorization');

  if (token) {
    // var token = req.headers.authorization.split(' ')[1]; //--> Authorization Bearer xxx
    jwt.verify(token, 'process.env.JWT_KEY', function(error, decoded) {
      if (error) {
        console.log(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        var authenticated = true;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};