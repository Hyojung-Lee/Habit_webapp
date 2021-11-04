import { createStore } from 'vuex'
import habit from './habit'
import axiosConfig from "../apis/axiosConfig"


export default createStore({
  modules: {
    habit
  },
  state: {
    userId:"",
    authToken:""
  },
  getters:{
    getUserId(state){
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  mutations:{
    setUserId(state,userId){
      state.userId = userId;
    },
    setAuthToken(state, payload){
      state.authToken = payload;
    }
  },
  actions:{
    saveAuth(context, payload){ // payload = {userId: xxx, authToken: xxxx}

      // 상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);

      // 브라우저 리프레쉬때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);

      // 로그인 성공후에 axios의 공통 헤더에 Authorization을 추가한다.
      axiosConfig.addAuthHeader(payload.authToken);
    },
    
    loadAuth(context){
      context.commit("setUserId", sessionStorage.getItem("userId") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || ""); // 앞에가 false가 되면, 뒤에 것이 값이 된다.

      // auth 토큰이 있을 경우 axios의 공통 헤더에 Authorization을 추가한다.
      if(context.state.authToken !== ""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context){
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");

      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      axiosConfig.removeAuthHeader();
    }
  },
})