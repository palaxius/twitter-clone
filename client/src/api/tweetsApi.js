import axios from "axios";

export const TweetsApi = {
  async fetchTweets() {
    // const response = await axios.get('https://trycode.pw/c/588SI.json').then(({data}) => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12').then(({data}) => {
    const response = await axios.get('http://localhost:3004/tweets').then(({data}) => {
      return data
    });

    return response
  }
}