<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword.trim()">
            <ul>
                <li class="search-item border-bottom"
                  v-for="item of list"
                  :key="item.id"
                  @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li v-show="hasNoData" class="search-item search-no-item border-bottom">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  // 组件名字
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
    .search-content
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        background: #eee;
        z-index: 1
        .search-item
            line-height: .62rem
            padding-left: .2rem
            color: #666
            background: #fff
        .search-no-item
            text-align: center
</style>
