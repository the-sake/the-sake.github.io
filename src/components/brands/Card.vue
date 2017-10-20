<template>
  <div class="border p-3 my-3">
  <div class="row">
    <div class="col-lg-6 mb-3">
      <div class="d-flex flex-md-row justify-content-md-between flex-lg-column">
        <h1 class="display-4 mb-md-3">
          <ruby>{{ company.brandJA }} <rp>（</rp><rt>{{ company.brandFU }}</rt><rp>)</rp></ruby>
          <small class="text-secondary">{{ company.brandKO }}</small>
        </h1>
        <div  class="d-none d-md-block">
          <div class="mb-1" v-for="(el,index) in company.ruby" :key="index">{{ el.kanji }} {{ el.mean }}</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <dl class="row mb-0">
        <dt class="col-sm-2">양조원</dt>
        <dd class="col-sm-10">{{ company.companyKO }} <span class="text-secondary">{{ company.companyJA }}</span></dd>
        <dt class="col-sm-2">산지</dt>
        <dd class="col-sm-10">{{ company.locationKO }} <span class="text-secondary">{{ company.locationJA }}</span></dd>
        <dt class="col-sm-2">특징</dt>
        <dd class="col-sm-10">{{ company.feature }}</dd>
        <dt class="col-sm-2">링크</dt>
        <dd class="col-sm-10">
          <template v-for="(value, key) in company.links">
            <a class="btn btn-outline-primary btn-sm"
               :key="key"
               :href="value" target="_blank">{{linkName(key)}}</a>&#160;
          </template>
        </dd>
      </dl>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: [
    'company',
  ],
  methods: {
    linkName: function(key) {
      if (key === 'JA') {
        return '日本語'
      } else if (key === 'EN') {
        return 'English'
      } else if (key === 'KO') {
        return '한글'
      } else {
        return '링크'
      }
    }
  }
}
</script>

<style>

</style>
