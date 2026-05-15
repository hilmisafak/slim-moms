import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;

export const getErrorMessage = (error) => {
  if (!navigator.onLine || error.code === 'ERR_NETWORK') {
    return 'İnternet bağlantısı bulunamadı. Lütfen bağlantınızı kontrol edin.';
  }

  return (
    error.response?.data?.message ||
    error.message ||
    'Beklenmeyen bir hata oluştu.'
  );
};
