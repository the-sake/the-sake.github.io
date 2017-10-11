export const filterSake = (state, getters) => {

  return state.sake.content.filter(sake => {
    if ((!getters.enableBrands.length ||
        getters.enableBrands.find(brand => sake.kName.includes(brand.name))) &&
        (!getters.enableLevels.length ||
        getters.enableLevels.find(level => sake.type.includes(level.name)))) {
      return true
    }
    return false
  })
}
