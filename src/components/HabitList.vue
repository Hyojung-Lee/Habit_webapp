<template>
  <div class="container">
    <div class="inner">
      <HabitItem
      v-for="habit in habits"
      :key="habit.id"
      :habit="habit"/>
    </div>
  </div>
</template>

<script>
import HabitItem from '~/components/HabitItem'
import quest from '../apis/quest'
export default {
  components: {
    HabitItem
  },
  data() {
    return {
      habits: []
    }
  },
  // computed: {
  //   habits() {
  //     return this.$store.state.habits
  //   }
  // },
  methods: {
    async apply() {
      // this.$store.dispatch('habit/searchHabits')
      await this.$store.dispatch('habit/getQuests');
    },
  },
  // beforeMount() {
  //   this.apply();
  //   this.habits = this.$store.state.habits;
  //   console.log(this.$store.state.habits);
  //   console.log("before mount");
  //   console.log(this.habits);
  // },
  created(){
    quest.lookupQuest()
    .then(response => {
      console.log("실행1231");
      console.log(response.data.questResponses);
      this.habits = response.data.questResponses;
    });
    console.log("실행한다고");
    console.log(this.habits);    
  },
  watch:{
    habits: function(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.inner {   
    display: flex;
    position: absolute;
    // left: 50%;
    right: 0;
    flex-direction: column;
    align-items: center;
    top: 120px;
}
</style>