import axios from "axios";

export const WhoFollowApi = {
  async fetchWhoFollow() {
    return await axios.get('http://localhost:3004/whoToFollow').then(({data}) => data)
  }
}