<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-for="(sake, index) in sakes" :key="index">
        {{ sake.kName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'sakes',
  ],
}
</script>

<style>
</style>
