/**
 * Created by 梅轩 on 2019/1/1.
 */
import Mock from 'mockjs'
import CateList from './cateList.json'
import FeileiList from './feilei_list.json'
import FenleiZhuanqu from './fenlei_zhuanqu.json'
import HomeData from './shouye_data.json'
Mock.mock('/cateList',{
  code: 0,
  data: CateList
})
Mock.mock('/shouye_data',{
  code: 0,
  data: HomeData
})
Mock.mock('/feilei_list', {
  code: 0,
  data: FeileiList
})
Mock.mock('/fenlei_zhuanqu', {
  code: 0,
  data: FenleiZhuanqu
})
