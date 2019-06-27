<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe682;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe682;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名字
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 20) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 对全局滚动事件解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    text-align: center
    line-height: .8rem
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    z-index: 2
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    text-align: center
    background: $bgColor
    font-size: .32rem
    position: fixed
    top: 0
    left: 0
    right: 0
    .header-fixed-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: .2rem
      color: #fff
</style>
