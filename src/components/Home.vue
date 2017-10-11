<template>
  <div>
    <!-- <Jumbotron></Jumbotron> -->
    <div class="container">
      <form>
        <FilterBrand :brands="brands" v-on:swichBrand="swichBrand"></FilterBrand>
        <FilterLevel :levels="levels" v-on:swichLevel="swichLevel"></FilterLevel>
      </form>
    </div>
    <RowList v-bind:sakes="sakes"></RowList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import Jumbotron from './greetings/Jumbotron.vue'
import FilterBrand from './home/FilterBrand.vue'
import FilterLevel from './home/FilterLevel.vue'
import RowList from './home/RowList.vue'
import * as types from 'store/types'

export default {
  components: {
    // Jumbotron,
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
