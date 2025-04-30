import axios from 'axios';
import { useEffect } from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    withCredentials: true
});

const useAxiosSecure = () => {
    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            response => {
                console.log('Axios success:', response);
                return response;
            },
            error => {
                console.log('Axios error:', error);
                return Promise.reject(error);
            }
        );

        // 🧹 Cleanup interceptor on unmount to prevent duplicates
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;
