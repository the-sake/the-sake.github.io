<template>
  <div class="container">
    <Jumbotron></Jumbotron>
    <RowList :categories="categories"></RowList>
    <VeTable></VeTable>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Jumbotron from './classification/Jumbotron.vue'
import RowList from './classification/RowList.vue'
import ClassTable from './classification/ClassTable.vue'
import HoTable from './classification/HoTable.vue'
import VeTable from './classification/VeTable.vue'
import CaTable from './classification/CaTable.vue'
import * as types from 'store/types'

export default {
  components: {
    Jumbotron,
    RowList,
    ClassTable,
    HoTable,
    VeTable,
    CaTable,
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
