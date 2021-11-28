<template>
  <div class="habit"
    v-bind:class="{ habit_small: !hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <div class="top">
      <h6 class="block title">{{ habit.title}}</h6>
      <h6 class="block streak">
        <img class="glitter" src="../assets/glitter.svg" alt=""/>
        {{ habit.accomplishCount/habit.totalAlarmCount * 100}} % ({{ habit.accomplishCount }}/{{ habit.totalAlarmCount }})
      </h6>
    </div>
    <div class="row">
      <div class="block info">{{ habit.term }} · {{ habit.cycle }} · {{ habit.accomplishable}}</div>
      <!-- <div class="block participants">{{ habit.cycle }}</div> -->
    </div>
    <div v-if="hover" class="hover-group">
      <button class="hover-btn edit">습관 편집</button>
      <button @click="deleteQuest" class="hover-btn delete">삭제</button>
    </div>
  </div>
</template>

<script>
import quest from '../apis/quest';
export default {
  data() {
    return {
      hover: false
    }
  },
  methods: {
    deleteQuest() {
      quest.deleteQuest(this.habit.id);
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
    height: 80px;
    margin: 20px;
    padding: 12px;
    border-radius: 12px;
    background-color: #fff;
    z-index: 3;
    box-shadow: 0 6px 10px 0 rgb(0, 0, 0, .06);
    transition: .1s;
    &:hover {
      box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.3);
      height: 128px;
    }
    .block{
      display: inline-block;
    }
    .top {
      position: relative;
      .streak {
        margin-left: 16px;
        color: #4663F6;
      }
    }

    .row { 
      width: 100%;
      text-align: left;
      .block {
        width: 200px;
      }
      .info {
        color: #999;
      }
      .participants {
        color: #999;
      }
    }

    .hover-group {
      position: absolute;
      right: 12px;
      bottom: 12px;
      .hover-btn {
        background-color: #fcfcfc;
        border-radius: 8px;
        padding: 8px 16px;
        margin-left: 8px;
        border: .5px solid #f0f0f0;
        transition: ease-in-out .2s;
      }
      .delete {
        color: $red;
        &:hover {
          background-color: #fff2f2;
          color: $red;
        }
      }
        .edit {
          color: $primary;
          &:hover {
            background-color: $primary;
            color: #fff;
          }
        }
    }


    .status {
      position: absolute;
      right: 12px;
      top: 12px;
      color: #999;
      font-size: 16px;
    }
  }
</style>