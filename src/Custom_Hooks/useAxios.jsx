import axios from "axios";

export const axiosNormal = axios.create(
    {
        baseURL: import.meta.env.VITE_SERVER
    }
)