import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default instance;
// 29efdbe076dd15188593689d1e357165