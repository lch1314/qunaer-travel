<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
</template>

<script>
export default {
  // 组件名字
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        background: $bgColor
        padding: 0 .1rem
        .search-input
            margin-top: .05rem
            box-sizing: border-box
            width: 100%
            height: .62rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
            padding: 0 .4rem
</style>
