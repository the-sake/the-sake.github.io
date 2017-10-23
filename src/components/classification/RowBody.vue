<template>
  <div>
    <div class="row no-gutters rowCard" v-for="(item, index) in list" :key="index">
      <div class="p-3 col-6 col-lg-2">
        {{ item.nameKO }}
      </div>
      <div class="p-3 col-6 col-lg-2 order-2 order-lg-1 text-lg-right">
        <ruby>{{ item.nameJA }} <rt>{{ item.furigana }}</rt></ruby>
      </div>
      <div class="p-3 col-6 col-lg-4 order-1 order-lg-2 ml-lg-auto">
        {{ item.description }}
      </div>
      <div class="p-3 col-6 col-lg-3 order-3 order-lg-3">
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'list',
  ],
}
</script>

<style>
.rowCard {
  border-top: 1px solid #e9ecef;
}
</style>
