import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const login = async (loginData) => {
    const response = await axios.post(`${API_URL}/login`, loginData, { withCredentials: true });
    return response.data;
};

export const register = async (registerData) => {
    const response = await axios.post(`${API_URL}/register`, registerData, { withCredentials: true });
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    return response.data;
};
