<template>
  <div class="container">
    <div class="inner">
      <HabitItem
      v-for="habit in habits"
      :key="habit.imdbID"
      :habit="habit"/>
    </div>
  </div>
</template>

<script>
import HabitItem from '~/components/HabitItem'

export default {
  components: {
    HabitItem
  },

  computed: {
    habits() {
      return this.$store.state.habit.habits
    }
  },
  methods: {
    async apply() {
      this.$store.dispatch('habit/searchHabits')
    }
  },
  beforeMount() {
    this.apply()
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