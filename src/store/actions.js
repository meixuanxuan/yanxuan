/**
 * Created by 梅轩 on 2019/1/1.
 */
//包含n个间接更新状态数据的对象
//引入发送请求的方法
import {reqHomeData} from '../api'
import {reqCateList} from '../api'
import {RECEIVE_HOME_DATA} from './mutation-types'
import {RECEIVE_CATELIST_DATA} from './mutation-types'
export default {
  //异步获取action数据 homeData
  async getHomeData({commit},cb){
    //获取数据
    const result = await reqHomeData();
    //判断一下是否获取成功
    if (result.code ===0){//成功
      const HomeData = result.data;
      commit(RECEIVE_HOME_DATA,{HomeData});
      //判断一下当前的cb是不是回调函数
      typeof cb==='function' && cb()
    }else {
      console.log('发送请求失败~~')
    }
  },
  //异步获取action数据 homeData
  async getCateList({commit},cb){
    //获取数据
    const result = await reqCateList();
    //判断一下是否获取成功
    if (result.code ===0){//成功
      const cateList = result.data;
      commit(RECEIVE_CATELIST_DATA,{cateList});
      //判断一下当前的cb是不是回调函数
      typeof cb==='function' && cb()
    }else {
      console.log('发送请求失败~~')
    }
  }
}
