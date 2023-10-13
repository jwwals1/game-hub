import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '897c8a1990df48a6b12db1f4f3750d7c'
    }
})