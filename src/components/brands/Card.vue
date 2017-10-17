<template>
  <div class="border p-3 my-3">
  <div class="row">
    <div class="col-md-3">
      <img class="img-fluid" style="height: 250px;" :src="'/images/' + company.imageURL" alt="">
    </div>
    <div class="col-md-9">
      <dl class="row mb-0">
        <dt class="col-sm-2">브랜드명</dt>
        <dd class="col-sm-10">{{ company.brandKO }} {{ company.brandJA }}</dd>
        <dt class="col-sm-2">양조원</dt>
        <dd class="col-sm-10">{{ company.companyKO }} {{ company.companyJA }}</dd>
        <dt class="col-sm-2">산지</dt>
        <dd class="col-sm-10">{{ company.locationKO }} {{ company.locationJA }}</dd>
        <dt class="col-sm-2">특징</dt>
        <dd class="col-sm-10">{{ company.feature }}</dd>
        <dt class="col-sm-2">링크</dt>
        <dd class="col-sm-10">
          <span v-for="(value, key) in company.links" :key="key">
            <a class="btn btn-link" :href="value" target="_blank">{{linkName(key)}}</a>
          </span>
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
        return '일어'
      } else if (key === 'EN') {
        return '영어'
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
