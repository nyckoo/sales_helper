import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://6a20-89-64-62-54.eu.ngrok.io/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true
});