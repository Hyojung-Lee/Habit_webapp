<!-- 컴포넌트 ui 정의 -->
<!-- root element가 하나만 있어야함 -->
<template>
  <div class="background"></div>
  <Logo />
  <LoginHead />
  <div class="login-form">
      <div class="titles">
        <h2>로그인해서<br>습관을 확인하세요.</h2>
        <p>HABITS로 새로운 습관을 성공적으로 들여보세요!</p>
      </div>

      <div class="form-group">
        <img v-if="emailValidated" src="../assets/check_valid.png" alt="validated" class="validate">
        <img v-else src="../assets/check_invalid.png" alt="validated" class="validate">
        <input type="text" placeholder="email@example.com" class="form-control" v-model="user.id" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="비밀번호 입력" class="form-control" @keyup.enter="handleLogin" v-model="user.password"/>
      </div>
      <button :disabled='loginDisabled' class="btn btn-primary" v-on:click="handleLogin">로그인</button>
      <router-link 
        to="signup"
        class="btn btn-sub" >회원가입</router-link>
      <alert-dialog :message="alertDialogMessage" :loading="loading" v-if="alertDialog" @close="alertDialog = false" />
  </div>
</template>

<script>
import auth from "../apis/auth";
import AlertDialog from "../components/dialog/AlertDialog.vue";
import Logo from '~/components/Logo';
import LoginHead from '~/components/LoginHead';

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name : "Login",
  // 추가하고 싶은 컴포넌트를 등록
  components:{
    Logo,
    LoginHead,
    AlertDialog,
  },
  //컴포넌트에서 사용하는 데이터를 정의
  // return 값이 되려면 괄호로 감싸야함
  data(){
    return {
      user :  {
        id: "",
        password: ""
      },
      alertDialog :false,
      alertDialogMessage : "",
      emailValidated : false,
      loginDisabled : true,
    }
  },
  watch: {
    //input form 양식 변화 감시
    user: {
      deep: true,
      handler(value){
        console.log(value);
        this.validateLogin(value);
      }
    }
  },
  //컴포넌트에서 사용하는 메소드 정의
  methods:{
    async handleLogin(){
      try{
        const response = await auth.login(this.user);
        console.log(this.user);
        this.$store.dispatch("saveAuth",{userId : this.user.id, authToken: response.data.jwt});
        this.$router.push("/");
      }catch(e){
        this.alertDialog = true;
        try{
          if(e.response.status === 401){
            this.alertDialogMessage = "로그인 실패";
            console.log("로그인 실패");
          }
        }catch(err){
          this.alertDialogMessage = "알 수 없는 오류가 발생했습니다.";
        }
      }
    },
    handleLogout(){
      this.$store.dispatch("removeAuth");
    },
    //로그인 input form 양식 확인
    validateLogin(value){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.id)){
        this.emailValidated = true;
      }else{
        this.emailValidated = false;
      }
      if (this.emailValidated == true && value.password.toString().length >= 4) {
        console.log("로그인 버튼 누를 수 있음");
        this.loginDisabled = false;
      }else{
        this.loginDisabled = true;
      }
    }
  }
}
</script>
<!-- 컴포넌트 -->
<style lang="scss" scoped>
@import "~/scss/main";
  .background {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(252,253,252,1);
  }
  .logo {
    position: absolute;
    bottom: 4vh;
    width: 80px;
    left: 50%;
    margin-left: -40px;
    font-weight: 700;
    text-align: center;
    color: $gray-400;
  }
  h2 {
    line-height: 1.1;
    font-size: 32px;
    font-weight: 700;
    color: $gray-900;
  }
  p {
    margin: 30px 0;
    font-size: 15px;
    color: $gray-600;
  }
  .login-form {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 300px;
    top: 46%;
    margin-top: -150px;
    height: 300px;
    left: 20%;
    .form-group {
      margin-bottom: 6px;
      background-color: none;
      position: relative;
      .validate {
        transition: .2s;
        position: absolute;
        height: 16px;
        top: 50%;
        margin-top: -8px;
        right: 12px;
      }
    }
    .btn-sub {
      margin-top: 6px;
      border: .5px solid $gray-300;
      color: $gray-700;
      &:hover {
        border: .5px solid $gray-700;
        color: $gray-700;
      }
    }
  }

</style>