import axios from 'axios';
const apiKey = "55f2bf5ff60f4817a416e6380fb144da";

export default axios.create({
    method: "get",
    baseURL: "https://newsapi.org/v2",
    params:{
        pageSize: 6
    },
    headers:{
        Authorization: apiKey
    }
});