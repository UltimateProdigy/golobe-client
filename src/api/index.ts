import axios from "axios";

const api = axios.create({
    baseURL: "https://golobe-api.pipeops.net",
    headers: {
        "Content-Type": "application/json",
    },
});

interface API {
    getAccessToken: () => null;
    setAccessToken: (token: string) => void;
}
export const setupInterceptors = ({ getAccessToken, setAccessToken }: API) => {
    api.interceptors.request.use(
        (config) => {
            const accessToken = getAccessToken();
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => {
            const accessToken = response.data?.accessToken;
            if (accessToken) {
                setAccessToken(accessToken);
            }
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export default api;
