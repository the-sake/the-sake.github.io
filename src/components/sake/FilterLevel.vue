<template>
  <fieldset class="form-group">
    <div class="row">
      <div class="col-sm-2">특정명칭종별</div>
      <div class="col-sm-10">
        <div class="row">
          <div class="col-6" v-for="(level, index) in levels" v-bind:key="index">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"
                    v-bind:checked="level.enable"
                    @change="toggle(level.name, !level.enable)">
                {{level.name}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: [
    'levels',
  ],
  methods: {
    toggle(name, enable) {
      this.$emit('swichLevel', {name, enable})
    }
  },
}
</script>

<style>

</style>
