<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background: #eee
        text-indent: .2rem
        margin-top: .1rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .48rem
            font-size: .28rem
            padding-right: 1.4rem
            color: #212121
            ellipsis()
        .item-desc
            line-height: .42rem
            padding-right: 1.4rem
            color: #616161;
            font-size: .24rem
            ellipsis()
        .item-button
            line-height: .44rem
            background: #ff9300
            padding: 0 .1rem
            border-radius: .06rem
            margin-top: .2rem
            color: #fff;
</style>
