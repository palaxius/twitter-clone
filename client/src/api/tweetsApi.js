import axios from "axios";

export const TweetsApi = {
  async fetchTweets() {
    return await axios.get('http://localhost:3004/tweets?_sort=id&_order=desc').then(({data}) => data)
  },

  async fetchTweetData(id) {
    return await axios.get('http://localhost:3004/tweets?_id=' + id).then(({data}) => data)
  },

  async addTweet(payload) {
    return await axios.post('http://localhost:3004/tweets', payload).then(({data}) => data)
  }
}