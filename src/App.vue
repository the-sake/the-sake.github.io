<template>
  <div>
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from './components/app/Navbar.vue'
import AppFooter from './components/app/Footer.vue'

export default {
  components: {
    AppNavbar,
    AppFooter,
  }
}
</script>

<style>
</style>
