import axios, {AxiosError, AxiosRequestConfig} from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        config.headers.Authorization = process.env.VUE_APP_API_KEY;

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);
export default api;
