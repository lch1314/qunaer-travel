<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_600x330_3bf89257.jpg" />
        <div class="banner-info">
          <div class="banner-title">武汉海昌极地海洋公园</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xeb23;</span>
            74
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  // 组件名字
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_r_800x800_cec96b20.jpg', 'http://img1.qunarzz.com/sight/p0/1801/72/72a7185324a62abfa3.img.jpg_r_800x800_063df8ed.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem

</style>
