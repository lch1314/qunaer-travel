<template>
  <div id="app">
    <!-- 意思是路由的内容被加载过一次之后，就把路由中的内容放到内存之后，下一次再进这个路由的时候不需要重新渲染这个组件了，从内存中拿就可以了 -->
    <!-- keep-alive 是vue中自带的 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
