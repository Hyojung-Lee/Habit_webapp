<template>
  <div class="container">
    <img class="illust" src="../assets/headline2.png" alt="headline1img">
    <h2>습관을<br>확인하세요.</h2>
    <p>HABITS로 새로운 습관을 성공적으로 들여보세요!</p>
    
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .container {
    position: fixed;
    margin-top: 20vh;
    margin-left: 24px;
  }

  h2 {
    margin-top: 5vh;
    line-height: 1.1;
    font-size: 56px;
    font-weight: 700;
    color: $gray-900;
    text-align: left;
  }
  p {
    margin: 30px 0;
    color: $gray-600;
    text-align: left;
  }
  .glitter {
    width: 20px;
  }

  .illust {
    z-index: -1;
    position: absolute;
    left: -2vw;
  }
</style>