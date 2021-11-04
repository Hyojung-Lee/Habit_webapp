import axios from "axios"

// 서버에 로그인 요청을 보내는 함수
function login(user){ // user : {id : xxx, password :xxxx}
  return axios.post("login",`mid=${user.id}&password=${user.password}`);
}

export default {
  login
}