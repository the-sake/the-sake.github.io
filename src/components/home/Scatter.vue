<template>
  <div id="visualDiv">
    <svg style="width: 520px; height: 520px; border: 1px lightgray solid;"></svg>
  </div>
</template>

<script>
import * as scatter from './scatter'

export default {
  props: [
    'elements',
  ],
  mounted() {
    console.log('mounted')
    scatter.drawScatter(this.elements)
  },
  watch: {
    elements: function() {
      console.log('updated')
      scatter.updateScatter(this.elements)
    }
  },
  // updated() {
  //   console.log('updated')
  //   scatter.updateScatter(this.elements)
  // },
}
</script>

<style>

</style>
