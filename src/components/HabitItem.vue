<template>
  <div class="habit"
    v-bind:class="{ habit_small: !hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <div class="top">
      <h6 class="title">{{ habit.Title }}</h6>
      <h6 class="streak">
        <img class="glitter" src="../assets/glitter.svg" alt=""/>
        {{ habit.Year }}회 연속
      </h6>
    </div>
    <div class="row">
      <div v-if="hover" class="block info">{{ habit.Type }}</div>
      <div v-if="hover" class="block participants">{{  habit.Year }}</div>
    </div>
    <div v-if="hover" class="status">
      <div class="status-title">최근진행</div>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
        <li class="list-group-item"></li>
      </ul>
      <div class="status-title">완료율</div>
    </div>
    <button class="done">완료했어요</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  props: {
    habit: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

  .habit {
    position: relative;
    width: 40vw;
    height: 87px;
    margin: 20px;
    padding: 12px;
    border-radius: 12px;
    background-color: #fff;
    z-index: 3;
    box-shadow: 0 8px 12px 0 rgb(0, 0, 0, .1);
    transition: .1s;
    &:hover {
      box-shadow: 0 0px 2px 0 rgb(0, 0, 0, .3);
      height: 172px;
    }
    .streak {
      color: #4663F6;
    }

    .row{
      width: 100%;
      text-align: left;
    }
    .block{
      width: 60px;
      display: inline-block;
    }
    .info {
      color: #999;
    }
    .participants {
      color: #999;
    }
    .done {
      position: absolute;
      right: 12px;
      bottom: 12px;
      background-color: #fcfcfc;
      border-radius: 8px;
      padding: 8px 16px;
      border: .5px solid #f0f0f0;
      color: $primary;
      transition: ease-in-out .2s;
      &:hover {
        background-color: $primary;
        color: #fff;
      }
    }
    .status {
      margin-top: 16px;
      color: #999;
      .status-title {
        font-size: 14px;
      }
    }

    .list-group-item {
      border-radius: 20px;
      margin-left: 4px;
      font-size: 12px;
      padding: 5px 10px;
      color: #999
    }
  }
</style>