<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-5" v-for="(sake, index) in sakes" :key="index">
        <Card :sake="sake"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  props: [
    'sakes',
  ],
  components: {
    Card,
  },
}
</script>

<style>
</style>
