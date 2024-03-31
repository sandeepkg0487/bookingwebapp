import axios from "axios";
import cookieUtils from "./cookieUtils";
import { useCookies } from "react-cookie";

const api = axios.create({
    baseURL: "http://localhost:3001"
});

// api.interceptors.request.use(
//     function(config) {
//         // Accessing cookies using react-cookie hook
//         const [cookies] = useCookies(['token']);
        
//         // Set the authorization header if the token is available
//         if (cookies.token) {
//             config.headers.Authorization = `Bearer ${cookies.token}`;
//         }
        
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );
export default api;




