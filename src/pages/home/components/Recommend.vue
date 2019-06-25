<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
            title: '武汉海昌极地海洋公园',
            desc: '在“海底两万里”鱼你共舞'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/dc/dc83333aca70040da3.img.jpg_200x200_8fc200de.jpg',
            title: '武汉欢乐谷',
            desc: '来试试中国最高的弹射过山车吧~'
        },
        {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/f9/f9fa2c4b30dc9f5aa3.img.jpg_200x200_165f7560.jpg',
            title: '木兰天池',
            desc: '在“海底两万里”鱼你共舞'
        },
        {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
            title: '武汉海昌极地海洋公园',
            desc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
        },
        {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/3f/f4d858b40070a2232c1f2ffb74d5e2aa.water.jpg_200x200_be41969c.jpg',
            title: '锦里沟',
            desc: '这里最近很火哦，好多人都在点评它呢！'
        },
        {
            id: '0006',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/20/aef8ac7cbef2738d93835fbb.jpg_200x200_adf0e996.jpg',
            title: '木兰清凉寨',
            desc: '山依水活，水依山清，山水辉映，旅游胜境'
        }
      ]
    }
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
    .item
        display: flex
        height: 1.9rem
        overflow: hidden
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                background: #ff9300
                padding: 0 .1rem
                border-radius: .06rem
                margin-top: .2rem
                color: #fff;
</style>
