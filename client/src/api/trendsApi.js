import axios from "axios";

export const TrendsApi = {
  async fetchTrends() {
    return await axios.get('http://localhost:3004/trends').then(({data}) => data)
  }
}