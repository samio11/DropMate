import axios from "axios";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../AllContext/ContextContainer";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOutUser } = useContext(ContextProvider);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => res,
            async error => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    logOutUser();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOutUser, navigate]);

    // Return the axiosSecure instance
    return axiosSecure;
};

export default useAxiosSecure;
