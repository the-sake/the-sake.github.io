export const filterSake = (state, getters) => {
  return state.sake.content.filter(sake => {
    if ((!getters.enableBrands.length ||
        getters.enableBrands.find(brand => sake.brandKO === brand.name)) &&
        (!getters.enableLevels.length ||
        getters.enableLevels.find(level => sake.classificationKO.split(' ')[0] === level.name))) {
      return true
    }
    return false
  })
}

export const filterElements = (state, getters) => {
  const result = [];

  getters.filterSake.map(sake => {
    let smv = parseInt(sake.sakeMeterValue === '±0' ? 0 : sake.sakeMeterValue)
    let acidity = parseFloat(sake.acidityLevel)
    if (Number.isInteger(smv) && !Number.isNaN(acidity)) {
      result.push({ smv, acidity, name: sake.productKO })
    }
  })
  return result
}
