<template>
  <div>
    Home
    <!-- <Jumbotron></Jumbotron> -->
    <RowList v-bind:sakes="sake.content"></RowList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import Jumbotron from './greetings/Jumbotron.vue'
import RowList from './home/RowList.vue'
import * as types from 'store/types'

export default {
  components: {
    // Jumbotron,
    RowList,
  },
  computed: {
    ...mapState([
      'sake',
    ]),
  },
  methods: {
    ...mapActions({
      fetch: types.FETCH_SAKE,
    }),
  },
  created() {
    if (!this.sake.content.length) {
      this.fetch()
    }
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
