<template>
  <div class="border border-secondary py-5 px-3">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4">
            <h6 class="text-primary">{{ sake.classificationKO }}</h6>
          </div>
          <div class="col-md-4">
            <h6 class="text-primary">{{ sake.classificationJA }}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h3 class="">{{ sake.brandKO }} <ruby>{{ sake.productKO }} <rt>&nbsp;</rt></ruby></h3>
          </div>
          <div class="col-md-4">
            <h3>{{ sake.brandJA }} <ruby>{{ sake.productJA }} <rt>{{ sake.productFU }}</rt></ruby></h3>
          </div>
        </div>
        <p>{{ sake.descriptionKO }}</p>
      </div>
      <div class="col-md-3 my-3 px-5">
        <img v-bind:src="`./images/${sake.imageURL}` " class="img-fluid" alt="Responsive image">
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top text-secondary py-3 mb-0">
          <span class="float-left">생산지</span>
          <span class="float-right">生産地</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top py-3 mb-0">
          <span class="float-left">{{ sake.locationKO }}</span>
          <span class="float-right">{{ sake.locationJA }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">원료미</span>
          <span class="float-right">原料米</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top py-3 mb-0">
          <span class="float-left">{{ sake.ingredientsKO }}</span>
          <span class="float-right">{{ sake.ingredientsJA }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">정미보합</span>
          <span class="float-right">精米歩合</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top py-3 mb-0">{{ sake.ricePolishingRate }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">알코올성분</span>
          <span class="float-right">アルコール度数</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top py-3 mb-0">{{ sake.alcoholByVolume }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">일본주도</span>
          <span class="float-right">日本酒度</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top py-3 mb-0">{{ sake.sakeMeterValue }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">산도</span>
          <span class="float-right">酸度</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top py-3 mb-0">{{ sake.acidityLevel }}</h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">제조회사</span>
          <span class="float-right">製造会社</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="clearfix border-top py-3 mb-0">
          <span class="float-left">{{ sake.companyKO }}</span>
          <span class="float-right">{{ sake.companyJA }}</span>
        </h6>
      </div>

      <div class="col-6 col-md-3">
        <h6 class="clearfix text-secondary border-top py-3 mb-0">
          <span class="float-left">가격</span>
          <span class="float-right">希望小売価格</span>
        </h6>
      </div>
      <div class="col-6 col-md-3">
        <h6 class="border-top py-3 mb-0">
          <p class="mb-1 clearfix" v-for="el in sake.volumePrice" :key="el.volume">
            <span class="float-left">{{ el.volume }}</span>
            <span class="float-right">{{ el.price }}</span>
          </p>
        </h6>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: [
    'sake'
  ],
}
</script>

<style>
.border-top {
  border-top: 1px solid;
}

.img-fluid {
  width: 100%;
}
</style>
