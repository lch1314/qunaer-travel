<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true, // 循环模式选项
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
    // >>> 让样式穿透  这样外部插件中的样式就不受scoped这个关键字的限制了
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 26.5%
        background: #eee
        .swiper-img
            width: 100%
</style>
