<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe682;</div>
        </div>
        <div class="header-center">
            <span class="iconfont search-icon">&#xe613;</span>
            <input class="header-input" placeholder="输入城市/景点/游玩主题" />
        </div>
        <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    // @代表src目录 但是如果在css中引入其他的css@前一定要加~
    // @import '~@/assets/styles/varibles.styl'
    // 我们在build中的webpack.base.conf.js中对styles这个路径起了别名了，它指的就是src/assets/styles这个路径
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        position: relative
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-center
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding: 0 .4rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            .header-input
                width: 100%
                border-radius: .1rem
            input::-webkit-input-placeholder
                color: #ccc
            input::-moz-placeholder
                color: #ccc
            input:-moz-placeholder
                color: #ccc
            input:-ms-input-placeholder
                color: #ccc
            .search-icon
                position: absolute
                top: .15rem
                left: .94rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                font-size: .24rem
</style>
