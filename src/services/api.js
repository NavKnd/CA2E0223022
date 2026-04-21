import axios from 'axios';

const API_BASE_URL = 'https://t4e-testserver.onrender.com/api';

export const getToken = async () => {
  try {
    console.log('Fetching token from:', `${API_BASE_URL}/public/token`);
    const response = await axios.post(`${API_BASE_URL}/public/token`, {
      studentId: 'E0223022',
      password: '327759'
    });
    console.log('Token response:', response.data);
    return response.data.token;
  } catch (error) {
    console.error('Token error:', error.response?.status, error.response?.data || error.message);
    throw error;
  }
};

export const getData = async (token) => {
  try {
    console.log('Fetching data from:', `${API_BASE_URL}/private/data`);
    const response = await axios.get(`${API_BASE_URL}/private/data`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Data response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Data error:', error.response?.status, error.response?.data || error.message);
    throw error;
  }
};