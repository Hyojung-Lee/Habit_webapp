import axios from "axios"

// 기본 경로 설정
// axios.defaults.baseURL = "http://localhost";
axios.defaults.baseURL = 'https://8a237c10-6531-4bb5-a9b9-b717f7967a4f.mock.pstmn.io';
// axios.defaults.baseURL = 'https://edd03df4-7356-4ce5-b06b-febccc802a52.mock.pstmn.io';
// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// 요청 http에 Authorization 헤더 제거
function removeAuthHeader(){
  delete axios.defaults.headers.common['Authorization'];
}

// 객체 내보내기
export default {
  addAuthHeader,
  removeAuthHeader
}