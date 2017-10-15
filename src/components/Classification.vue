<template>
  <div class="container">
    <Jombotron></Jombotron>
    <RowList :categories="categories"></RowList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Jombotron from './classification/Jombotron.vue'
import RowList from './classification/RowList.vue'
import * as types from 'store/types'

export default {
  components: {
    Jombotron,
    RowList,
  },
  computed: {
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
