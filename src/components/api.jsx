import axios from 'axios';

const client = axios.create({
  baseURL: 'http://34.227.3.72:4000/api',
  // timeout: 60000, // (1min = 60.000)
  // headers: {'x-auth-token': 'token'}
});

// const result = axios(
//     '/public/result_award/get_last_result?date=2021-10-24'
// );

export default client;