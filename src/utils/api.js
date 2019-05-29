import axios from 'axios';

const BASE_URL = 'https://api.github.com';

class Api {
  static get(uri) {
    return axios.get(`${BASE_URL}${uri}`);
  }
}

export default Api;
