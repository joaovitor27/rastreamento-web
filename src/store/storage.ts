import {setBearerToken} from "@/http";
export const setHeaderToken = (token: string) => setBearerToken(token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = (token: string) => localStorage.setItem('token', token)
