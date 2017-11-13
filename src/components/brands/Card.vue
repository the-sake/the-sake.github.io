<template>
  <div class="border p-3 my-3">
    <div class="row">
      <div class="col-lg-5 order-lg-2 mb-3">
        <div class="d-flex flex-md-row justify-content-md-between flex-lg-column">
          <h1 class="display-4 mb-md-3 vertical">
            <ruby>{{ company.brandJA }} <rp>（</rp><rt>{{ company.brandFU }}</rt><rp>)</rp></ruby>
          </h1>
        </div>
      </div>
      <div class="col-lg-7">
        <dl class="row mb-0">
          <dt class="col-sm-3">브랜드명</dt>
          <dd class="col-sm-9">{{ company.brandKO }}</dd>
          <dt class="col-sm-3">제조회사</dt>
          <dd class="col-sm-9">{{ company.companyKO }} <span class="text-secondary">{{ company.companyJA }}</span></dd>
          <dt class="col-sm-3">생산지</dt>
          <dd class="col-sm-9">{{ company.locationKO }} <span class="text-secondary">{{ company.locationJA }}</span></dd>
          <dt class="col-sm-3">특징</dt>
          <dd class="col-sm-9">{{ company.feature }}</dd>
          <dt class="col-sm-3">링크</dt>
          <dd class="col-sm-9">
            <template v-for="(value, key) in company.links">
              <a class="btn btn-outline-primary btn-sm"
                 :key="key"
                 :href="value"
                 target="_blank"
                 rel="noopener">{{linkName(key)}}</a>&#160;
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
@media (min-width: 1024px) {
  .vertical {
    text-orientation: upright;
    writing-mode: vertical-rl;
  }
}

</style>
