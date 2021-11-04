<template>
  <div class="habit"
    v-bind:class="{ habit_small: !hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <div class="top">
      <h4 class="title">{{ habit.Title }}</h4>
      <h6 class="streak">
        <!-- <img class="glitter" src="../assets/glitter.svg" alt=""> -->
        {{ habit.Year }}회 연속
      </h6>
    </div>
    <div v-if="hover" class="info">{{ habit.Type }}</div>
    <div v-if="hover" class="participants">{{  habit.Year }}</div>
    <button v-if="hover" class="done">완료했어요</button>
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
      height: 132px;
    }
    .streak {
      color: #4663F6;
      
    }
    .info {
      color: #4663F6;
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
  }
</style>