<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-2" v-for="(sake, index) in sakes" :key="index">
        <Card :sake="sake"></Card>
      </div>
    </div>

    <div>
      <ul>
        가격 <a href="#price_1" title="가격은 소비 세금 별도"><sup>[1]</sup></a>
        <li></li>
        <li><span id="price_1">[1]</span>가격은 소비 세금 별도</li>
        <li>가격</li>
        <li>가격</li>
      </ul>
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
