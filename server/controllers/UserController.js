import {UserModel} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";

class UserController {
  async index(_, res) {
    try {
      const users = await UserModel.find({}).exec()

      res.json({
        status: 'success',
        data: users
      })

    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    }
  }

  async create(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ status: 'validation error', errors: errors.array() })
      }
      const data = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        confirmHash: generateMD5(Math.random().toString())
      }

      const user = await UserModel.create(data)

      sendEmail(
        {
        emailFrom: "admin@twitter.com",
        emailTo: data.email,
        subject: "Confirmation mail Twitter Clone",
        html: `In order to confirm your mail, follow <a href="http://localhost:${
          process.env.PORT || 8888
        }/user/verify?hash=${data.confirmHash}">this link<a/>`
      },
        (err) => {
          if (err) {
            res.json({
              status: 'error1',
              message: err
            })
          } else {
            res.json({
              status: 'success',
              data: user
            })
          }
      })

    } catch (err) {
      res.json({
        status: 'error2',
        message: err
      })
    }
  }

  async verify(req, res) {
    try {
      const hash = req.query.hash

      if (!hash) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findOne({ confirmHash: hash }).exec()


      if (user) {
        user.confirmed = true
        user.save()

        res.status(201).json({
          status: 'success'
        })
      } else {
        res.status(404).json({
          status: '404',
          message: 'User not found'
        })
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    }
  }
}

export const UserCtrl = new UserController()

