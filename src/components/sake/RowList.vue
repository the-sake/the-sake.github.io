<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 my-2" v-for="(sake, index) in sakes" :key="index">
        <Card :sake="sake"></Card>
      </div>
    </div>
    <div>
      <ul>
        <li><span id="meta_1">[1]</span> 상세, 상품정보의 성분치는 관리 목표 치입니다.</li>
        <li><span id="meta_2">[2]</span> 特定名称種別 특정 명칭 종별</li>
        <li><span id="meta_3">[3]</span> SakeMeterValue (SMV)</li>
        <li><span id="meta_4">[4]</span> 가격은 소비 세금 별도</li>
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
