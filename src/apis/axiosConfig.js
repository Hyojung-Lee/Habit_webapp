import axios from "axios"

// 기본 경로 설정
axios.defaults.baseURL = " http://3.38.166.143:8080";

// axios.defaults.baseURL="https://b9d327dd-4207-4bf9-8dec-418b355dd8bb.mock.pstmn.io";
// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(accessToken){
  axios.defaults.headers.common['Authorization'] = `${accessToken}`;
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