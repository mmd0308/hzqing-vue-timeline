<template>
  <div id="app">
    <hzqing-vue-timeline timelineColor="#5bbcd5"  timeContentColor="#fff" :dataList="data"></hzqing-vue-timeline>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [
        {
            time: '2018年03月28日 09:45',
            img: 'static/touxiang.jpeg',
            title: 'hzqing.com',
            content: '这是衡钊清的个人博客'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app{
   background: #5bbcd5;
}
</style>
