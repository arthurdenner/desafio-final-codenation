import axios from "axios";

const BASE_URL = "https://api.github.com";

class Api {
  static get(uri) {
    console.log(axios.get(`${BASE_URL}${uri}`).then(results => results));
    return axios.get(`${BASE_URL}${uri}`).then(results => results);
  }
}

export default Api;
