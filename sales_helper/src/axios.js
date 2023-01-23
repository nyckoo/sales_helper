import axios from "axios";
const BASE_URL = "https://fa51-89-64-62-54.eu.ngrok.io"

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true
});