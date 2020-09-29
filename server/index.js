import 'dotenv/config'

import './core/db'

import express from 'express'
import {UserCtrl} from "./controllers/UserController";
import {registerValidations} from "./validations/register";

const app = express()

app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/user', registerValidations, UserCtrl.create)
app.get('/user/verify', registerValidations, UserCtrl.verify)

// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)


app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log(`Server is running on http://localhost:${process.env.PORT}...`)
})