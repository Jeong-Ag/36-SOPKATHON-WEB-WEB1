import axios from 'axios';

// axios 인스턴스
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000, //기본 10초로 설정하긴 했는데.. 추후 수정하거나 없애도 됨. 더 긴 건 각 요청에서 개별 설정하기
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    indexes: null,
  },
});

// API 요청 헬퍼 함수
const http = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data = {}, config = {}) => api.post(url, data, config),
  put: (url, data = {}, config = {}) => api.put(url, data, config),
  patch: (url, data = {}, config = {}) => api.patch(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),
};

export default http;
