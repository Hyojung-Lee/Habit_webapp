<!-- 컴포넌트 ui 정의 -->
<!-- root element가 하나만 있어야함 -->
<template>
  <Logo />
  <LoginHead />
  <div class="login-form">
      <div class="form-group">
        <input type="text" placeholder="아이디를 입력하세요" class="form-control" v-model="user.id"/>
      </div>
      <div class="form-group">
        <input type="password" placeholder="비밀번호를 입력하세요" class="form-control" v-model="user.password"/>
      </div>
      <button  class="btn btn-primary" v-on:click="handleLogin">로그인</button>
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
    }
  }
}
</script>
<!-- 컴포넌트 -->
<style lang="scss" scoped>
@import "~/scss/main";
  .logo {
    position: absolute;
    bottom: 4vh;
    width: 80px;
    left: 50%;
    margin-left: -40px;
    font-weight: 700;
    text-align: center;
    color: $primary;
  }
  .login-form {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 300px;
    top: 46vh;
    left: 20%;
    .form-group {
      margin-bottom: 6px;
      background-color: none;
    }
  }

</style>