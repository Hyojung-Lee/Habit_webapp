// import axios from 'axios'
import quest from '../apis/quest'
export default {
  // module
  namespaced: 'true',
  // data
  state: () => ({
    habits: []
  }),
  // computed
  getters: {},
  // methods
  // mutations를 통해서만 data 수정 가능
  mutations: {
    updateState(state, dataArray) {
      state.habits = dataArray;
      console.log("여기입니다");
      console.log(state.habits);
    },
    resetHabits(state) {
      state.habits = []
    }
  },
  // 비동기
  actions: {
   async getQuests(context){
      console.log("get quest 실행");
      let result = await quest.lookupQuest();
      console.log(result);
      console.log(result.data.questResponses);
      context.commit('updateState', result.data.questResponses);
    }
  }
}