import axios from "axios";

export const TweetsApi = {
  async fetchTweets() {
    return await axios.get('http://localhost:3004/tweets').then(({data}) => data)
  },

  async fetchTweetData(id) {
    return await axios.get('http://localhost:3004/tweets?_id=' + id).then(({data}) => data)
  }
}