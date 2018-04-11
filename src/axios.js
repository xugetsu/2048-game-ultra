import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-2048-game-with-react.firebaseio.com/'
});

export default instance;