<template>
  <div class="card">
    <h5 class="card-header" :class="borderColor">{{ category.nameKO }}</h5>
    <div class="card-body text-center">
      <h2 class="card-title mb-0">
        <ruby>{{ category.nameJA }} <rt>{{ category.furigana }}</rt></ruby>
      </h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <small class="text-secondary">/
        <template v-for="(el, index) in category.ruby">
          <span :key="index">{{ el.mean }} / </span>
        </template>
        </small>
      </li>
      <li class="list-group-item">{{ category.description }}</li>
      <li class="list-group-item">{{ category.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'category',
  ],
  computed: {
    borderColor: function() {
      if (this.category.type === 'junmai') {
        return 'border-primary'
      } else if (this.category.type === 'honjozo') {
        return 'border-danger'
      } else if (this.category.type === 'futsushu') {
        return 'border-success'
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>
