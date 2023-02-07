import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {getLocalToken} from "@/store/storage";
import {storeLoginUser} from "@/store";
import {ACTION_SIGNOUT} from "@/store/typeActions";

const statusCodesLow: number[] = [400, 401, 404, 500]

const api: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_URL_API + '/api',
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.headers.x_api_key = process.env.VUE_APP_API_KEY;
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);
export default api;
export const setBearerToken = (token: string) => {
    api.interceptors.request.use((value: InternalAxiosRequestConfig) => {
        value.headers.setAuthorization(token)
        return value
    })
};
