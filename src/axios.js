import axios from 'axios';

const instance = axios.create({
    baseURL: "https://voxelate-server.herokuapp.com",
});

export default instance;