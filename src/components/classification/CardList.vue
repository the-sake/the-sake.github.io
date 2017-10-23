<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 my-2" v-for="(category, index) in categories" :key="index">
      <Card :category="category"></Card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  props: [
    'categories',
  ],
  components: {
    Card,
  },
}
</script>

<style>

</style>
