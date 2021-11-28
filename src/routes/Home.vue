<template>
  <Headline />
  <HabitList/>
</template>
<script>
import Headline from '~/components/Headline'
import HabitList from '~/components/HabitList'
// import questApi from '../apis/quest'
export default {
  components: {
    Headline,
    HabitList
  },
  data () {
    return {
      quests: []
    }
  },
  beforeCreate(){
    console.log("시작");
    if(this.$store.state.userId===''){
      this.$router.push("/login");
    }
  },
  // created(){
  //   this.quest = questApi.lookupQuest();
  //   console.log(this.quest);
  // },
}
</script>