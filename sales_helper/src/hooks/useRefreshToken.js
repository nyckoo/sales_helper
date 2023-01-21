import axios from "../axios";
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.post('/login/auth', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.token);
            return { ...prev, token: response.data?.access_token }
        });
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;