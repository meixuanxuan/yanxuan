<!--模板-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/0dde49bdc6a317125c1a051a81cce8d4.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/96cf611743d7b382c11031f29152fa04.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/5c34dc433aabb6f237dc726ae6087c5f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/df6d04118fb06870b7d01b868dac7829.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/254420311ce225943f1abf5e1fc847e5.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
        <div class="swiper-slide" ><a href="javascript:;">
          <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </a></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<!--默认暴露的Vue组件js代码-->
<script>
  //子组件需要引入父组件的时候可以引入组件
  //引入 Swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      //轮播
     new Swiper('.swiper-container', {
        loop:true,// 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*css样式*/
  //设置小圆点的样式，把上面的 scoped 属性去掉就可以设置样式了
.swiper-pagination-bullet
  width 0.85rem
  height 0.17rem
  background #FFF
  border-radius 0
</style>
