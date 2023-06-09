const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

const userDao = require('../dao/users.dao');

const localLogin = new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    let user = await userDao.findOne({ where: { email } });

    if (!user || user.password !== password)
      return done(null, false, { message: 'invalid Login Credentials' });

    const token = jwt.sign({ user }, 'TOP_SECRET');
    done(null, token);
  }
);

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromAuthHeaderAsBearerToken()
    ]),
    secretOrKey: process.env.JWT_SECRET
  },
  async (payload, done) => {
    const user = payload;
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  }
);

passport.use('jwt', jwtLogin);
passport.use('local', localLogin);

module.exports = passport;
