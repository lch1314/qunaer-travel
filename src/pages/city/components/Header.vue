<template>
    <div class="header border-bottom">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe682;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  // 组件名字
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        height: $headerHeight
        line-height: $headerHeight
        overflow: hidden
        color: #fff
        text-align: center
        background: $bgColor
        font-size: .32rem
        position: relative
        .header-back
            width: .64rem
            text-align: center
            font-size: .4rem
            position: absolute 
            top: 0
            left: 0
            color: #fff
</style>
