<template>
  <HabitList />
  <h1>Calendar</h1>
  <div class="btn btn-primary">
    Calendar
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import HabitList from '~/components/HabitList'

export default {
  components: {
    Headline,
    HabitList
  }
}
</script>