'use strict';

/**
 * Module dependencies.
 */
var express = require('express');
var passport = require('passport');

var userRouter = express.Router({mergeParams: true});

// User Routes
var users = require('../../app/controllers/users.server.controller');

// Setting up the users profile api
userRouter.route('/users/me').get(users.me);
userRouter.route('/users').put(users.update);
// userRouter.route('/users/accounts').delete(users.removeOAuthProvider);

// Setting up the users password api
userRouter.route('/users/password').post(users.changePassword);
userRouter.route('/auth/forgot').post(users.forgot);
userRouter.route('/auth/reset/:token').get(users.validateResetToken);
userRouter.route('/auth/reset/:token').post(users.reset);

// Setting up the users authentication api
userRouter.route('/auth/signup').post(users.signup);
userRouter.route('/auth/signin').post(users.signin);
userRouter.route('/auth/signout').get(users.signout);

// // Setting the facebook oauth routes
// userRouter.route('/auth/facebook').get(passport.authenticate('facebook', {
// 	scope: ['email']
// }));
// userRouter.route('/auth/facebook/callback').get(users.oauthCallback('facebook'));

// // Setting the twitter oauth routes
// userRouter.route('/auth/twitter').get(passport.authenticate('twitter'));
// userRouter.route('/auth/twitter/callback').get(users.oauthCallback('twitter'));

// // Setting the google oauth routes
// userRouter.route('/auth/google').get(passport.authenticate('google', {
// 	scope: [
// 		'https://www.googleapis.com/auth/userinfo.profile',
// 		'https://www.googleapis.com/auth/userinfo.email'
// 	]
// }));
// userRouter.route('/auth/google/callback').get(users.oauthCallback('google'));

// // Setting the linkedin oauth routes
// userRouter.route('/auth/linkedin').get(passport.authenticate('linkedin'));
// userRouter.route('/auth/linkedin/callback').get(users.oauthCallback('linkedin'));

// // Setting the github oauth routes
// userRouter.route('/auth/github').get(passport.authenticate('github'));
// userRouter.route('/auth/github/callback').get(users.oauthCallback('github'));

// Finish by binding the user middleware
userRouter.param('userId', users.userByID);

module.exports = userRouter;
