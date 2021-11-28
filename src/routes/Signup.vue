<template>
  <Logo />
  <div class="background"></div>
  <img class="illust" src="../assets/signup.png" alt="loginHeadimg">

  <div class="login-form">
      <div class="titles">
          <router-link
            to="login"
            class="back-btn">
            <img class="back-btn-icon" src="../assets/arrow_back.png" alt="back">
          </router-link>
        <h2>회원가입</h2>
        <p>HABITS로 새로운 습관을 성공적으로 들여보세요!</p>
      </div>
      <span class="info">이메일</span>
      <div class="form-group">
        <img v-if="emailValidated" src="../assets/check_valid.png" alt="validated" class="validate">
        <img v-else src="../assets/check_invalid.png" alt="validated" class="validate">
        <input type="text" placeholder="email@example.com" class="form-control" v-model="id"/>
      </div>
      <span class="info">비밀번호</span>
      <div class="form-group">
        <img v-if="passwordValidated" src="../assets/check_valid.png" alt="validated" class="validate">
        <img v-else src="../assets/check_invalid.png" alt="validated" class="validate">
        <input type="password" placeholder="비밀번호" class="form-control" v-model="password"/>
      </div>
      <div class="form-group">
        <img v-if="passwordCheckValidated" src="../assets/check_valid.png" alt="validated" class="validate">
        <img v-else src="../assets/check_invalid.png" alt="validated" class="validate">
        <input :disabled='!passwordValidated' type="password" placeholder="비밀번호 확인" class="form-control" v-model="passwordCheck"/>
      </div>
      <button :disabled="loginDisabled" class="btn btn-primary" v-on:click="handleSignup">가입하기</button>
  </div>
</template>

<script>
import auth from "../apis/auth";
import Logo from '~/components/Logo'

export default {
  name: "Signup",
  components: {
    Logo
  },
  data() {
    return {
      id: "",
      password: "",
      passwordCheck: "",
      emailValidated : false,
      passwordValidated : false,
      passwordCheckValidated : false,
      loginDisabled : true,
    }
  },
  watch: {
    id(value) {
      this.validateID(value);
      this.SignupAvail();
    },
    password(value) {
      this.validatePW(value);
      this.validatePWC(value);
      this.SignupAvail();
    },
    passwordCheck(value) {
      this.validatePWC(value);
      this.SignupAvail();
    },
  },
  methods: {
    async handleSignup(){
      console.log(this.id);
      await auth.join(this.id, this.password);
      this.$router.push("/");


      try{
        const response = await auth.join(this.id, this.password);
        console.log(this.id);
        // 사용자 정보 모두 가져오기
        
        this.$router.push("/");
      }catch(e){
        this.alertDialog = true;
        try{
          if(e.response.status === 401){
            this.alertDialogMessage = "회원가입 실패";
            console.log("회원가입 실패");
          }
        }catch(err){
          this.alertDialogMessage = "알 수 없는 오류가 발생했습니다.";
        }
      }
    },
    validateID(value){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
        this.emailValidated = true;
      }else{
        this.emailValidated = false;
      }
    },
    validatePW(value){
      if(value.toString().length >= 4) {
        this.passwordValidated = true;
      }else this.passwordValidated = false;
    },
    validatePWC(value){
      if(value == this.password && value.toString().length >= 4) {
        this.passwordCheckValidated = true;
      }else this.passwordCheckValidated = false;
    },
    SignupAvail(){
      if(this.emailValidated && this.passwordValidated && this.passwordCheckValidated) {
        this.loginDisabled = false;
      }else this.loginDisabled = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
  .background {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgb(252, 253, 252);
  }
  .back-btn-icon {
    height: 32px;
    margin-bottom: 40px;
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
    top: 36%;
    margin-top: -150px;
    height: 300px;
    left: 20%;
    .info {
      font-size: 12px;
      color: $gray-500;
      margin-bottom: 4px;
    }
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
  .illust {
    z-index: -1;
    position: absolute;
    height: 800px;
    right: 8%;
    top: 45%;
    margin-top: -370px;
  }

</style>