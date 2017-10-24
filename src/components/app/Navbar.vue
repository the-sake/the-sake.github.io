<template>
  <div class="container">
    <nav class="navbar navbar-expand navbar-light flex-column flex-md-row px-0">
      <router-link class="navbar-brand" to="/">The Sake</router-link>
      <div>
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" active-class="active" to="/" tag="li" exact>
          <a class="nav-link">홈</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/sake" tag="li">
          <a class="nav-link">사케</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/classification" tag="li">
          <a class="nav-link">분류</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/brands" tag="li">
          <a class="nav-link">브랜드</a>
        </router-link>
      </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
