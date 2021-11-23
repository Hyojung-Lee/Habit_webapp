<template>
  <Headline />
  <HabitList />
</template>
<script>
import Headline from '~/components/Headline'
import HabitList from '~/components/HabitList'

export default {
  components: {
    Headline,
    HabitList
  },
  beforeCreate(){
    console.log("시작");
    if(this.$store.state.userId===''){
      this.$router.push("/login");
    }
  }
}
</script>