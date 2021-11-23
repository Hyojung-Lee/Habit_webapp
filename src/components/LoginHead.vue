<template>
  <div class="container">
    <img class="illust" src="../assets/loginHead1.png" alt="loginHeadimg">
    <div class="titles">
      <h2>로그인해서<br>습관을 확인하세요.</h2>
      <p>HABITS로 새로운 습관을 성공적으로 들여보세요!</p>
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .container {
    text-align: center;
  }

  h2 {
    line-height: 1.1;
    font-size: 32px;
    font-weight: 700;
    color: $gray-900;
  }
  p {
    margin: 30px 0;
    color: $gray-600;
  }
  .titles {
    position: absolute;
    top: 30vh;
    left: 20%;
    text-align: left;
  }

  .illust {
    z-index: -1;
    position: absolute;
    height: 700px;
    right: 8%;
    top: 10vh;
  }
</style>