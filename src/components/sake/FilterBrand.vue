<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-legend col-sm-2">브랜드</legend>
      <div class="col-sm-10">
        <div class="row">
          <div class="col-6" v-for="(brand, index) in brands" v-bind:key="index">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"
                    v-bind:checked="brand.enable"
                    @change="toggle(brand.name, !brand.enable)">
                {{ brand.name }} {{ brand.nameJP }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: [
    'brands',
  ],
  methods: {
    toggle(name, enable) {
      this.$emit('swichBrand', {name, enable})
    }
  },
}
</script>

<style>

</style>
