import axios from "axios";

const BASE_URL = "http://localhost:8080/";

const defaultApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
});

const authApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

authApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const defaultInstance = defaultApi;
export const authInstance = authApi;
