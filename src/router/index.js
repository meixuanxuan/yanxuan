//引入 vue
import Vue from 'vue';
//引入 vue-router
import VueRouter from 'vue-router';
//引入路由组件
import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
//声明使用vue插件
Vue.use(VueRouter);
//创建路由对象
export default new VueRouter({
  mode:'history',//路径中没有 # 的默认有 设置 hash 也有 #
  //应用中的所有路由
  routes:[
    //一级路由
    {
      path:'/classify',
      component:Classify,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/home',
      component:Home,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/shiwu',
      component:ShiWu,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    {
      path:'/cart',
      component:Cart,
      //路由里面有一个属性 meta 动态给它添加一个属性是否显示底部导航
      meta:{
        isShow:true
      }
    },
    //默认一上来显示
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
