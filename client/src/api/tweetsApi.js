import {axios} from '../core/axios'

export const TweetsApi = {
  async fetchTweets() {
    return await axios.get('http://localhost:3000/tweets').then(({data}) => data.data)
  },

  async fetchTweetData(id) {
    return await axios.get('http://localhost:3000/tweets/' + id).then(({data}) => data.data)
  },

  async addTweet(payload) {
    return await axios.post('http://localhost:3000/tweets', {text: payload}).then(({data}) => data.data)
  }
}