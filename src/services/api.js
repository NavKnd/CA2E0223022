import axios from 'axios';

const API_BASE_URL = 'https://t4e-testserver.onrender.com/api';

export const getToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/public/token`, {
      studentId: 'E0223022',
      password: '327759'
    });
    return response.data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export const getData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/private/data`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // Assume returns array of activities
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};