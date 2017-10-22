<template>
  <div class="card">
    <h5 class="card-header">{{ category.nameKO }} <span class="badge badge-pill badge-secondary">{{ btnName }}</span></h5>
    <div class="card-body text-center">
      <h2 class="card-title mb-0">
        <ruby>{{ category.nameJA }} <rt>{{ category.furigana }}</rt></ruby>
      </h2>
    </div>
    <ul class="list-group list-group-flush">
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
    btnColor: function() {
      if (this.category.type === 'junmai') {
        return 'btn-outline-primary'
      } else if (this.category.type === 'honjozo') {
        return 'btn-outline-danger'
      } else if (this.category.type === 'futsushu') {
        return 'btn-outline-success'
      } else {
        return false
      }
    },
    btnName: function() {
      if (this.category.type === 'junmai') {
        return '준'
      } else if (this.category.type === 'honjozo') {
        return '혼'
      } else if (this.category.type === 'futsushu') {
        return '후'
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>
