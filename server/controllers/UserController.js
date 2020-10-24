import {UserModel} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";
import {sendEmail} from "../utils/sendEmail";
import jwt from 'jsonwebtoken'
import {isValidObjectId} from "../utils/isValidObjectId";


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

  async show(req, res) {
    try {
      const userId = req.params.id

      if (!isValidObjectId(userId)) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findById(userId).exec()

      if (!user) {
        res.status(404).send()
        return
      }

      res.json({
        status: 'success',
        data: user
      })

    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err
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
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
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
          }/auth/verify?hash=${data.confirmHash}">this link<a/>`
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

  async afterLogin(req, res) {
    try {
      const user = req.user ? req.user.toJSON() : undefined
      res.json({
        status: 'success',
        data: {
          ...user,
          token: jwt.sign({data: req.user}, process.env.SECRET_KEY || '123', {expiresIn: '30 days'})
        }
      })

    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    }
  }

  async getUserInfo(req, res) {
    try {
      const user = req.user && req.user.toJSON()
      res.json({
        status: 'success',
        data: user
      })
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    }
  }


}

export const UserCtrl = new UserController()
