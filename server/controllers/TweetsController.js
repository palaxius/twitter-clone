import {TweetModel} from "../models/TweetModel";
import {isValidObjectId} from "../utils/isValidObjectId";
import {validationResult} from "express-validator";

class TweetsController {
  async index(_, res) {
    try {
      const tweets = await TweetModel.find({}).exec()

      res.json({
        status: 'success',
        data: tweets
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      })
    }
  }

  async show(req, res) {
    try {
      const tweetId = req.params.id

      if (!isValidObjectId(tweetId)) {
        res.status(400).send()
        return
      }

      const tweet = await TweetModel.findById(tweetId).exec()

      if (!tweet) {
        res.status(404).send()
        return
      }

      res.json({
        status: 'success',
        data: tweet
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async create(req, res) {
    try {
      const user = req.user

      if (user && user._id) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          res.status(400).json({ status: 'validation error', errors: errors.array() })
          return
        }

        const data = {
          text: req.body.text,
          user: user._id
        }

        const tweet = await TweetModel.create(data)

        res.json({
          status: 'success',
          data: tweet
        })
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async delete(req, res) {
    const user = req.user

    try {
      if (user) {
        const tweetId = req.params.id

        if (!isValidObjectId(tweetId)) {
          res.status(400).send()
          return
      }

        const tweet = await TweetModel.findById(tweetId)

        if (tweet) {
          if (tweet.user._id.toString() === user._id.toString()) {
            tweet.remove()
            res.send()
          } else {
            res.status(403).send()
          }
        } else {
          res.status(404).send()
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }


}

export const TweetsCtrl = new TweetsController()
