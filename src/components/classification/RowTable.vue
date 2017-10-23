<template>
  <section>
    <RowHead :type="junmaiType"></RowHead>
    <RowBody v-bind:list="junmai"></RowBody>
    <RowHead :type="honjozoType"></RowHead>
    <RowBody v-bind:list="honjozo"></RowBody>
    <RowHead :type="futsushuType"></RowHead>
    <RowBody v-bind:list="futsushu"></RowBody>
  </section>
</template>

<script>
import RowHead from './RowHead.vue'
import RowBody from './RowBody.vue'

export default {
  props: [
    'junmai',
    'honjozo',
    'futsushu',
  ],
  components: {
    RowHead,
    RowBody,
  },
  data() {
    return {
      junmaiType: {
        name: '준마이 타입',
        desc: '쌀, 쌀누룩',
      },
      honjozoType: {
        name: '혼죠조 타입',
        desc: '쌀, 쌀누룩 / 양조알코올',
      },
      futsushuType: {
        name: '보통주 타입',
        desc: '쌀, 쌀누룩 / 양조알코올 / 그 외 원재료',
      },
    }
  }
}
</script>

<style>

</style>
