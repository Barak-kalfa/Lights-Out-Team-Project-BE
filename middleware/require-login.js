const jwt = require('jsonwebtoken');

/**
 * a middleware, that protect routes.
 * It checks that the request has a cookie called jwt.
 * If it has that cookie, it will try to validate the token.
 * Only if the token is valid - it calls "next()" and allows
 * the request to continue
 */
function requireLogin(req, res, next) {
  if (!req.cookies?.jwt) {
    return res.status(403).json('not authorized - missing jwt token');
  }

  jwt.verify(req.cookies.jwt, process.env.JWT, (error, decodedToken) => {
    if (error) {
      console.log(error);
      return res.status(403).json({ message: 'not authorized' });
    } else {
      req.user = decodedToken;
      next();
    }
  });
}

module.exports = { requireLogin };
