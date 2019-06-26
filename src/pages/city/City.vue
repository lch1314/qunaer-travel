<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  // 组件名字
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped></style>
