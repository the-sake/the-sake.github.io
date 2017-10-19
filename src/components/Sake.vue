<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <div class="row">
          <div class="col-lg-6">
            <form>
              <FilterBrand :brands="brands" v-on:swichBrand="swichBrand"></FilterBrand>
              <FilterLevel :levels="levels" v-on:swichLevel="swichLevel"></FilterLevel>
            </form>
          </div>
          <div class="col-lg-6">
            <h4>일본주도 x 산도</h4>
            <Scatter v-bind:elements="elements"></Scatter>
          </div>
        </div>
      </div>
    </div>
    <RowList v-bind:sakes="sakes"></RowList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Scatter from './sake/Scatter.vue'
import FilterBrand from './sake/FilterBrand.vue'
import FilterLevel from './sake/FilterLevel.vue'
import RowList from './sake/RowList.vue'
import * as types from 'store/types'

export default {
  components: {
    Scatter,
    FilterBrand,
    FilterLevel,
    RowList,
  },
  computed: {
    ...mapState({
      brands: state => state.brand.list,
      levels: state => state.level.list,
    }),
    ...mapGetters({
      sakes: 'filterSake',
      elements: 'filterElements',
    }),
  },
  methods: {
    ...mapMutations({
      swichBrand: types.SWITCH_BRAND,
      swichLevel: types.SWITCH_LEVEL,
    }),
    ...mapActions({
      fetchSake: types.FETCH_SAKE,
    }),
  },
  created() {
    if (!this.sakes.length) {
      this.fetchSake()
    }
  },
}
</script>

<style>

</style>
