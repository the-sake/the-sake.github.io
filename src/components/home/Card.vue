<template>
  <div class="border border-secondary py-5 px-3">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4">
            <h5 class="text-primary">{{ sake.classificationJA }}</h5>
          </div>
          <div class="col-md-4">
            <h6 class="text-primary">{{ sake.classificationKO }}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h2>{{ sake.brandJP }} <ruby>{{ sake.productJA }}<rt>{{ sake.productFU }}</rt></ruby></h2>
          </div>
          <div class="col-md-4">
            <h3 class="">{{ sake.brandKO }} <ruby>{{ sake.productKO }}</ruby></h3>
          </div>
        </div>
        <p>{{ sake.descriptionKO }}</p>
      </div>
      <div class="col-md-3">
        <img :src="image" class="img-fluid" alt="Responsive image">
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top text-secondary pt-3">
          <span class="float-left">생산지</span>
          <span class="float-right">生産地</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top pt-3">
          <span class="float-left">{{ sake.locationKO }}</span>
          <span class="float-right">{{ sake.locationJP }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top pt-3">
          <span class="float-left">원료미</span>
          <span class="float-right">原料米</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top pt-3">
          <span class="float-left">{{ sake.ingredientsKO }}</span>
          <span class="float-right">{{ sake.ingredientsJP }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3 py-3">
        <h6 class="clearfix text-secondary border-top pt-3">
          <span class="float-left">정미보합</span>
          <span class="float-right">精米歩合</span>
        </h6>
      </div>
      <div class="col-6 col-md-3 py-3">
        <h6 class="border-top pt-2">{{ sake.ricePolishingRate }}</h6>
      </div>

      <div class="col-6 col-md-3 py-3">
        <h6 class="clearfix text-secondary border-top pt-2">
          <span class="float-left">알코올성분</span>
          <span class="float-right">アルコール度数</span>
        </h6>
      </div>
      <div class="col-6 col-md-3 py-3">
        <h6 class="border-top pt-2">{{ sake.alcoholByVolume }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top pt-2">
          <span class="float-left">일본주도</span>
          <span class="float-right">日本酒度</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top pt-2">{{ sake.sakeMeterValue }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top pt-2">
          <span class="float-left">산도</span>
          <span class="float-right">酸度</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top pt-2">{{ sake.acidityLevel }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top pt-2">
          <span class="float-left">제조회사</span>
          <span class="float-right">製造会社</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top pt-2">
          <span class="float-left">{{ sake.companyKO }}</span>
          <span class="float-right">{{ sake.companyJP }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top pt-2">
          <span class="float-left">가격</span>
          <span class="float-right">希望小売価格</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top pt-2">
          <p class="mb-1" v-for="(price, index) in sake.volumePrice" :key="index">{{ price }}</p>
        </h6>
      </div>

    </div>
  </div>
</template>

<script>
import image from './pic_thumb_01.jpg'

export default {
  props: [
    'sake'
  ],

  data() {
    return {
      image
    }
  },

  computed: {

  }
}
</script>

<style>
.border-top {
  border-top: 1px solid;
}
</style>
