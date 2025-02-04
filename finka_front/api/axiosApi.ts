import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://127.0.0.0/api',
});