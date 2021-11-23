<template>
<v-template>
  <div v-if="$store.state.userId !=='' ">
    <Header class="header"/>
  </div>
  <RouterView />
</v-template>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("loadAuth");
  },
}
</script>


<style lang="scss">
@import "~/scss/main";
.header {
  z-index: 5;
}
</style>