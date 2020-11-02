import 'dotenv/config'

import './core/db'

import express from 'express'
import {UserCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";
import {passport} from './core/passport'
import {TweetsCtrl} from "./controllers/TweetsController";
import {createTweetValidations} from "./validations/createTweet";

const app = express()

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(express.json())
app.use(allowCrossDomain)
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get('/users/me', passport.authenticate('jwt', {session: false}) , UserCtrl.getUserInfo)
app.get('/users/:id', UserCtrl.show)

app.get('/tweets', TweetsCtrl.index)
app.get('/tweets/:id', TweetsCtrl.show)
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetsCtrl.create)
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetsCtrl.update)
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetsCtrl.delete)

app.get('/auth/verify', registerValidations, UserCtrl.verify)
app.post('/auth/register', registerValidations, UserCtrl.create)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin)

// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)


app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log(`Server is running on http://localhost:${process.env.PORT}...`)
})