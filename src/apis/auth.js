import axios from "axios"

// 서버에 로그인 요청을 보내는 함수
function login(user){ // user : {id : xxx, password :xxxx}
  return axios.post(
    "/api/auth/login",
    {
      email : user.id,
      password : user.password
    }
  )
}

function join(user){
  return axios.post(
    "/api/user/register",
    // json으로 보낼때는 객체로 보낸다.
    {
      email : user.id,
      password: user.name
    }
  )
}

export default {
  login,
  join
}