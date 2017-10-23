<template>
  <div class="row no-gutters bg-light border">
    <div class="p-3 col-6 col-lg-5">{{ type.name }}</div>
    <div class="p-3 col-6 col-lg-7 order-2 order-lg-1">{{ type.desc }}</div>
    <div class="p-3 col-6 col-lg-4 order-1 order-lg-2 table-info ml-lg-auto">정미보합</div>
    <div class="p-3 col-6 col-lg-3 order-3 order-lg-3 table-info">가격</div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
  ],
}
</script>

<style>

</style>
