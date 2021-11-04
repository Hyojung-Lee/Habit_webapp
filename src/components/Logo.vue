<template>
  <RouterLink
    to="/"
    class="logo">
    HABITS
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .logo {
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
  }
</style>