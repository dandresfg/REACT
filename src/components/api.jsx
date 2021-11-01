import axios from 'axios';

const result = axios(
    'http://34.227.3.72:4000/api/public/result_award/get_last_result?date=2021-10-24'
);

export default result;