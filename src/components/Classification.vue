<template>
  <div class="container">
    <h1>사케등급</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import * as types from 'store/types'

export default {
  components: {
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
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
