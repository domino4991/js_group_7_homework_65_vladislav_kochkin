import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://hw-65-61517.firebaseio.com/'
});

export default axiosBase;