<template>
  <div class="container">
    <Jumbotron></Jumbotron>
    <RowTable :junmai="junmai" :honjozo="honjozo" :futsushu="futsushu"></RowTable>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Jumbotron from './classification/Jumbotron.vue'
import RowTable from './classification/RowTable.vue'
import * as types from 'store/types'

export default {
  components: {
    Jumbotron,
    RowTable,
  },
  computed: {
    ...mapGetters({
      junmai: 'getJunmai',
      honjozo: 'getHonjozo',
      futsushu: 'getFutsushu',
    }),
    ...mapState({
      categories: state => state.categories.content,
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: types.FETCH_CATEGORIES,
    }),
  },
  created() {
    if (!this.categories.length) {
      this.fetchCategories()
    }
  },
}
</script>

<style>

</style>
