import passport from 'passport';
const JWT_SECRET = 'kjhasdf';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

/**
 * Create a passport middleware to authenticate a request with a valid JWT token
 * Extracts the token from the Auth Header as a Bearer and get the User information
 * generated during login.
 * If successful, calls next middleware
 */
passport.use(
  new JwtStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);