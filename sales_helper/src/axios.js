import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});