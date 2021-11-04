<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
      <router-link
        to="login" 
        class="btn btn-success btn-sm"
        v-if="$store.state.userId===''">로그인</router-link>
      <router-link 
        to="logout" 
        class="btn btn-danger btn-sm" 
        @click="handleLogOut" 
        v-if="$store.state.userId!==''">로그아웃</router-link>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo"
export default {
  components: {
    Logo
  },
  methods:{
    handleLogOut(){
      this.$store.dispatch('deleteAuth');
    }
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Calendar',
          href: '/calendar'
        },
        {
          name: 'About',
          href: '/about'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
  header {
    position: fixed;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(16px);
    .logo {
      position: absolute;
      left: 40px;
      font-weight: 700;
      margin-right: 40px;

    }
    .nav {
      position: relative;
    }
  }
</style>