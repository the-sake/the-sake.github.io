<template>
  <div class="container">
    <Jumbotron></Jumbotron>
    <template v-for="(company, index) in companies">
      <Card :company="company" :key="index"></Card>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Jumbotron from './brands/Jumbotron.vue'
import Card from './brands/Card.vue'
import * as types from 'store/types'

export default {
  components: {
    Jumbotron,
    Card,
  },
  computed: {
    ...mapState({
      companies: state => state.companies.content,
    }),
  },
  methods: {
    ...mapActions({
      fetchCompanies: types.FETCH_COMPANIES,
    }),
  },
  created() {
    if (!this.companies.length) {
      this.fetchCompanies()
    }
  },
}
</script>

<style>

</style>
