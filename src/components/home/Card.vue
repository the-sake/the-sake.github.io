<template>
  <div class="row">
    <div class="col-md-10">
      <div class="row">
        <div class="col-md-3">
          <h5 class="text-primary">{{ sake.classificationJA }}</h5>
        </div>
        <div class="col-md-3">
          <h5 class="text-primary">{{ sake.classificationKO }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h2>{{ sake.brandJP }} <ruby>{{ sake.productJA }}<rt>{{ sake.productFU }}</rt></ruby></h2>
        </div>
        <div class="col-md-3">
          <h2 class="">{{ sake.brandKO }} <ruby>{{ sake.productKO }}</ruby></h2>
        </div>
      </div>
    </div>
    <div class="col-md-2">

    </div>
  </div>
</template>

<script>
export default {
  props: [
    'sake'
  ],

  computed: {

  }
}
</script>

<style>

</style>
