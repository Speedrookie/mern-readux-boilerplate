const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, cb) => {
    cb(null, user.strategyID);
});

passport.deserializeUser((strategyID, cb) => {
    User.findOne({
        strategyID: strategyID
    }).then(user => {
        cb(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async (accessToken, refreshToken, profile, cb) => {
            const existingUser = await User.findOne({ strategyID: profile.id })
            if (existingUser) {
                cb(null, existingUser);
            }
            else {
                const user = await new User({
                    strategyID: profile.id,
                    strategyType: profile.provider,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    language: profile._json.language,
                    joined: Date.now(),
                    lastLogin: Date.now()
                }).save();
                cb(null, user);
            }
        }
    )
);
