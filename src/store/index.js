import { createStore } from 'vuex'
import habit from './habit'
import axiosConfig from "../apis/axiosConfig"


export default createStore({
  modules: {
    habit
  },
  state: {
    userId:"",
    userEmail:"",
    accessToken:"",
    refreshToken:"",
  },
  getters:{
    getUserId(state){
      return state.userId;
    },
    
    getAccessToken(state){
      return state.accessToken;
    },
    getRefreshToken(state){
      return state.refreshToken;
    }
  },
  mutations:{
    setUserId(state,userId){
      state.userId = userId;
    },
    setAccessToken(state, accessToken){
      state.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken){
      state.refreshToken = refreshToken;
    }
  },
  actions:{
    saveAuth(context, payload){ 
    //   {
    //     "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjM4MDIzNTEwLCJleHAiOjE2MzgxMDk5MTB9.5cT9QCrB6mLL0D4gKFKG1h6UEaqCC3RMQlf97YmrGIM",
    //     "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzgwMjM1MTAsImV4cCI6MTY0MDYxNTUxMH0.tMvDnxzrVwf9e2yQqjrR6gfr1tT5cmc53Ze02iOrNYg",
    //     "userId": 1,
    //     "userEmail": "test@test.com"
    // }
      // 상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      context.commit("setRefreshToken", payload.refreshToken);
      context.commit("setUserEmail", payload.userEmail);
      // 브라우저 리프레쉬때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("accessToken", payload.accessToken);
      sessionStorage.setItem("refreshToken", payload.refreshToken);
      sessionStorage.setItem("userEmail", payload.userEmail);
      // 로그인 성공후에 axios의 공통 헤더에 Authorization을 추가한다.
      axiosConfig.addAuthHeader(payload.accessToken);
    },
    
    loadAuth(context){
      context.commit("setUserId", sessionStorage.getItem("userId") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.
      context.commit("setAccessToken", sessionStorage.getItem("accessToken") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.
      context.commit("setRefreshToken", sessionStorage.getItem("refreshToken") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.
      context.commit("setUserEmail", sessionStorage.getItem("userEmail") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.

      // access 토큰이 있을 경우 axios의 공통 헤더에 Authorization을 추가한다.
      if(context.state.accessToken !== ""){
        axiosConfig.addAuthHeader(context.state.accessToken);
      }
    },

    deleteAuth(context){
      context.commit("setUserId", "");
      context.commit("setAccessToken","");
      context.commit("setRefreshToken","");
      context.commit("setUserEmail","");

      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("userEmail");

      axiosConfig.removeAuthHeader();
    }
  },
})